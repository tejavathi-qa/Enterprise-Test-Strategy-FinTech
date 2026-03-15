# 📝 Test Cases - FinTech Module

This document contains high-level test case definitions for the FinTech Core module.

| TC ID | Sub-Module | Test Case Description | Pre-requisites | Test Steps | Expected Result | Priority |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **TC-ONB-01** | Onboarding | Verify KYC validation with valid US SSN. | App is open, user is on KYC screen. | 1. Enter valid name<br>2. Enter valid SSN (9 digits)<br>3. Submit. | User proceeds to 'Identity Verified' screen. | P1 |
| **TC-ACC-04** | Accounts | Interest accrual on Leap Year (Positive Balance). | Account balance > $0, Date set to Feb 29. | 1. Check balance at EOD Feb 28.<br>2. Wait for EOD Feb 29. | Balance reflects daily interest + Leap Day bonus. | P2 |
| **TC-ACC-05** | Accounts | Interest accrual on Leap Year (Negative Balance). | Account balance < $0, Date set to Feb 29. | 1. Overdraw account on Feb 28.<br>2. Wait for EOD Feb 29. | No interest is added to the balance. | P1 |
| **TC-SEC-04** | Security | PII Masking in Audit Logs. | Admin privileges enabled. | 1. Perform a transaction.<br>2. Open system audit logs. | SSN and Card numbers are seen as 'XXXX-XXXX...'. | P1 |
| **TC-PAY-02** | Payments | ACH Transfer timing (Business Days). | Sufficient balance. | 1. Initiate ACH on Friday 10 PM. | Funds are not settled until min. Wednesday. | P2 |
| **TC-MOB-01** | Mobile | Push notification for low balance alert. | App installed, notifications enabled. | 1. Reduce balance below $5.00 threshold. | Push notification arrives within 30 seconds. | P3 |

---

## 🏗️ Case Construction Strategy
- **Equivalence Partitioning**: Used for SSN and Amount fields.
- **Boundary Value Analysis**: Used for Withdrawal limits ($0, $1, $4999, $5000, $5001).
- **Decision Table Testing**: Used for Insurance Eligibility logic.
- **Error Guessing**: Used for "Rapid tap" on Transfer buttons and "Leap Year" scenarios.
