import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  menuAberto:boolean=true;

  constructor(private router:Router){}
    
    fazerLogout() {
      this.router.navigate(['/login']);
    }

    toggleMenu(){
      this.menuAberto = !this.menuAberto;

    }

}
