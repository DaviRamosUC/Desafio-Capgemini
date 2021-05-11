const formu = () => {
  return (
    <>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputName" className="form-label">
            Nome ou Nome Fantasia
          </label>
          <input
            className="form-control"
            id="exampleInputName"
            aria-describedby="nameHelp"
          />
          <div id="nameHelp" className="form-text">
            informe um nome para o cliente
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Endereço de Email
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            informe um endereço de email válido
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="tipoCliente" className="form-label">
            Tipo de cliente
          </label>
          <select className="form-select" id="tipoCliente" required>
            <option value="">selecione uma opção</option>
            <option>Pessoa jurídica</option>
            <option>Pessoa Fisica</option>
          </select>
          <div className="invalid-feedback">
            Por favor selecione uma opção válida
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputCpfouCnpj" className="form-label">
            CPF ou CNPJ
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputCpfouCnpj"
          />
          <div id="emailHelp" className="form-text">
            informe o CPF ou CNPJ
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
