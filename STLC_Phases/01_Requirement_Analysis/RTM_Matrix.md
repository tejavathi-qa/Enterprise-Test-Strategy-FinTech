# 📊 Requirements Traceability Matrix (RTM)

This document maps Business Requirements (BR) to Technical Requirements (TR), Test Cases (TC), and Defect IDs (BUG), ensuring 100% coverage for the **NeoBank Enterprise Core** platform.

> Coverage Status: **100% (52/52 Requirements Covered)**

---

| BR ID | Module | Requirement Description | Test Case ID | Status | Defect ID |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **BR-01** | **Onboarding** | User must provide valid SSN/TIN for KYC. | TC-ONB-01, TC-ONB-02 | ✅ Pass | - |
| **BR-02** | **Onboarding** | System must verify identity via Third-Party API. | TC-ONB-03 | ✅ Pass | - |
| **BR-03** | **Onboarding** | Duplicate email addresses should be rejected. | TC-ONB-04 | ✅ Pass | - |
| **BR-04** | **Onboarding** | Support for Biometric (FaceID/TouchID) setup. | TC-ONB-05 | ⚠️ Fail | BUG-102 |
| **BR-05** | **Accounts** | Daily withdrawal limit must not exceed $5,000. | TC-ACC-01 | ✅ Pass | - |
| **BR-06** | **Accounts** | Overdraft protection should trigger at -$0.01. | TC-ACC-02 | ✅ Pass | - |
| **BR-07** | **Accounts** | Support for joint account holder permissions. | TC-ACC-03 | ✅ Pass | - |
| **BR-08** | **Accounts** | Interest calculation for Leap Year (Feb 29). | TC-ACC-04, TC-ACC-05 | ✅ Pass | - |
| **BR-09** | **Payments** | Real-time P2P transfers between internal accounts. | TC-PAY-01 | ✅ Pass | - |
| **BR-10** | **Payments** | ACH transfers must take 3-5 business days. | TC-PAY-02 | ✅ Pass | - |
| **BR-11** | **Payments** | Swift/Wire transfers for International payments. | TC-PAY-03 | ⚠️ Fail | BUG-105 |
| **BR-12** | **Payments** | Currency conversion using mid-market live rates. | TC-PAY-04 | ✅ Pass | - |
| **BR-13** | **Payments** | Transaction fee transparency (display before confirm). | TC-PAY-05 | ✅ Pass | - |
| **BR-14** | **Security** | Multi-Factor Authentication (MFA) for logins. | TC-SEC-01 | ✅ Pass | - |
| **BR-15** | **Security** | Session timeout after 5 minutes of inactivity. | TC-SEC-02 | ✅ Pass | - |
| **BR-16** | **Security** | Data Encryption at rest (AES-256). | TC-SEC-03 | ✅ Pass | - |
| **BR-17** | **Security** | PII Masking in database logs (SSN, Card Num). | TC-SEC-04 | ✅ Pass | - |
| **BR-18** | **Security** | Brute force protection (lock after 5 attempts). | TC-SEC-05 | ✅ Pass | - |
| **BR-19** | **Cards** | virtual card generation for one-time use. | TC-CRD-01 | ✅ Pass | - |
| **BR-20** | **Cards** | Physical card activation via QR code. | TC-CRD-02 | ✅ Pass | - |
| **BR-21** | **Cards** | Freeze/Unfreeze card functionality. | TC-CRD-03 | ✅ Pass | - |
| **BR-22** | **Cards** | Merchant category blocking (e.g., gambling). | TC-CRD-04 | ✅ Pass | - |
| **BR-23** | **Loans** | Credit score check integration (Experian/Equifax). | TC-LON-01 | ✅ Pass | - |
| **BR-24** | **Loans** | Auto-approval for loans under $1,000. | TC-LON-02 | ✅ Pass | - |
| **BR-25** | **Loans** | Repayment schedule generator (Amortization). | TC-LON-03 | ✅ Pass | - |
| **BR-26** | **Invest** | Buy/Sell fractional shares of US Equities. | TC-INV-01 | ✅ Pass | - |
| **BR-27** | **Invest** | Real-time portfolio valuation updates. | TC-INV-02 | ✅ Pass | - |
| **BR-28** | **Invest** | Dividend reinvestment plan (DRIP) toggle. | TC-INV-03 | ⚠️ Fail | BUG-108 |
| **BR-29** | **Support** | In-app Chat support with agent handoff. | TC-SUP-01 | ✅ Pass | - |
| **BR-30** | **Support** | automated FAQ bot for basic queries. | TC-SUP-02 | ✅ Pass | - |
| **BR-31** | **Compliance** | Anti-Money Laundering (AML) flag for >$10k. | TC-CMP-01 | ✅ Pass | - |
| **BR-32** | **Compliance** | GDPR "Right to be Forgotten" implementation. | TC-CMP-02 | ✅ Pass | - |
| **BR-33** | **Compliance** | Monthly statement generation in PDF format. | TC-CMP-03 | ✅ Pass | - |
| **BR-34** | **Healthcare** | Patient insurance eligibility verification. | TC-HEA-01 | ✅ Pass | - |
| **BR-35** | **Healthcare** | HIPAA-compliant patient record access logs. | TC-HEA-02 | ✅ Pass | - |
| **BR-36** | **Healthcare** | Claims submission to clearinghouse. | TC-HEA-03 | ✅ Pass | - |
| **BR-37** | **Healthcare** | ICD-10 code validation for diagnosis. | TC-HEA-04 | ✅ Pass | - |
| **BR-38** | **Healthcare** | Copay calculation based on plan details. | TC-HEA-05 | ⚠️ Fail | BUG-110 |
| **BR-39** | **Reporting** | End-of-day reconciliation report. | TC-REP-01 | ✅ Pass | - |
| **BR-40** | **Reporting** | User spending category breakdown (AI Tags). | TC-REP-02 | ✅ Pass | - |
| **BR-41** | **API** | OAuth2 implementation for Open Banking. | TC-API-01 | ✅ Pass | - |
| **BR-42** | **API** | Webhook notifications for credit events. | TC-API-02 | ✅ Pass | - |
| **BR-43** | **Mobile** | Push notification delivery for low balance. | TC-MOB-01 | ✅ Pass | - |
| **BR-44** | **Mobile** | Dark mode support across all screens. | TC-MOB-02 | ✅ Pass | - |
| **BR-45** | **Admin** | Role-based Access Control (RBAC) for staff. | TC-ADM-01 | ✅ Pass | - |
| **BR-46** | **Admin** | Reversing transaction capability for audits. | TC-ADM-02 | ✅ Pass | - |
| **BR-47** | **Auth** | Password reset via email/SMS link. | TC-AUT-01 | ✅ Pass | - |
| **BR-48** | **Auth** | CAPTCHA implementation on login screen. | TC-AUT-02 | ✅ Pass | - |
| **BR-49** | **Performance**| System must handle 10,000 requests/sec. | TC-PER-01 | ✅ Pass | - |
| **BR-50** | **Performance**| Database failover within 3 seconds. | TC-PER-02 | ✅ Pass | - |
| **BR-51** | **Integrity** | Database Atomic transactions (No partial commits). | TC-INT-01 | ✅ Pass | - |
| **BR-52** | **Leap Year** | Automated interest accrual on Feb 29. | TC-EXT-01 | ✅ Pass | - |

---

### 📈 Metrics
- **Total Requirements**: 52
- **Test Cases Linked**: 58
- **Pass Rate**: 92%
- **Open Defects**: 4
