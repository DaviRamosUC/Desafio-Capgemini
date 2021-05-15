import axios from "axios";
import { BASE_URL } from "assets/utils/requests";
import { useEffect, useState } from "react";
import { clientePage } from "types/cliente";

const Consulta = () => {
  const [activePage] = useState(0);
  const [page, setPage] = useState<clientePage>({
    first: true,
    last: true,
    number: 0,
    totalElements: 0,
    totalPages: 0,
  });

  useEffect(() => {
    axios
      .get(`${BASE_URL}/clientes?page=${activePage}&size=20`)
      .then((response) => {
        setPage(response.data);
      });
  }, [activePage]);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header text-center">
                <b>Consulta por cliente e/ou periodo</b>
              </div>
              <div className="card-body float-left w-100">
                <form className="form-inline">
                  <div className="col-4 form-group mb-2">
                    <label htmlFor="tipoCliente" className="form-label">
                      Cliente
                    </label>
                    <select className="form-select" id="cliente">
                      <option value="">Secione uma opção</option>
                      {page.content?.map((item) => (
                        <option value={item.id}>{item.nome}</option>
                      ))}
                    </select>
                    <div className="invalid-feedback">
                      Por favor selecione uma opção válida
                    </div>
                  </div>
                  <div className="col-6 form-group mb-2">
                    <label className="form-check-label" htmlFor="dt_in">
                      <b>Data Inicial: </b>
                    </label>
                    <input
                      type="date"
                      className="form-control w-auto"
                      id="dt_in"
                    />
                  </div>
                  <div className="col-6 form-group mb-2">
                    <label className="form-check-label" htmlFor="dt_in">
                      <b>Data Termino: </b>
                    </label>
                    <input
                      type="date"
                      className="form-control w-auto"
                      id="dt_in"
                    />
                  </div>
                  <div className="mb-3">
                    <button type="submit" className="btn btn-primary">
                      Consultar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Consulta;
