package com.capgemini.cadastroAnuncios.domain.DTO;

import java.io.Serializable;

import com.capgemini.cadastroAnuncios.domain.Anuncio;
import com.capgemini.cadastroAnuncios.service.utils.Calculadora;

public class AnuncioDTO implements Serializable {
	private static final long serialVersionUID = 1L;

	private Integer id;
	private String nome;
	private Double valorTotalInvetido;
	private Integer qtdMaxVisualizacao;
	private Integer qtdMaxCliques;
	private Integer qtdMaxCompartilhamentos;

	public AnuncioDTO() {
	}

	public AnuncioDTO(Anuncio obj) {
		super();
		this.id = obj.getId();
		this.nome = obj.getNome();
		this.valorTotalInvetido = Calculadora.calculaValorTotalInvestido(obj.getDataInicio(), obj.getDataTermino(), obj.getInvestimentoDia());
		this.qtdMaxVisualizacao = Calculadora.calculaQtdViewsTotal(valorTotalInvetido);
		this.qtdMaxCliques = (Calculadora.calculaCliques(valorTotalInvetido)).intValue();
		this.qtdMaxCompartilhamentos = (Calculadora.calcularCompartilhamentos(valorTotalInvetido)).intValue();
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public Double getValorTotalInvetido() {
		return valorTotalInvetido;
	}

	public void setValorTotalInvetido(Double valorTotalInvetido) {
		this.valorTotalInvetido = valorTotalInvetido;
	}

	public Integer getQtdMaxVisualizacao() {
		return qtdMaxVisualizacao;
	}

	public void setQtdMaxVisualizacao(Integer qtdMaxVisualizacao) {
		this.qtdMaxVisualizacao = qtdMaxVisualizacao;
	}

	public Integer getQtdMaxCliques() {
		return qtdMaxCliques;
	}

	public void setQtdMaxCliques(Integer qtdMaxCliques) {
		this.qtdMaxCliques = qtdMaxCliques;
	}

	public Integer getQtdMaxCompartilhamentos() {
		return qtdMaxCompartilhamentos;
	}

	public void setQtdMaxCompartilhamentos(Integer qtdMaxCompartilhamentos) {
		this.qtdMaxCompartilhamentos = qtdMaxCompartilhamentos;
	}
	
	
}
