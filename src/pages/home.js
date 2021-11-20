import React from 'react';


class Home extends React.Component {

    state = {
        saldo: 0
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
                        {this.state.saldo}
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




































            // <div>
            //     <ul>
            //     <nav id="menu-h">
            //     <ul>
            //     <li id="name"><a href="#">Union</a>

            //     </li>
            //     <li>
            //     <a href="">
            //     Home
            //     </a>
            //     </li>

            //     <li><a href="#">Sobre</a></li>

            //     <li><a href="#">Quem Somos</a></li>

            //     <li><a href="#">Contato</a></li>

            //     <li><a href="login.html">Entrar</a></li>
            //     </ul>
            //     </nav>

            //     <div class ="services">
            //     <h1>Por que usar?</h1>
            //     <div class ="cen">
            //     <div class ="service">
            //     <i class ="fas fa-anchor"></i>
            //     <h2>Pratico</h2>
            //     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            //     </div>

            //     <div class ="service">
            //     <i class ="fab fa-android"></i>
            //     <h2>Rapido</h2>
            //     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            //     </div>

            //     <div class ="service">
            //     <i class ="fab fa-angellist"></i>
            //     <h2>Segurança</h2>
            //     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            //     </div>

            //     <div class ="service">
            //     <i class ="fas fa-apple-alt"></i>
            //     <h2>Inovação</h2>
            //     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            //     </div>

            //     <div class ="service">
            //     <i class ="fas fa-archway"></i>
            //     <h2>Denuncia</h2>
            //     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            //     </div>

            //     <div class ="service">
            //     <i class ="far fa-angry"></i>
            //     <h2>Unico</h2>
            //     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            //     </div>
            //     </div>
            //     </div>

            //     <div class ="sessao-projetos" id="projetos">
            //     <div class ="sessao-header">
            //     <h1>Facilitando Vidas</h1>
            //     </div>
            //     <div class ="projetos">
            //     <div class ="card">
            //     <div class ="card-img-wrapper">
            //     <img src="card1.jpg" />
            //     </div>
            //     <div class ="card-info">
            //     <h2>Facil e Pratico</h2>
            //     <h3>Celular</h3>
            //     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Cupiditate ducimus vero maxime amet magnam doloribus eos consequatur expedita architecto hic?</p>
            //     <button class ="btn">Saiba Mais</button>
            //     </div>
            //     </div>
            //     <div class ="card">
            //     <div class ="card-img-wrapper">
            //     <img src="card2.jpg"/>
            //     </div>
            //     <div class ="card-info">
            //     <h2>Rapido</h2>
            //     <h3>Qrcode</h3>
            //     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Dolores, vero aliquam?Pariatur libero voluptas ipsam ullam consectetur ab facilis cumque.</p>
            //     <button class ="btn">Saiba Mais</button>
            //     </div>
            //     </div>
            //     <div class ="card">
            //     <div class ="card-img-wrapper">
            //     <img src="card3.jpg"/>
            //     </div>
            //     <div class ="card-info">
            //     <h2>Union</h2>
            //     <h3>Unidos desde o começo</h3>
            //     <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.Est pariatur soluta doloremque tempore nisi placeat, eveniet voluptate recusandae.Eius, sapiente?</p>
            //     <button class ="btn">Saiba Mais</button>
            //     </div>
            //     </div>
            //     </div>




            //     <footer>
            //     <div class ="footer-content">
            //     <p>
            //     Copyright &copf; 2021, Union - Todos os direitos reservados
            //     </p>

            //     </div>
            //     </footer>

            // </div>
        );
    }
}


export default Home;