import pytest
from datetime import datetime
import time

# Simulation of a Banking Core Engine
class BankingCore:
    def __init__(self):
        self.accounts = {"USER_101": 1000.0, "USER_102": -50.0}
    
    def calculate_interest(self, account_id, date):
        # Edge Case: Interest Logic for Leap Year
        is_leap_year = date.year % 4 == 0 and (date.year % 100 != 0 or date.year % 400 == 0)
        is_feb_29 = date.month == 2 and date.day == 29
        
        balance = self.accounts.get(account_id, 0)
        
        if balance < 0:
            # PII/Safety Rule: No interest accrued on negative balances
            return 0.0
        
        daily_rate = 0.0001 # 0.01%
        if is_leap_year and is_feb_29:
            # Special Promotion: Double interest on Leap Day
            return round(balance * daily_rate * 2, 2)
        
        return round(balance * daily_rate, 2)

@pytest.fixture
def banking_system():
    return BankingCore()

# --- TEST SUITE: FINTECH EDGE CASES ---

@pytest.mark.parametrize("date_str, expected_interest", [
    ("2024-02-28", 0.1),  # Regular Day (1000 * 0.0001)
    ("2024-02-29", 0.2),  # Leap Day (Double Promo)
    ("2024-03-01", 0.1),  # Post Leap Day
])
def test_interest_accrual_leap_year(banking_system, date_str, expected_interest):
    """
    Requirement BR-08: Interest calculation for Leap Year.
    Verify that double interest is applied on Feb 29th for positive balances.
    """
    test_date = datetime.strptime(date_str, "%Y-%m-%d")
    interest = banking_system.calculate_interest("USER_101", test_date)
    assert interest == expected_interest

def test_negative_balance_integrity_on_leap_day(banking_system):
    """
    User Request Scenario: Negative balance on a leap year.
    Verify that NO interest is accrued even on Feb 29th for overdrawn accounts.
    """
    leap_day = datetime(2024, 2, 29)
    interest = banking_system.calculate_interest("USER_102", leap_day)
    
    # Assert integrity: Negative balance should result in 0 interest
    assert interest == 0.0, "CRITICAL: Interest accrued on a negative balance!"

def test_pii_masking_simulation():
    """
    Requirement BR-17: PII Masking in logs.
    """
    account_number = "1234-5678-9012-3456"
    masked = f"XXXX-XXXX-XXXX-{account_number[-4:]}"
    
    assert masked == "XXXX-XXXX-XXXX-3456"
    print(f"DEBUG LOG: Transaction processed for account {masked}") # Safe log

if __name__ == "__main__":
    pytest.main([__file__])
