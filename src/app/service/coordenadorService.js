import ApiService from "../apiservice";

class CoordenadorService extends ApiService {
  constructor() {
    super("/api/coordenador");
  }

  autenticar(credenciais) {
    return this.post("/autenticar", credenciais);
  }

//   validar(coordenador) {
//     const erros = [];

//     if (!coordenador.nome) {
//       erros.push("O campo Nome é obrigatório.");
//     }

//     if (!coordenador.email) {
//       erros.push("O campo Email é obrigatório.");
//     } else if (!coordenador.email.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]/)) {
//       erros.push("Informe um Email válido.");
//     }

//     if (!coordenador.senha || !coordenador.senhaRepeticao) {
//       erros.push("Digite a senha 2x.");
//     } else if (coordenador.senha !== coordenador.senhaRepeticao) {
//       erros.push("As senhas não batem.");
//     }

//     if (erros && erros.length > 0) {
//       throw new ErroValidacao(erros);
//     }
//   }
}

export default CoordenadorService;
