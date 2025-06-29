-- Connect as a User
CREATE TRIGGER CheckTransactionRules
BEFORE INSERT ON Transactions
FOR EACH ROW
DECLARE
    v_Balance NUMBER;
BEGIN
    -- Get current account balance
    SELECT Balance INTO v_Balance
    FROM Accounts
    WHERE AccountID = :NEW.AccountID;

    -- Rule: Deposits must be > 0
    IF :NEW.TransactionType = 'Credit' AND :NEW.Amount <= 0 THEN
        RAISE_APPLICATION_ERROR(-20001, 'Deposit amount must be greater than zero.');
    END IF;

    -- Rule: Withdrawals must not exceed balance
    IF :NEW.TransactionType = 'Debit' AND :NEW.Amount > v_Balance THEN
        RAISE_APPLICATION_ERROR(-20002, 'Withdrawal amount exceeds account balance.');
    END IF;
END;
/
