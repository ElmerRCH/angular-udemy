import { Component,OnInit } from '@angular/core';
import { HeroesService,Heroe } from '../../services/heroes.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule],
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

}
