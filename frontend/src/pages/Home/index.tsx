import Footer from "assets/components/Footer";
import NavBar from "assets/components/NavBar/index";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-4">Etapa 2 do desafio Capgemini</h1>

          <p className="lead">
            Front-end desenvolvido unico e exclusivamente para experênciar o uso
            da API de cadastro de anuncios
          </p>

          <p className="lead">
            Esta aplicação consiste em cadastrar e exibir dados a partir da API construída com Spring Boot.
          </p>

          <hr />

          <div className="container">
            <h2>Passos para executar este programa com sucesso: </h2>
            <ol className="row">
              <li className="col-sm">Cadastre um cliente.</li>
              <li className="col-sm">Cadastre um anúncio</li>
              <li className="col-sm">Faça a consulta no painel Dashboard</li>
            </ol>
          </div>
          <hr />

          <div className="mt-3">
            <Link to="/CadastroCliente" className="btn btn-primary">
              Cadastrar cliente
            </Link>
          </div>

          <div className="mt-3">
            <Link to="/CadastroAnuncio" className="btn btn-primary">
              Cadastrar anuncio
            </Link>
          </div>

          <div className="mt-3">
            <Link to="/Dashboard" className="btn btn-primary">
              Dashboard
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
