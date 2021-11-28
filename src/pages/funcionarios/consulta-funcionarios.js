import React from "react";
import { withRouter } from "react-router-dom";
import Card from "../../components/card";
import FormGroup from "../../components/form-group";
import SelecMenu from "../selectMenu";
import FuncionariosTable from "./funcionariosTable";
import FuncionarioService from "../../app/service/funcioarioService";
import LocalStorageService from "../../app/service/localstorageService";
import * as messages from "../../components/toastr";

class ConsultaFuncionarios extends React.Component {
  state = {
    nome: "",
    cpf: "",
    cep: "",
    telefone: "",
    coordenador: "",
    cargo: "",
    funcionarios: [],
  };

  constructor() {
    super();
    this.funcionarioService = new FuncionarioService();
  }

  buscar = () => {
    const coordenadorLogado = LocalStorageService.obterItem(
      "_coordenador_logado"
    );

    const funcionarioFiltro = {
      nome: this.state.nome,
      cpf: this.state.cpf,
      cep: this.state.cep,
      telefone: this.state.telefone,
      coordenador: 1,
      //cargo: this.state.cargo,
    };

    this.funcionarioService
      .consultar(funcionarioFiltro)
      .then((res) => {
        const lista = res.data;
        console.log(lista);
        if (lista.length < 1) {
          messages.mensagemAlerta("Nenhum resultado encontrado.");
        }
        this.setState({ funcionarios: lista });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  editar = (id) => {
    console.log(id);
  };

  apagar = (id) => {
    console.log(id);
  };

  render() {
    const cargo = [
      { label: "Selecione...", value: "" },
      { label: "Agente de Saúde", value: 1 },
      { label: "Agente Sanitário", value: 2 },
    ];    

    return (
      <Card title="Consulta Funcionários">
        <div className="row">
          <div className="col-md-6">
            <div className="bs-component">
              <FormGroup htmlFor="inputNome" label="Nome: ">
                <input
                  type="text"
                  className="form-control"
                  id="inputNome"
                  value={this.state.nome}
                  onChange={(e) => this.setState({ nome: e.target.value })}
                  placeholder="Digite o Nome"
                />
              </FormGroup>
              <FormGroup htmlFor="inputCpf" label="CPF: ">
                <input
                  type="text"
                  className="form-control"
                  id="inputCpf"
                  value={this.state.cpf}
                  onChange={(e) => this.setState({ cpf: e.target.value })}
                  placeholder="Digite o CPF"
                />
              </FormGroup>
              <FormGroup htmlFor="inputCep" label="CEP: ">
                <input
                  type="text"
                  className="form-control"
                  id="inputCep"
                  value={this.state.cep}
                  onChange={(e) => this.setState({ cep: e.target.value })}
                  placeholder="Digite o CEP"
                />
              </FormGroup>
              <FormGroup htmlFor="inputTelefone" label="Telefone: ">
                <input
                  type="text"
                  className="form-control"
                  id="inputTelefone"
                  value={this.state.telefone}
                  onChange={(e) => this.setState({ telefone: e.target.value })}
                  placeholder="Digite o Telefone"
                />
              </FormGroup>
              <FormGroup htmlFor="inputCoordenador" label="Coordenador: ">
                <input
                  type="text"
                  className="form-control"
                  id="inputCoordenador"
                  value={this.state.coordenador}
                  onChange={(e) =>
                    this.setState({ coordenador: e.target.value })
                  }
                  placeholder="Digite o Coordenador"
                />
              </FormGroup>
              <FormGroup htmlFor="inputCargo" label="Cargo: ">
                <SelecMenu className="form-control" lista={cargo} />
              </FormGroup>

              <button
                style={{ width: "150px" }}
                onClick={this.buscar}
                className="btn btn-success"
              >
                <i className="pi pi-sign-in"></i>
                <span className="text-btn">Buscar</span>
              </button>
              <button
                style={{ width: "150px" }}
                //onClick={this.prepareCadastrar}
                className="btn btn-primary"
              >
                <i className="pi pi-plus"></i>
                <span className="text-btn">Cadastrar</span>
              </button>
            </div>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-12">
            <div className="bs-component">
              <FuncionariosTable
                funcionarios={this.state.funcionarios}
                deletar={this.apagar}
                editar={this.editar}
              />
            </div>
          </div>
        </div>
      </Card>
    );
  }
}

export default withRouter(ConsultaFuncionarios);
