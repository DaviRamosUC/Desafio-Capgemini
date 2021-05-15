const carregarClientes = (id,nome) => {
  /**
   * Carregando a combobox
   */

  var clientes = document.getElementById("cliente");

  var opt = document.createElement("option");
  opt.value = `${id}`;
  opt.text = `${nome}`;
  clientes.add(opt, clientes.options[0]);
};
export default carregarClientes
