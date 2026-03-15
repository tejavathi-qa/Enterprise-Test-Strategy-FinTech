# ⚖️ Risk-Based Testing (RBT) Matrix

Risk-based testing (RBT) is a strategy that prioritizes the testing of features based on the risk of failure. This is essential for FinTech and Healthcare where downtime or data breaches have catastrophic impacts.

## 📊 Risk Assessment Model
We use a **5x5 Matrix** to calculate the Risk Score:  
`Risk Score = Probability of Failure × Impact of Failure`

| Score | Rating | Priority |
| :--- | :--- | :--- |
| 16 - 25 | **Critical** | Immediate Testing / Core Focus |
| 10 - 15 | **High** | Major Focus / Detailed Edge Cases |
| 5 - 9 | **Medium** | Standard Testing |
| 1 - 4 | **Low** | Happy Path / Exploratory |

---

## 🔍 Feature Risk Mapping

| Feature / Module | Impact (1-5) | Prob. (1-5) | Risk Score | Priority | Mitigation Strategy |
| :--- | :---: | :---: | :---: | :--- | :--- |
| **Real-time Fund Transfer** | 5 | 5 | **25** | 🔴 Critical | Atomic transaction logs, Load testing, Negative balance tests. |
| **User Authentication (MFA)** | 5 | 4 | **20** | 🔴 Critical | Penetration testing, Brute-force simulation. |
| **Patient Data Privacy** | 5 | 3 | **15** | 🟠 High | HIPAA compliance audit, PII Masking verification. |
| **Interest Rate Calculation** | 4 | 4 | **16** | 🔴 Critical | Extensive boundary value analysis (e.g., Leap Year). |
| **Mobile Push Notifications**| 2 | 4 | **8** | 🟡 Medium | Functional testing across OS versions. |
| **Currency Conversion** | 3 | 3 | **9** | 🟡 Medium | Integration testing with live API providers. |
| **Dark Mode UI** | 1 | 2 | **2** | 🟢 Low | Exploratory / Visual regression. |
| **In-app Chat Support** | 2 | 3 | **6** | 🟡 Medium | API response time and socket connection tests. |
| **Claim Submission (Health)**| 5 | 2 | **10** | 🟠 High | Schema validation for ICD-10 codes. |
| **Admin Dashboard Reports** | 3 | 2 | **6** | 🟡 Medium | Data integrity checks against DB queries. |

---

## 🗺️ Visualization (Mermaid)

```mermaid
quadrantChart
    title Feature Risk Quadrant
    x-axis Low Probability --> High Probability
    y-axis Low Impact --> High Impact
    quadrant-1 High Impact / High Prob (CRITICAL)
    quadrant-2 High Impact / Low Prob (SIGNIFICANT)
    quadrant-3 Low Impact / Low Prob (MINOR)
    quadrant-4 Low Impact / High Prob (OPERATIONAL)
    "Fund Transfer": [0.9, 0.9]
    "MFA Login": [0.8, 0.85]
    "Patient PII": [0.4, 0.8]
    "Interest Calc": [0.7, 0.75]
    "Push Notifications": [0.8, 0.3]
    "Dark Mode": [0.2, 0.1]
    "Currency API": [0.5, 0.4]
```

---

## 🎯 Test Strategy based on RBT
1. **Critical (Score 16-25)**: 100% automation coverage, 100% regression, performance testing, and security scanning.
2. **High (Score 10-15)**: Functional automation, negative testing, and boundary value analysis.
3. **Medium (Score 5-9)**: Smoke testing and manual functional testing.
4. **Low (Score 1-4)**: Manual execution on a need-to-know basis.
