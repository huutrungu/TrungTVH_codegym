package ss2_vong_lap_trong_java.bai_tap.display_prime_less_one_hundred;

public class DisplayPrimeLessOneHundred {
    public static void main(String[] args) {
        for (int i = 2; i < 100 ; i++) {
            boolean check = true;
            for (int j = 2; j < i; j++) {
                if (i % j == 0) {
                    check = false;
                    break;
                }
            }
            if(check) {
                System.out.print(i + ", ");
            }
        }
    }
}
