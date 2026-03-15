# 🧪 Test Data Management (TDM) Plan

In FinTech and Healthcare, test data is a double-edged sword: it must be realistic to find bugs but secure to protect privacy. This plan outlines our strategy for data generation, masking, and edge case simulation.

---

## 🔒 1. Data Security & PII Masking
To comply with **GDPR** and **HIPAA**, all production data used in lower environments must be anonymized.

| Data Type | Masking Technique | Example |
| :--- | :--- | :--- |
| **User Name** | Shuffling / Substitution | `John Doe` → `User_8829` |
| **SSN / Tax ID** | Partial Redaction | `XXX-XX-1234` |
| **Credit Card** | Format Preserving Enc. | `4111-XXXX-XXXX-1111` |
| **Patient DOB** | Date Shifting | `1985-05-20` → `1985-01-01` |
| **Email** | Domain Substitution | `john@gmail.com` → `test_user@mock.internal` |

---

## 🚀 2. Edge Case Data Strategy

### 💸 Scenario A: Negative Balance on a Leap Year
**Requirement**: Interest should not be charged/accrued incorrectly on Feb 29th for accounts with negative balances.
- **Base Date**: Feb 28th, 2024 (Leap Year)
- **Clock Shift**: Simulate transition to Feb 29th.
- **Initial Balance**: -$500.25 (Negative)
- **Expected Outcome**: Account status remains 'Overdrawn', interest accrued is exactly 0.00 (unless overdraft fee applies).

### 🏥 Scenario B: Insurance Multi-Claim Collision
**Requirement**: Concurrent claims for the same patient on the same day must be flagged as potential duplicates.
- **Input 1**: Claim_ID_A, Patient_ID_101, Service_Code_99213, Date: 2023-10-10 09:00
- **Input 2**: Claim_ID_B, Patient_ID_101, Service_Code_99213, Date: 2023-10-10 09:05
- **Expected Outcome**: System triggers "Duplicate Billing Error" code 409.

---

## 🛠 3. Data Generation Tools & Scripts
We utilize a mix of custom scripts and standard tools to populate our environments.

### 🐍 Python Data Generator (Simulated)
```python
import faker
import random

fake = faker.Faker()

def generate_fintech_user():
    return {
        "user_id": fake.uuid4(),
        "account_balance": round(random.uniform(-1000, 50000), 2),
        "is_leap_year_born": random.choice([True, False]),
        "ssn_masked": f"XXX-XX-{random.randint(1000, 9999)}",
        "created_at": fake.date_before_year(2024)
    }

# Bulk generate 1000 test users
test_users = [generate_fintech_user() for _ in range(1000)]
```

---

## 📁 4. Test Data Inventory
- **Gold Dataset**: A stable set of 50 users used for every Smoke test.
- **Stress Dataset**: 100,000+ records for Load/Performance testing.
- **Negative Dataset**: Users with expired IDs, locked accounts, and zero balances.
- **Compliance Dataset**: Users from specific jurisdictions (California, EU) to test CCPA/GDPR rules.
