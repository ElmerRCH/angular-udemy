import { Component } from '@angular/core';
import { RouterOutlet,RouterLink,RouterLinkActive,Router} from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  
  constructor(
              private router: Router,
  ){

  }

  buscarHeroe(texto:any){
    this.router.navigate(['search',texto]);
  }



}
