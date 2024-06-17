import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  standalone: true,
  imports: [],
  templateUrl: './heroe.component.html',
  styleUrl: './heroe.component.css'
})

export class HeroeComponent {
  id :number = 0
  heroe:any = {};

  constructor(private activatedRoute:ActivatedRoute,
              private heroesServices:HeroesService
  ){
    this.activatedRoute.params.subscribe( params => {
      this.id = parseInt(params['id'])
      console.log('llego:::', this.id)
    });
      
  }

}
