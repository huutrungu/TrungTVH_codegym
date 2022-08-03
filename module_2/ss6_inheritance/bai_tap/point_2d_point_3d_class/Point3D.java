package ss6_inheritance.bai_tap.point_2d_point_3d_class;

public class Point3D extends Point2D {
    private float z = 0.0f;

    public Point3D() {

    }

    public Point3D(float x, float y, float z) {
        super(x, y);
        this.z = z;
    }

    public float getZ() {
        return z;
    }

    public void setZ(float z) {
        this.z = z;
    }

    public void setXYZ(float x, float y, float z) {
        super.setX(x);
        super.setY(y);
        this.z = z;
    }

    public float[] getXYZ() {
        return new float[]{this.getX(), this.getY(), z};
    }


    @Override
    public String toString() {
        return "Point3D{" +
                "x= " + this.getX() +
                "y= " + this.getY() +
                "z=" + z +
                '}';
    }
}
