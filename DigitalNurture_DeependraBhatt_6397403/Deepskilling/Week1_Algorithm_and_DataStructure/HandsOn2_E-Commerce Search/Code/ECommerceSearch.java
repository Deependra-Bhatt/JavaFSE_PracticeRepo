import java.util.Arrays;
import java.util.Comparator;

public class ECommerceSearch {

    public static void main(String[] args) {
        Product[] products = {
            new Product(105, "Laptop", "Electronics"),
            new Product(101, "T-Shirt", "Clothing"),
            new Product(107, "Shoes", "Footwear"),
            new Product(103, "Phone", "Electronics"),
            new Product(104, "Watch", "Accessories"),
            new Product(106,"AC","Electronics")
        };

// Successful Search
        System.out.println("Successful attempt");
        int searchId = 103;

        // Calling Linear Search
        Product result1 = linearSearch(products, searchId);
        if(result1!=null)
            System.out.println("Linear Search Result: " + result1);
        else
            System.out.println("Linear Search: NOT FOUND");

        // Sort for Binary Search
        Arrays.sort(products, Comparator.comparingInt(p -> p.productId));

        // Calling Binary Search
        Product result2 = binarySearch(products, searchId);
        if(result2!=null)
            System.out.println("Binary Search Result: " + result2);
        else
            System.out.println("Binary Search: NOT FOUND");

// Unsuccessful Search
        System.out.println("Unsuccessful attempt");
         searchId = 110;

        // Calling Linear Search
        Product result3 = linearSearch(products, searchId);
        if(result3!=null)
            System.out.println("Linear Search Result: " + result3);
        else
            System.out.println("Linear Search: NOT FOUND");

        // Sort for Binary Search
        Arrays.sort(products, Comparator.comparingInt(p -> p.productId));

        // Calling Binary Search
        Product result4 = binarySearch(products, searchId);
        if(result4!=null)
            System.out.println("Binary Search Result: " + result4);
        else
            System.out.println("Binary Search: NOT FOUND");
}

// IMPLEMENTATION

    // Linear Search
    public static Product linearSearch(Product[] products, int targetId) {
        for (Product product : products) {
            if (product.productId == targetId) {
                return product;
            }
        }
        return null;
    }

    // Binary Search
    public static Product binarySearch(Product[] products, int targetId) {
        int left = 0, right = products.length - 1;
        while (left <= right) {
            int mid = left + (right - left) / 2;

            if (products[mid].productId == targetId) {
                return products[mid];
            } else if (products[mid].productId < targetId) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return null;
    }
}

/*
 * Time Complexity
       Linear Search: O(n)
       Binary Search: O(log n)
 */

 /*
  * RECOMMENDATION: 
            Binary Search Algorith is more suitable for the platform search function.
            It is because, in real-world we deal with millions of products and the binary search grows 
            logarithmically with input size.
            Thus reducing the overall search time required for such large inputs.

            NOTE: We are required to store the product detail in sorted order.
  */