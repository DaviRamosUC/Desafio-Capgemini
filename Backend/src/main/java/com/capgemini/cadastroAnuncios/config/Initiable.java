package com.capgemini.cadastroAnuncios.config;

import java.text.SimpleDateFormat;
import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import com.capgemini.cadastroAnuncios.domain.Anuncio;
import com.capgemini.cadastroAnuncios.domain.Cliente;
import com.capgemini.cadastroAnuncios.domain.enums.TipoCliente;
import com.capgemini.cadastroAnuncios.repositories.AnuncioRepository;
import com.capgemini.cadastroAnuncios.repositories.ClienteRepository;

@Configuration
@Profile("test")
public class Initiable implements CommandLineRunner{
	
	@Autowired
	public AnuncioRepository anuncioRepository;
	
	@Autowired
	public ClienteRepository clienteRepository;

	@Override
	public void run(String... args) throws Exception {
		SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
		
		Cliente c1 = new Cliente(null, "Davi", "davi@gmail.com", "31659876028", TipoCliente.PESSOAFISICA);
		Cliente c2 = new Cliente(null, "UCSAL", "publicidade@ucsal.edu.br", "79183841000131", TipoCliente.PESSOAJURIDICA);
		
		Anuncio a1 = new Anuncio(null, "Capgemini#1", sdf.parse("25/03/2021"), sdf.parse("26/03/2021"), 10.50, c1);
		Anuncio a2 = new Anuncio(null, "Capgemini#2", sdf.parse("27/03/2021"), sdf.parse("01/04/2021"), 100.00, c1);
		Anuncio a3= new Anuncio(null, "Capgemini#3", sdf.parse("02/04/2021"), sdf.parse("05/04/2021"), 50.00, c2);
		
		c1.getAnuncios().addAll(Arrays.asList(a1,a2));
		c2.getAnuncios().add(a3);
		
		clienteRepository.saveAll(Arrays.asList(c1,c2));
		anuncioRepository.saveAll(Arrays.asList(a1,a2,a3));
		
	}
	
	

}
