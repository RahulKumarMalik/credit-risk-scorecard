import pandas as pd
import numpy as np

# Set seed for reproducibility
np.random.seed(42)
num_records = 50000

# Generate simulated borrower data
data = {
    'borrower_id': range(100001, 100001 + num_records),
    'dti_ratio': np.random.uniform(0.1, 0.6, num_records), 
    'credit_utilisation': np.random.uniform(0.1, 0.95, num_records), 
    'employment_tenure_yrs': np.random.randint(0, 20, num_records), 
    'loan_to_income_ratio': np.random.uniform(0.05, 0.5, num_records), 
    'recent_inquiries_6m': np.random.choice([0, 1, 2, 3, 4, 5], num_records, p=[0.4, 0.3, 0.15, 0.08, 0.05, 0.02])
}

df = pd.DataFrame(data)

# Simulate default status (1 = Default, 0 = Paid) weighted heavily by inquiries to match the SQL findings
df['default_status'] = np.where(df['recent_inquiries_6m'] >= 3, 
                                np.random.choice([0, 1], num_records, p=[0.6, 0.4]), 
                                np.random.choice([0, 1], num_records, p=[0.85, 0.15])) 

# Export to CSV
df.to_csv('loan_portfolio.csv', index=False)
print(f"Successfully generated {num_records} borrower records in 'loan_portfolio.csv'")
