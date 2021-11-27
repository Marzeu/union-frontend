import React from 'react';
import { withRouter } from 'react-router';

import axios from 'axios';

import Card from '../components/card';
import FormGroup from '../components/form-group';

class Login extends React.Component {

    state = {
        email: '',
        senha: ''
    }

    constructor() {
        super();
    }

    entrar = () => {
        axios.post('http://localhost:8080/api/coordenador/autenticar', {
            email: this.state.email,
            senha: this.state.senha
        }).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err.response)
        })
    }

    prepareCadastrar = () => {
        this.props.history.push('/cadastro-usuario')
    }

    render() {
        return (

            <div className="row">
                <div className="col-md-6" style={{ possition: 'relative', margin: 'auto' }}>
                    <div className="bs-docs-section">
                        <Card title="Login">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="bs-component">
                                        <fieldset>
                                            <FormGroup label="Email: *" htmlfor="exampleInputEmail1">
                                                <input type="email"
                                                    value={this.state.email}
                                                    onChange={e => this.setState({ email: e.target.value })}
                                                    className="form-control"
                                                    id="exampleInputEmail1"
                                                    aria-describedby="emailHelp"
                                                    placeholder="Digite o E-mail" />
                                            </FormGroup>
                                            <FormGroup label="Senha: *" htmlfor="exampleInputPassword1">
                                                <input type="password"
                                                    value={this.state.senha}
                                                    onChange={e => this.setState({ senha: e.target.value })}
                                                    className="form-control"
                                                    id="exampleInputPassword1"
                                                    aria-describedby="emailHelp"
                                                    placeholder="Password" />
                                            </FormGroup>
                                            <button
                                                style={{ width: '150px' }}
                                                onClick={this.entrar}
                                                className="btn btn-success">
                                                <i className="pi pi-sign-in"></i>
                                                <span className="text-btn">
                                                    Entrar
                                                </span>
                                            </button>
                                            <button
                                                style={{ width: '150px' }}
                                                onClick={this.prepareCadastrar}
                                                className="btn btn-primary">
                                                <i className="pi pi-plus"></i>
                                                <span className="text-btn">
                                                    Cadastrar
                                                </span>
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

export default withRouter(Login);