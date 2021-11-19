import React from "react";
import Card from "../components/card";
import FormGroup from "../components/form-group";

const Login = () => {

    return (

        <div className="container">
            <div className="row">
                <div className="col-mo-6" style={{ possition: 'relative', left: '300px' }}>
                    <div className="bs-docs-section">
                        <Card title="Login">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="bs-component">
                                        <fildset>
                                            <FormGroup label="Email: *" htmlfor="exampleInputEmail1">
                                                <input type="email"
                                                    className="form-control"
                                                    id="exampleInputEmail1"
                                                    aria-describedby="emailHelp"
                                                    placeholder="Digite o E-mail" />
                                            </FormGroup>
                                            <FormGroup label="Senha: *" htmlfor="exampleInputPassword1">
                                                <input type="password"
                                                    className="form-control"
                                                    id="exampleInputPassword1"
                                                    aria-describedby="emailHelp"
                                                    placeholder="Password" />
                                            </FormGroup>
                                        </fildset>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>



        // <form class="box" action="login.html" method="post">
        //     <h1>Login</h1>
        //     <input type="text" name="" placeholder="Username" />
        //     <input type="password" name="" placeholder="Password" />
        //     <input type="submit" name="" value="Login" />
        //     <a class="inicio" href="index.html">Voltar</a>
        // </form>
    );
}

export default Login;