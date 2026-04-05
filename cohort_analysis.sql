-- Schema Setup for Loan Portfolio
CREATE TABLE IF NOT EXISTS loan_portfolio (
    borrower_id INT PRIMARY KEY,
    dti_ratio DECIMAL(5,4),
    credit_utilisation DECIMAL(5,4),
    employment_tenure_yrs INT,
    loan_to_income_ratio DECIMAL(5,4),
    recent_inquiries_6m INT,
    default_status INT
);

-- Delinquency Cohort Analysis: Impact of Recent Inquiries on Default Rates
WITH InquiryCohorts AS (
    SELECT 
        borrower_id,
        recent_inquiries_6m,
        default_status,
        CASE 
            WHEN recent_inquiries_6m >= 3 THEN '3+ Inquiries'
            ELSE '0-2 Inquiries'
        END AS inquiry_tier
    FROM loan_portfolio
),
CohortStats AS (
    SELECT 
        inquiry_tier,
        COUNT(borrower_id) AS total_borrowers,
        SUM(default_status) AS total_defaults,
        (SUM(default_status) / COUNT(borrower_id)) * 100 AS default_rate_pct
    FROM InquiryCohorts
    GROUP BY inquiry_tier
)
SELECT 
    inquiry_tier,
    total_borrowers,
    total_defaults,
    ROUND(default_rate_pct, 2) AS default_rate,
    -- Window function to calculate the 2.4x risk multiplier mentioned in the resume
    ROUND(default_rate_pct / FIRST_VALUE(default_rate_pct) OVER(ORDER BY inquiry_tier), 2) AS risk_multiplier
FROM CohortStats;
