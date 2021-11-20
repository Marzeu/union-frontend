import React from "react";

const Navbar = () => {

    return (
        <div className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
            <div className="container">
                <a href="#/home" className="navbar-brand">Union</a>
                <button className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarResponsive"
                    aria-controls="navbarResponsive"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav">
                        {/* <NavbarItem render={props.isUsuarioAutenticado} href="#/home" label="Home" />
                        <NavbarItem render={props.isUsuarioAutenticado} href="#/cadastro-usuarios" label="Usuários" /> */}
                        {/* <NavbarItem render={props.isUsuarioAutenticado} href="#/consulta-lancamentos" label="Lançamentos" /> */}
                    </ul>
                    <ul className="navbar-nav exit" style={{ float: 'right' }}>
                        {/* <NavbarItem render={props.isUsuarioAutenticado} onClick={props.deslogar} href="#/login" label="Sair" /> */}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;