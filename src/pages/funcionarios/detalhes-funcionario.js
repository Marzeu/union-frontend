import React from "react";
import FuncionarioService from "../../app/service/funcioarioService";
import * as messages from "../../components/toastr";
import { withRouter } from "react-router-dom";

class DetalhesFuncionario extends React.Component {
  state = {
    id: null,
    nome: "",
    cpf: "",
    foto: "",
    coordenador: "",    
  };

  constructor() {
    super();
    this.funcinarioService = new FuncionarioService();
  }

  componentDidMount() {
    const params = this.props.match.params;
    if (params.id) {
      this.funcinarioService
        .detalhes(params.id)
        .then((res) => {
          this.setState({ ...res.data, atualizando: true });
        })
        .catch((err) => {
          messages.mensagemErro(err.response.data);
        });
    }
  }  

  render() {
    return (
      <>
        <div className="card-detalhes ">
          <h3 className="card-header">Funcionário</h3>
          <div className="card-foto">
            <img alt="foto"
              src={this.state.foto}
              className="foto"
            />
          </div>
          <div className="card-footer text-muted">
            <div className="card-body">
              <h5 className="card-title">Nome: {this.state.nome}</h5>
              <h6 className="card-subtitle text-muted">
                CPF: {this.state.cpf}
              </h6>
            </div>
          </div>
          <br></br>
          <br></br>
        </div>    
      </>
    );
  }
}

export default withRouter(DetalhesFuncionario);
