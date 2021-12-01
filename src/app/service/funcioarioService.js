import ApiService from "../apiservice";

import ErroValidacao from "../exception/ErroValidacao";

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

  detalhes(id) {
    return this.get(`/detalhes/${id}`);
  }

  validar(funcionario) {
    const erros = [];

    if (!funcionario.nome) {
      erros.push("Informe o Nome.");
    }
    if (!funcionario.cpf) {
      erros.push("Informe o CPF.");
    }
    if (!funcionario.cep) {
      erros.push("Informe o CEP.");
    }
    if (!funcionario.telefone) {
      erros.push("Informe o Telefone.");
    }
    if (!funcionario.nome) {
      erros.push("Informe o Nome.");
    }
    if (!funcionario.coordenador) {
      erros.push("Informe o Coordenador.");
    }
    if (erros && erros.length > 0) {
      throw new ErroValidacao(erros);
    }
  }
}
