import React from "react";

import { withRouter } from "react-router-dom";
import Card from "../../components/card";
import FormGroup from "../../components/form-group";
import FuncinarioService from "../../app/service/funcioarioService";

class CadastrarFuncionarios extends React.Component {
  state = {
    id: null,
    nome: "",
    cpf: "",
    cep: "",
    telefone: "",
    coordenador: "",
  };

  constructor() {
    super();
    this.funcinarioService = new FuncinarioService();
  }

  submit = () => {
    console.log(this.state);
  };

  handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <Card title="Cadastro de Funcionários">
        <div className="row">
          <div className="col-md-12">
            <FormGroup id="inputNome" label="Nome: ">
              <input
                id="inputNome"
                type="text"
                className="form-control"
                name="nome"
                value={this.state.nome}
                onChange={this.handleChange}
              />
            </FormGroup>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <FormGroup id="inputTelefone" type="text" label="Telefone: ">
              <input
                id="inputTelefone"
                type="text"
                className="form-control"
                name="telefone"
                value={this.state.telefone}
                onChange={this.handleChange}
              />
            </FormGroup>
          </div>
          <div className="col-md-6">
            <FormGroup id="inputCoordenador" type="text" label="Coordenador: ">
              <input
                id="inputCoordenador"
                type="text"
                className="form-control"
                name="coordenador"
                value={this.state.coordenador}
                onChange={this.handleChange}
              />
            </FormGroup>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <FormGroup id="inputCpf" type="text" label="CPF: ">
              <input
                id="inputCpf"
                type="text"
                className="form-control"
                name="cpf"
                value={this.state.cpf}
                onChange={this.handleChange}
              />
            </FormGroup>
          </div>
          <div className="col-md-6">
            <FormGroup id="inputCep" type="text" label="CEP: ">
              <input
                id="inputCep"
                type="text"
                className="form-control"
                name="cep"
                value={this.state.cep}
                onChange={this.handleChange}
              />
            </FormGroup>
          </div>
          <div className="row">
            <div className="col-md 6">
              <button className="btn btn-success" onClick={this.submit}>
                Salvar
              </button>
              <button className="btn btn-danger">Cancelar</button>
            </div>
          </div>
        </div>
      </Card>
    );
  }
}

export default withRouter(CadastrarFuncionarios);
