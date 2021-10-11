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
    return http.put(`/${id}`, data);
  }

}

export default new TecsoftDataService();
