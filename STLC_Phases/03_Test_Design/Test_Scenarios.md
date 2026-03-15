# 🧪 Test Scenarios - FinTech & Healthcare

This document outlines high-level scenarios used to drive test case creation, focusing on edge cases and complex user journeys.

---

## 🏦 1. FinTech: Payments & Accounts

### Scenario 1.1: Intra-day Overdraft across Leap Year Boundary
**Scenario**: A user with a balance of $10.00 initiates a transfer for $15.00 at 23:59:50 on Feb 28, 2024.
- **Complexity**: Time-zone sensitivity + Leap Year logic + Overdraft rules.
- **Key Check**: Does the interest for the overdraft trigger correctly on Feb 29?

### Scenario 1.2: Concurrent P2P and Card Swipe
**Scenario**: User initiates a $500 P2P transfer while simultaneously swiping their physical card for a $100 purchase. Total balance is $550.
- **Complexity**: Race condition / Database locking.
- **Key Check**: Does the system block the second transaction once the balance is insufficient, or does it allow both (Partial double-spend)?

---

## 🏥 2. Healthcare: Claims & Insurance

### Scenario 2.1: Multi-Provider Claim Collision
**Scenario**: Patient visits a GP and a Specialist on the same day. Both providers submit a claim for the same diagnosis (ICD-10) within 30 minutes.
- **Complexity**: Duplicate billing detection logic.
- **Key Check**: Does the system identify them as unique visits or flag the second as a 'Potential Duplicate' for manual review?

### Scenario 2.2: Retroactive Plan Termination
**Scenario**: A claim is submitted today for a service rendered 3 months ago. The patient's insurance was terminated 1 month ago but was active on the Service Date.
- **Complexity**: Date arithmetic and eligibility history.
- **Key Check**: Does the system correctly approve based on 'Date of Service' rather than 'Current Eligibility'?

---

## 🔐 3. Security & Compliance

### Scenario 3.1: Brute Force with IP Rotation
**Scenario**: An attacker attempts to log in using 100 different proxy IPs to bypass single-IP rate limiting.
- **Complexity**: Infrastructure-level security.
- **Key Check**: Does the system lock the **Account ID** regardless of the source IP?

### Scenario 3.2: PII Data Leakage in Error Messages
**Scenario**: A user enters an invalid SSN format. The API returns a 400 error.
- **Complexity**: Data privacy.
- **Key Check**: Ensure the error message does not echo back the input (e.g., "Invalid SSN XXX-XX-XXXX") but instead returns a generic "Invalid Input Format".
