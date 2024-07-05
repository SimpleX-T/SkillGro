import java.util.Scanner;

class main {
  public static void main(String args[]){
    System.out.println("Hello World");

    int num1 = 0, num2 = 0;
    Scanner input = new Scanner(System.in);

    System.out.print("Input an integer: ");
    num1 = input.nextInt();

    int sum = 0;
   for (int i = 1; i <= num1; i++) {
    sum += i;
    System.out.println("Hello " + sum);

   }
  }
}