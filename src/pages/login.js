import React from "react";
import Card from "../components/card";
import FormGroup from "../components/form-group";
import CoordenadorService from "../app/service/coordenadorService";
import { withRouter } from "react-router";
import { AuthContext } from "../main/provedorAutenticacao";
import { mensagemErro } from "../components/toastr";

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
                      <div class="form-group">
                        <div className="form-floating mb-3">
                          <input
                            type="email"
                            className="form-control"
                            id="floatingInput"
                            placeholder="name@example.com"
                            value={this.state.email}
                            onChange={(e) =>
                              this.setState({ email: e.target.value })
                            }
                          />
                          <label for="floatingInput">E-mail: *</label>
                        </div>
                        <div className="form-floating">
                          <input
                            type="password"
                            className="form-control"
                            id="floatingPassword"
                            placeholder="Password"
                            value={this.state.senha}
                            onChange={(e) =>
                              this.setState({ senha: e.target.value })
                            }
                          />
                          <label for="floatingPassword">Senha: *</label>
                        </div>
                        <button
                          style={{ width: "150px" }}
                          onClick={this.entrar}
                          className="btn btn-success"
                        >
                          <span className="text-btn">Entrar</span>
                        </button>
                      </div>
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
