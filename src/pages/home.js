import React from 'react';
import CoordenadorService from '../service/coordenadorService';
import LocalStorageService from '../service/localstorageService';

class Home extends React.Component {

    // state = {
    //     saldo: 0
    // }

    constructor(){
        super();
        this.coordenadorService = new CoordenadorService();
    }

    componentDidMount() {        
        const usuarioLogado = LocalStorageService.obterItem('_coordenador_logado');

        // this.coordenadorService desnecessario
        // axios.get(`http://localhost:8080/api/usuarios/${usuarioLogado.id}saldo`)
        //     .then(res => {
        //         this.setState({ saldo: res.data });
        //     }).catch(err => {
        //         console.log(err.res);
        //     });


    }

    render() {
        return (
            <div className="jumbotron col-md-12"
                style={{ position: 'relative', margin: '200px auto' }}>
                {/* <img
                    src={imgBalance}
                    style={{ float: 'right', margin: 'auto' }}>
                </img> */}
                <h1 className="display-3">Bem vindo (a)!</h1>
                <p className="lead">Esse é seu sistema de finanças.</p>
                <p className="lead">Seu saldo para o mês atual é de R$
                    <span style={{ fontSize: '30px', fontWeight: 'bold' }}>
                       {/* // {this.state.saldo} */}
                    </span>
                </p>
                <hr className="my-4" />
                <p>E essa é sua área administrativa, utilize um dos menus ou botões abaixo para navegar pelo sistema.</p>
                <p className="lead">
                    <a className="btn btn-primary btn-lg"
                        href="#/cadastro-usuarios"
                        role="button"
                    >
                        <i className="pi pi-users"></i>
                        <span className="text-btn">
                            Cadastrar Usuário
                        </span>
                    </a>
                    <a className="btn btn-success btn-lg"
                        href="#/cadastro-lancamentos"
                        role="button"
                    >
                        <i className="pi pi-money-bill"></i>
                        <span className="text-btn">
                            Cadastrar Lançamento
                        </span>
                    </a>
                </p>
            </div>
        );
    }
}


export default Home;