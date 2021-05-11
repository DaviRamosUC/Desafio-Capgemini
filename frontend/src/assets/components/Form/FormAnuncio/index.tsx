const formu = () => {
  return (
    <>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputNameAnuncio" className="form-label">
            Nome do anuncio
          </label>
          <input
            className="form-control"
            id="exampleInputNameAnuncio"
            aria-describedby="nameHelp"
          />
          <div id="nameHelp" className="form-text">
            informe um nome para o anuncio
          </div>
        </div>

        <div className="form-inline mb-3">
          <label htmlFor="example-date-input" className="col-2 col-form-label">
            Data de início
          </label>
          <div className="col-10">
            <input
              className="form-control"
              type="date"
              value="2021-01-01"
              id="example-date-input"
            />
          </div>
        </div>

        <div className="form-inline mb-3">
          <label htmlFor="example-date-input" className="col-2 col-form-label">
          Data de término
          </label>
          <div className="col-10">
            <input
              className="form-control"
              type="date"
              value="2021-01-01"
              id="example-date-input"
            />
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputInvestimento" className="form-label">
            Investimento diário
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputInvestimento"
          />
          <div id="InvestimentoHelp" className="form-text">
            informe um valor em reais, se necessário use , para separar os
            centavos
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="tipoCliente" className="form-label">
            Cliente
          </label>
          <select className="form-select" id="tipoCliente" required>
            <option value="">selecione um cliente</option>
          </select>
          <div className="invalid-feedback">
            Por favor selecione uma opção válida
          </div>
        </div>

        <div className="mb-3">
          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
        </div>
      </form>
    </>
  );
};

export default formu;
