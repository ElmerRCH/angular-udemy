import { Component,OnInit ,Output} from '@angular/core';
import { HeroesService,Heroe } from '../../services/heroes.service';
import { CommonModule } from '@angular/common';
import { RouterOutlet,RouterLink,RouterLinkActive} from '@angular/router';
import { HeroeTarjetaComponent } from '../heroe-tarjeta/heroe-tarjeta.component';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterLink,RouterLinkActive,HeroeTarjetaComponent],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent implements OnInit{

  heroesList:Heroe[] = []
  constructor(private heroes:HeroesService){

  }
  ngOnInit(){
    this.heroesList = this.heroes.getHeroes()
  }

  verHeroe(idx:number){
    console.log('mando.......')
  }

}
