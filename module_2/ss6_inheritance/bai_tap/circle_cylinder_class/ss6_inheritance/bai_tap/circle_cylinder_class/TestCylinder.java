package ss6_inheritance.bai_tap.circle_cylinder_class;

import java.util.Scanner;

public class TestCylinder {
    public static void main(String[] args) {
        ss6_inheritance.bai_tap.circle_cylinder_class.Cylinder cylinder1 = new ss6_inheritance.bai_tap.circle_cylinder_class.Cylinder();

        cylinder1.setRadius(5);
        cylinder1.areaCalculator();
        cylinder1.setHeigth(5);
        cylinder1.volumneCalculator();
        System.out.println(cylinder1);


        ss6_inheritance.bai_tap.circle_cylinder_class.Circle circle1 = new ss6_inheritance.bai_tap.circle_cylinder_class.Circle();

        circle1.setRadius(7);
        circle1.setColor("Grey");
        circle1.areaCalculator();
        System.out.println(circle1);
    }

}
