import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Api } from '../services/api';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  usuario = '';
  senha = '';

  constructor(private api: Api, private router: Router) {}

  fazerLogin() {
    // Chama o serviço passando o que está no HTML
    this.api.fazerLogin(this.usuario, this.senha).subscribe({
      next: (resposta) => {
        // Se a API retornar sucesso (status 200), navega para a home
        this.router.navigate(['/home']);
      },
      error: (erro) => {
        // Se a API retornar erro (status 400 ou 401), exibe um alerta
        alert('O nome de usuário ou senha está incorreto!');
        console.error(erro);
      }
    });
  }
}