import { Component } from '@angular/core';
import { RouterOutlet,RouterLink,RouterLinkActive} from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeroesService } from '../../../services/heroes.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  
  constructor(private heroesService:HeroesService){

  }

  buscarHeroe(texto:any){
    
    let hero = this.heroesService.buscarHeroe(texto.toLowerCase())
    console.log('llego',hero)
  }



}
