import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Adicionamos o Router aqui
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';
import { Api } from '../services/api';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {
  listaVeiculos: any[] = [];
  veiculoSelecionado: any;
  codigoVin: string = '';
  dadosTelemetria: any = null;
  vinSubject = new Subject<string>();


  menuAberto: boolean = true;

  constructor(private api: Api, private router: Router) {}

  ngOnInit(): void {
    this.api.getVeiculos().subscribe({
      next: (resposta) => {
        this.listaVeiculos = resposta.vehicles;
        if (this.listaVeiculos.length > 0) {
          this.veiculoSelecionado = this.listaVeiculos[0];
        }
      },
      error: (erro) => console.error('Erro:', erro)
    });

    this.vinSubject.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      filter(vin => vin.length > 5)
    ).subscribe(vin => {
      this.buscarVin(vin);
    });
  }

onVinChange(vin: string) {
    const vinTratado = vin.trim().toUpperCase();
    this.vinSubject.next(vinTratado);
  }
buscarVin(vin: string): void {
    this.api.getDadosVin(vin).subscribe({
      next: (resposta) => {
        console.log("Dados recebidos da API:", resposta);
        this.dadosTelemetria = resposta;
      },
      error: (erro) => {
        console.error("Erro ao buscar o VIN:", erro);
        this.dadosTelemetria = null;
      }
    });
  }

  // Funções do Menu Lateral
  toggleMenu() {
    this.menuAberto = !this.menuAberto;
  }

  fazerLogout() {
    this.router.navigate(['/login']);
  }
}