import ApiService from "../apiservice";

class CoordenadorService extends ApiService {
  constructor() {
    super("/api/coordenador");
  }

  autenticar(credenciais) {
    return this.post("/autenticar", credenciais);
  }
}

export default CoordenadorService;
