import Footer from "assets/components/Footer";
import NavBar from "assets/components/NavBar/index";
import Form from "assets/components/Form/FormCliente/index";

const CadastroCliente = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <h2 className="text-primary py-4">Cadastro de Clientes</h2>
        <div className="body">
          <Form />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CadastroCliente;
