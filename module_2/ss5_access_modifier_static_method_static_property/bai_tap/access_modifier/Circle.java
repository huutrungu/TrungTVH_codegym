package ss5_access_modifier_static_method_static_property.bai_tap.access_modifier;

public class Circle {
    private double radius = 1.0;
    private String color = "red";

    Circle() {

    }
    Circle(double r) {
        radius = r;
    }

    protected double getRadius() {
        return radius;
    }

    protected double getArea() {
        return this.radius*this.radius*3.14;
    }
}
// ket luan sau test: -trong cung pakage: public || protected || default -> co the goi duoc. (private -> khong).