# 🐛 Defect Log - Project NeoBank

This log tracks all defects discovered during the STLC cycle, categorized by their source requirement and severity.

| Bug ID | Title | Priority | Severity | Status | Related BR | Fix Version |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **BUG-101** | MFA code not sent via SMS for specific regional carriers. | P1 | High | ✅ Fixed | BR-14 | v1.0 |
| **BUG-102** | FaceID setup fails on iPhone 15 Pro Max (iOS 17.4). | P2 | Medium | ⚒️ In Progress | BR-04 | v1.1 |
| **BUG-103** | Database deadlock during concurrent high-value wire transfers. | P1 | Critical | ✅ Fixed | BR-51 | v1.0 |
| **BUG-104** | SSN masking fails if leading zeros are present. | P2 | High | ✅ Fixed | BR-17 | v1.0 |
| **BUG-105** | Swift transfer fails for Euro to GBP conversion. | P2 | High | ⚠️ Open | BR-11 | v1.1 |
| **BUG-106** | Session timeout triggers at 4 mins instead of 5 mins. | P3 | Low | ✅ Fixed | BR-15 | v1.0 |
| **BUG-107** | Interest accrued correctly but rounding error in UI (3 decimals). | P3 | Low | ✅ Fixed | BR-08 | v1.0 |
| **BUG-108** | Dividend Reinvestment (DRIP) toggle state not persisting. | P3 | Medium | ⚠️ Open | BR-28 | v1.1 |
| **BUG-109** | Claims API returns 500 when ICD-10 code is exactly 7 chars. | P1 | High | ✅ Fixed | BR-37 | v1.0 |
| **BUG-110** | Healthcare copay calculated as $0 for 'Gold' plans. | P2 | High | ⚠️ Open | BR-38 | v1.0 (Hotfix) |

---

## 🛠️ Defect Lifecycle Policy
We follow a strict **Triage -> Build -> Verify -> Close** lifecycle.
- **Critical/High**: Fixed immediately; required for Release.
- **Medium**: Fixed if time permits; otherwise deferred to next Sprint.
- **Low**: Backlogged for future UX enhancements.
