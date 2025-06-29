CREATE PROCEDURE ProcessMonthlyInterest IS
BEGIN
    FOR acc_rec IN (
        SELECT AccountID, Balance
        FROM Accounts
        WHERE AccountType = 'Savings'
    ) LOOP
        UPDATE Accounts
        SET Balance = Balance + (Balance * 0.01),
            LastModified = SYSDATE
        WHERE AccountID = acc_rec.AccountID;
    END LOOP;

    COMMIT;
END;
/
