import pandas as pd
import json

# Load Excel
excel_file = 'reddit_comments.xlsx'
df = pd.read_excel(excel_file, sheet_name="2025-07-20")  # Load all sheets

# Combine all sheets (optional)
data =  df.to_dict(orient='records')

# Save to JSON
with open('progress/2025-07-20.json', 'w') as f:
    json.dump(data, f, indent=4)

xls = pd.ExcelFile(excel_file)
print(xls.sheet_names)
