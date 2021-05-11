import Footer from "assets/components/Footer";
import NavBar from "assets/components/NavBar/index";
import FormAnuncio from "assets/components/Form/FormAnuncio";

const CadastroAnuncio = () => {
    return (
      <>
        <NavBar />
        <div className="container">
          <h2 className="text-primary py-4">Cadastro de Anuncio</h2>
          <div className="body">
          </div>
        <FormAnuncio />
        </div>
        <Footer />
      </>
    );
  };
  
  export default CadastroAnuncio;
  