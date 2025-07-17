import pandas as pd
import json

# Load Excel
excel_file = 'reddit_comments.xlsx'
<<<<<<< HEAD
df = pd.read_excel(excel_file, sheet_name="2025-07-13")  # Load all sheets
=======
df = pd.read_excel(excel_file, sheet_name="Final-data")  # Load all sheets
>>>>>>> Day-5_Branch

# Combine all sheets (optional)
data =  df.to_dict(orient='records')

# Save to JSON
<<<<<<< HEAD
with open('progress/2025-07-13.json', 'w') as f:
=======
with open('data.json', 'w') as f:
>>>>>>> Day-5_Branch
    json.dump(data, f, indent=4)

xls = pd.ExcelFile(excel_file)
print(xls.sheet_names)
