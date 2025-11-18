import java.util.HashSet;

public class set{
public static void main(String[] args) {
    // HashSet<String>cityName = new HashSet<>();

    // cityName.add("Howrah");
    // cityName.add("lucknow");
    // cityName.add("delhi");
    // cityName.add("panipat");
    // cityName.add("delhi");

    // System.out.println(cityName);
    // System.out.println(cityName.size()

    
    int[] arr = {3, 3, 6, 8, 7, 8, 6, 2, 3};
    HashSet<Integer> set = new HashSet<>();
    for (int num : arr) {
        set.add(num);
    }
    for (int num : set) {
        System.out.print(num + " ");
    }
    
    

    
    
 }
}