# Credit Risk Scorecard & Borrower Default Analysis

## 📌 Project Overview
This project simulates a real-world credit appraisal workflow. It involves the analysis of a 50,000-record loan portfolio to identify key default drivers, build a weighted credit scorecard, and automate risk reporting. 

**🔴 [View the Live Interactive Dashboard Here](https://rahulkumarmalik.github.io/credit-risk-scorecard/)**

## 🛠️ Tools & Technologies Used
* **Advanced Excel:** Nested IF logic, SUMPRODUCT scoring, Power Query, Pivot-based MIS, VBA Macros.
* **MySQL:** Window functions, Cohort Analysis, Aggregations.
* **Python (Pandas):** Data simulation and generation.
* **HTML/CSS/JS (Chart.js):** Interactive web dashboard for executive presentation.

## 📊 Key Business Findings
* **Cohort Analysis:** Accounts with 3+ credit inquiries within 6 months carry a 2.4x higher default rate than the baseline. 
* **Process Efficiency:** Automated data validation and exception-flagging using Excel VBA, reducing monthly data preparation time from 3 hours to under 20 minutes.
* **Risk Stratification:** Successfully segmented borrowers into Low, Medium, and High-risk tiers to support structured underwriting decisions.

## 📂 Repository Contents
* `index.html`, `style.css`, `script.js`: Source code for the interactive web dashboard.
* `data_generator.py`: Python script used to generate the simulated 50k borrower dataset.
* `cohort_analysis.sql`: SQL scripts detailing the delinquency cohort analysis and window functions.
* `Credit_Risk_Scorecard.xlsm`: Contains the weighted scorecard, Pivot MIS reports, scenario-based sensitivity tables, and the VBA exception-flagging macro.
