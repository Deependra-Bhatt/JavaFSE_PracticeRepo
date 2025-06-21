import java.util.*;

public class FinancialForecast {
    public static void main (String args []){
        Scanner sc= new Scanner(System.in);

        System.out.println("Enter the present value: ");
        double presentValue= sc.nextDouble();

        System.out.println("Enter the growth rate: ");
        double growthRate=sc.nextDouble();

        System.out.println("Enter the no. of years: ");
        int years=sc.nextInt();

        // predicting future value using recursion
        double predictedValue=futureValue(presentValue, growthRate, years);
        System.out.println("Predicted Value(using recutsion): " +predictedValue);

        // predicting future value using direct formula
        predictedValue=optimizedFutureValue(presentValue,growthRate,years);
        System.out.println("Predicted Value(using direct formula): " +predictedValue);
    }

    /*
     * Concept: 
            The formula used to calculate future value is:
                futureValue= presentValue*((1+growthRate)^n)
     */
    
    public static double futureValue(double presentValue, double growthRate, int years){
        
        if(years==0){   // Base Case
            return presentValue;
        }

        // Recursive Call
        return futureValue(presentValue*(1+growthRate), growthRate, years-1);

        /*
         * Analysis: Recusrsive Approach
                Time Complexity: O(n)
                Space Complexity: O(n)      [used for recusrion stack]
         */
    }

    /*
     * Optimization: 
            To optimize we can use two methods:

            1. Iteration: This method reduces the space complexity to O(1), 
                            since there is no need to store recursion stack.

            2. Direct Formula: This further reduces the time complexity.
     */
    
    public static double optimizedFutureValue(double presentValue, double growthRate, int years){
        //Using direct mathematical formula 
        return (presentValue*Math.pow((1+growthRate), years));

        /*
         * Analysis: Direct Formula
                Time Complexity: O(1)       [using direct formula to reduce no. of operations]
                Space Complexity: O(1)      
         */
    }
}
