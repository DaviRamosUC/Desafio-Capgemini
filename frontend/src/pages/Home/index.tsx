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
            Front-end desenvolvido unica e exclusivamente para experênciar o uso
            da API de cadastro
          </p>
          <hr />
          <p>
            Esta aplicação consiste em exibir um dashboard a partir de dados
            fornecidos por um back end construído com Spring Boot.
          </p>
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
