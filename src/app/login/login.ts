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
    
    this.api.fazerLogin(this.usuario, this.senha).subscribe({
      next: (resposta) => {
        
        this.router.navigate(['/home']);
      },
      error: (erro) => {
        alert('O nome de usuário ou senha está incorreto!');
        console.error(erro);
      }
    });
  }
}