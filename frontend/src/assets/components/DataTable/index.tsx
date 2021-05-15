import { formatLocalDate } from "assets/utils/format";
import { BASE_URL } from "assets/utils/requests";
import axios from "axios";
import { useEffect, useState } from "react";
import { AnuncioPage } from "types/anuncio";
import Pagination from "../Pagination";

const DataTable = () => {
  const [activePage, setActivePage] = useState(0);
  const [page, setPage] = useState<AnuncioPage>({
    first: true,
    last: true,
    number: 0,
    totalElements: 0,
    totalPages: 0,
  });

  useEffect(() => {
    axios
      .get(`${BASE_URL}/anuncios/pages?page=${activePage}&size=20`)
      .then((response) => {
        setPage(response.data);
      });
  }, [activePage]);

  const changePage = (index: number) => {
    setActivePage(index);
  };

  return (
    <>
      <Pagination page={page} onPageChange={changePage} />

      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th>Nome anuncio</th>
              <th>Data Início</th>
              <th>Data Término</th>
              <th>Valor investido</th>
              <th>Cliente</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {page.content?.map((item) => (
              <tr key={item.id}>
                <td>{item.nome}</td>
                <td>{formatLocalDate(item.dataInicio, "dd/MM/yyyy")}</td>
                <td>{formatLocalDate(item.dataTermino, "dd/MM/yyyy")}</td>
                <td>{item.investimentoDia.toFixed(2)}</td>
                <td>{item.cliente.nome}</td>
                <td>
                  <button type="button" className="btn btn-primary">
                    Exibir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DataTable;
