package pubsub;

class User {
    private String usuario;
    private String contrasena;

    public User() {
    }

    public User(String usuario, String contrasena) {
        this.usuario = usuario;
        this.contrasena = contrasena;
    }

    // Getters y Setters
    public String getUsuario() {
        return usuario;
    }

    public void setUsuario(String usuario) {
        this.usuario = usuario;
    }

    public String getContraseña() {
        return contrasena;
    }

    public void setContraseña(String contrasena) {
        this.contrasena = contrasena;
    }

    @Override
    public String toString() {
        return "User{" +
                "usuario='" + usuario + '\'' +
                ", contraseña='" + contrasena + '\'' +
                '}';
    }
}