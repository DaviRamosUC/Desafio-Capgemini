<h1 align="center">
     <a href="#" alt="Codigo do projeto de Cadastro de Anuncios"> Cadastro De Anúncio </a>
</h1>

<h3 align="center">
    Sistema desenvolvido como forma avaliativa e classificativa do projeto de captação de desenvolvedores Java da escola ProWay e Capgemini Brasil.
</h3>

<p align="center">

</p>

<h4 align="center">
	🚧  Concluído  🚧
</h4>

<!--ts-->
   * [O Problema](#o-problema)
   * [Requisitos](#requisitos)
     * [Funcionais](#funcionais)
     * [Não Funcionais](#não-funcionais)
   * [Como Usar](#como-usar)
<!--te-->

## O Problema

A agência Divulga Tudo precisa de um programa para gerenciar os seus anúncios online. O objetivo dos anúncios faz parte de uma campanha nas redes sociais. O sistema de gerenciamento permitirá a gestão do anúncio e o rastreio dos resultados da campanha.

---

## Requisitos

### Funcionais
  * Cadastro de Anúncios
    * Como gestor de anúncios, desejo cadastrar um anúncio, inserindo nome, cliente, data de início, data de término e o valor investido do dia para que possa ter o controle dos anúncios da agência.
  * Consulta de Anúncio
    * Como gestor de anúncio, desejo consultar as informações de cada anúncio, como o total do valor investido, quantidade de visualizações, cliques e compartilhamento para que possa analisar as métricas da agência.  

### Não Funcionais
  * Consultar por intervalo de tempo ou cliente
---


## Como Usar

Para executar o programa, você deve ter instalado na máquina a IDE que compile arquivos *.java*, projetos *Maven*, e o pacote *Java Development Kit*. Para desenvolver o programa foi utilizado o utilizado foi o **Apache Sring Tools 4 versão 4.10.0.RELEASE, o JDK 11**.<br/><br/>

### Passo 01:
Fazer o clone (ou download) deste repositório em uma pasta local.
<img src="/Passo a Passo/gitclone.png"/>
<img src="/Passo a Passo/pastaclonada.png"/>
<br/>

### Passo 02:
Abrir Spring tools 4 e clicar no nome *File* no menu superior. Depois é só clicar na opção import (Importar), depois escolher tipo *Maven* -> *Existing Maven Project* -> *Next* -> *Browse*, navegar até selecionar a pasta *Backend* (dentro da pasta que você clonou o repositório) e clicar em *Finish* para carregar na IDE.
<br/>

<img src="/Passo a Passo/backend.png"/>
<img src="/Passo a Passo/sts.png"/>
<img src="/Passo a Passo/importsts.png"/>
<img src="/Passo a Passo/existing.png"/>
<img src="/Passo a Passo/finish.png"/>
<br/>

### Passo 03:
**Executar projeto** Clique primeiramente no simbolo ao lado da palavra local, posteriormente selecione o projeto CadastroAnuncios e depois no botão de play
<br/>

<img src="/Passo a Passo/executandoback.png" />
<br/>

### Passo 04:
**Executar o frontend**, Na pasta onde anteriormente foi clonado o projeto, clique com o botão direito do mouse e abra a pasta com o CMD *Git Bash Here*
<br/>

<img src="/Passo a Passo/abrirterminalfront.png"/>
<br/>

### Passo 05:
Assim que o terminal do git abrir use o comando **yarn start** para executar o frontend
<br/>

<img src="/Passo a Passo/yarn.png"/>
<br/>

***OBS.: Ao iniciar o programa, deverá ser apresentado a homepage questionando qual o serviço desejado.***
<img src="/Passo a Passo/homepage.png"/>
<br/>
<br/>

### Passo 5.1:
Cadastre o cliente com as informações necessárias
<br/>

<img src="/Passo a Passo/cadastroCliente.png"/>
<br/>

### Passo 5.2:
Cadastre o anuncio com as informações necessárias
<br/>
<img src="/Passo a Passo/cadastroAnuncio.png"/>
<br/>

### Passo 5.2:
Realize consultas no painel Dashboard
<br/>
<img src="/Passo a Passo/consulta.png"/>
<br/>
<br/>

---