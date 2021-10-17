import http from "../http-common";

class TecsoftDataService {
  getAll() {
    return http.get("/obtenerProductos");
  }

  get(id) {
    return http.get(`/ActualizarProducto/${id}`);
  }

  create(data) {
    return http.post("/registrarProducto", data);
  }

  update(id, data) {
    return http.put(`/actualizarproducto/${id}`, data);
  }

  //servicios ventas

  obtenerVentas() {
    return http.get("/obtenerVentas");
  }

  obtener(id) {
    return http.get(`/actualizarVenta/${id}`);
  }

  crear(data) {
    return http.post("/registrarVentas", data);
  }

  actualizar(id, data) {
    return http.put(`/actualizarVentas/${id}`, data);
  }

  //servicios usuarios

  obtenerUsuarios() {
    return http.get("/obtenerUsuarios");
  }

}

export default new TecsoftDataService();
