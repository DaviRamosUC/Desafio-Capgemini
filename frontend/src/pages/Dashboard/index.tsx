import DataTable from 'assets/components/DataTable';
import Footer from 'assets/components/Footer';
import NavBar from 'assets/components/NavBar/index';

const Dashboard = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="py-4">
          <h2 className="text-primary">Todos os anuncios</h2>
        </div>
        <DataTable />
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
