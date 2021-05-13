export const gerarCliente = () => {
    var form = document.getElementById('formulario');
    var nome = (document.getElementById('name') as HTMLInputElement).value;
    var email = (document.getElementById('email') as HTMLInputElement).value
    var cpfOuCnpj = (document.getElementById('cpfOuCnpj') as HTMLInputElement).value
    var tipo = (document.getElementById('tipo') as HTMLInputElement).value

    console.log(nome, email, cpfOuCnpj, tipo);
}

