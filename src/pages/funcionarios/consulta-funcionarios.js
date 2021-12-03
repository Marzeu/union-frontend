import React from "react";
import { withRouter } from "react-router-dom";
import Card from "../../components/card";
import FormGroup from "../../components/form-group";
import FuncionariosTable from "./funcionariosTable";
import FuncionarioService from "../../app/service/funcioarioService";
import * as messages from "../../components/toastr";
import Swal from "sweetalert2";
import LocalStorageService from "../../app/service/localstorageService";

class ConsultaFuncionarios extends React.Component {
  state = {
    nome: "",
    cpf: "",
    foto: "",    
    coordenador: "",   
    funcionarioApagar: {},
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
      foto: this.state.foto, 
    };

    this.funcionarioService
      .consultar(funcionarioFiltro)
      .then((res) => {
        const lista = res.data;
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
    this.props.history.push(`/cadastrar-funcionarios/${id}`);    
  };

  detalhes = (id) => {    
    this.props.history.push(`/detalhes/${id}`);
  }

  confirmarApagar = (funcionario) => {
    Swal.fire({
      title: "Você tem certeza que deseja apagar esse funcionário?",
      text: "Essa ação não poderá ser desfeita.",
      icon: "warning",
      confirmButtonText: "Sim",
      cancelButtonText: "Não",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Apagado!", "Funcionário apadado com sucesso!", "success")
          .then((red) => {
            this.setState({ funcionarioApagar: funcionario });
            this.apagar();
          })
          .catch((err) => {
            messages.mensagemErro(
              "Ocorreu um erro ao tentar apagar o Funcionário."
            );
          });
      }
    });
  };

  apagar = () => {
    this.funcionarioService
      .deletar(this.state.funcionarioApagar.id)
      .then((res) => {
        const funcionarios = this.state.funcionarios;
        const indice = funcionarios.indexOf(this.state.funcionarioApagar);
        funcionarios.splice(indice, 1);
        this.setState({ funcionarios: funcionarios });
        messages.mensagemSucesso("Funcionário apagado com sucesso!");
      })
      .catch((err) => {
        messages.mensagemErro(
          "Ocorreu um erro ao tentar apagar o Funcionário."
        );
      });
  };

  preparaFormularioCadastro = () => {
    this.props.history.push("/cadastrar-funcionarios");
  }; 

  render() {   
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
              <button
                style={{ width: "150px" }}
                onClick={this.buscar}
                className="btn btn-success"
              >                
                <span className="text-btn">Buscar</span>
              </button>
              <button
                style={{ width: "150px" }}
                onClick={this.preparaFormularioCadastro}
                className="btn btn-primary"
              >               
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
                deletar={this.confirmarApagar}
                editar={this.editar}
                detalhes={this.detalhes}
              />
            </div>
          </div>
        </div>
      </Card>
    );
  }
}

export default withRouter(ConsultaFuncionarios);
