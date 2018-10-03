import java.io.*;
import java.math.*;
import java.text.*;
import java.util.*;
import java.util.regex.*;

public class Solution {

    /*
     * Complete the andXorOr function below.
     */
    static int andXorOr(int[] a) {
        /*
         * Write your code here.
         */
        int size=a.length;

        int max=0;
        
        while(size>=2){

            for(int i=0;i<=a.length-size;i++) { 
                int k=0;
                int arr[]=new int[size];
                for(int j=0;j<size;j++) {
                    arr[k]=a[i+j];
                    k++;
                }
                
                 Arrays.sort(arr); 
                int first=arr[0];
                int second=arr[1]; 
                int value=(first^second);
                if(value>max) {
                    max=value;
                }
            }
            size--;
        }

    return max;
    }

    private static final Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) throws IOException {
        BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

        int aCount = Integer.parseInt(scanner.nextLine().trim());

        int[] a = new int[aCount];

        String[] aItems = scanner.nextLine().split(" ");

        for (int aItr = 0; aItr < aCount; aItr++) {
            int aItem = Integer.parseInt(aItems[aItr].trim());
            a[aItr] = aItem;
        }

        int result = andXorOr(a);

        bufferedWriter.write(String.valueOf(result));
        bufferedWriter.newLine();

        bufferedWriter.close();
    }
}
