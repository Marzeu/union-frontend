import ApiService from "../apiservice";

export default class FuncionarioService extends ApiService {
  constructor() {
    super("/api/funcionarios");
  }

  salvar(funcionario) {
    return this.post("/", funcionario);
  }

  consultar(funcionarioFiltro) {
    let params = "?";

    if (funcionarioFiltro.nome) {
      params = `?nome=${funcionarioFiltro.nome}`;
    }

    if (funcionarioFiltro.cpf) {
      params = `${params}&cpf=${funcionarioFiltro.cpf}`;
    }

    if (funcionarioFiltro.cep) {
      params = `${params}&cep=${funcionarioFiltro.cep}`;
    }

    if (funcionarioFiltro.telefone) {
      params = `${params}&telefone=${funcionarioFiltro.telefone}`;
    }

    if (funcionarioFiltro.coordenador) {
      params = `${params}&coordenador=${funcionarioFiltro.coordenador}`;
    }

    return this.get(params);
  }

  deletar(id) {
    return this.delete(`/${id}`);
  }

  obterPorId(id) {
    return this.get(`/${id}`);
  }

  atualizar(funcionario) {
    return this.put(`/${funcionario.id}`, funcionario);
  }

  validar(funcionario){
      const erros = []
  }
}
