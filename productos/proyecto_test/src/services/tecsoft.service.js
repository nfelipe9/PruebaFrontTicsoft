import http from "../http-common";

class TecsoftDataService {
  getAll() {
    return http.get("/");
  }

  get(id) {
    return http.get(`/ActualizarProducto/${id}`);
  }

  create(data) {
    return http.post("/RegistrarProducto", data);
  }

  update(id, data) {
    return http.put(`/actualizarproducto/${id}`, data);
  }

  //servicios ventas

  obtenerTodos() {
    return http.get("/");
  }

  obtener(id) {
    return http.get(`/ActualizarVenta/${id}`);
  }

  crear(data) {
    return http.post("/RegistrarVenta", data);
  }

  actualizar(id, data) {
    return http.put(`/actualizarventa/${id}`, data);
  }

}

export default new TecsoftDataService();
