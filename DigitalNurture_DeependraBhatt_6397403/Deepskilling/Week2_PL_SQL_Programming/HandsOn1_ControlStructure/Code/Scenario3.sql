DECLARE
    v_name Customers.Name%TYPE;
BEGIN
    FOR loan_rec IN (
        SELECT CustomerID, LoanID, EndDate
        FROM Loans
        WHERE EndDate BETWEEN SYSDATE AND SYSDATE + 30
    ) LOOP
        SELECT Name INTO v_name
        FROM Customers
        WHERE CustomerID = loan_rec.CustomerID;

        DBMS_OUTPUT.PUT_LINE('Reminder: Customer ' || v_name || 
                             ' (Loan ID: ' || loan_rec.LoanID || 
                             ') has a loan due on ' || TO_CHAR(loan_rec.EndDate, 'YYYY-MM-DD'));
    END LOOP;
END;
/
