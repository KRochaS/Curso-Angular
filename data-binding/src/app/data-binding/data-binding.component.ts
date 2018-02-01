import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  //styleUrls: ['./data-binding.component.css']
  styles: [
	`
		.highlight {
			background-color: yellow;
			font-weght; bold;
		}
	`
  ]
})
export class DataBindingComponent implements OnInit {

	url: string = 'https://krochas.github.io/';
	cursoAngular = true;
	urlImagem = 'http://lorempixel.com/400/200/nature/';
	valorAtual: string = '';
	valorSalvo;
	isMouseOver: boolean = false;


	getValor(){
		return 1;
	}

	getCurtirCurso() {
		return true;
	}

	botaoClicado() {
		alert('Botão clicado');
	}

	onKeyUp(evento: KeyboardEvent) {
		this.valorAtual = (<HTMLInputElement> evento.target).value;
	}

	salvarValor(valor) {
		this.valorSalvo = valor;

	}

	onMouseOverOut() {
		this.isMouseOver = !this.isMouseOver;
	}

	constructor() { }

	ngOnInit() {
	}

}
