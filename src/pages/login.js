import React from "react";
import Card from "../components/card";
import FormGroup from "../components/form-group";
import { withRouter } from "react-router";
import { AuthContext } from "../main/provedorAutenticacao";
import { mensagemErro } from "../components/toastr";
import CoordenadorService from "../app/service/coordenadorService";

class Login extends React.Component {
  state = {
    email: "",
    senha: "",
  };

  constructor() {
    super();
    this.coordenadorService = new CoordenadorService();
  }

  entrar = () => {
    this.coordenadorService
      .autenticar({
        email: this.state.email,
        senha: this.state.senha,
      })
      .then((res) => {
        this.context.iniciarSessao(res.data);
        this.props.history.push("/home");
      })
      .catch((err) => {
        mensagemErro(err.response.data);
      });
  };

  prepareCadastrar = () => {
    this.props.history.push("/cadastro-usuario");
  };

  render() {
    return (
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="bs-docs-section">
            <Card title="Login">
              <div className="row">
                <div className="col-lg-12">
                  <div className="bs-component">
                    <fieldset>
                      <FormGroup label="Email: *" htmlfor="inputEmail">
                        <input
                          type="email"
                          value={this.state.email}
                          onChange={(e) =>
                            this.setState({ email: e.target.value })
                          }
                          className="form-control"
                          id="inputEmail"
                          aria-describedby="emailHelp"
                          placeholder="Digite o E-mail"
                        />
                      </FormGroup>
                      <FormGroup label="Senha: *" htmlfor="inputPassword">
                        <input
                          type="password"
                          value={this.state.senha}
                          onChange={(e) =>
                            this.setState({ senha: e.target.value })
                          }
                          className="form-control"
                          id="inputPassword"
                          aria-describedby="emailHelp"
                          placeholder="Digite a Senha"
                        />
                      </FormGroup>
                      <button
                        style={{ width: "150px" }}
                        onClick={this.entrar}
                        className="btn btn-success"
                      >
                        <i className="pi pi-sign-in"></i>
                        <span className="text-btn">Entrar</span>
                      </button>
                      <button
                        style={{ width: "150px" }}
                        onClick={this.prepareCadastrar}
                        className="btn btn-primary"
                      >
                        <i className="pi pi-plus"></i>
                        <span className="text-btn">Cadastrar</span>
                      </button>
                    </fieldset>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

Login.contextType = AuthContext;

export default withRouter(Login);
