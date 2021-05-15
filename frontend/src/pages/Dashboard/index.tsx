import DataTable from "assets/components/DataTable";
import Consulta from "assets/components/Form/FormConsulta";
import Footer from "assets/components/Footer";
import NavBar from "assets/components/NavBar/index";

const Dashboard = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="py-4">
          <h2 className="text-primary">Consulta de anuncios</h2>
          <Consulta />
        </div>
        <DataTable />
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
