import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-result-search',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './result-search.component.html',
  styleUrl: './result-search.component.css'
})
export class ResultSearchComponent {

  name :string = ''
  heroe:any = {};

  constructor(private activatedRoute:ActivatedRoute,
              private heroesServices:HeroesService

  ){}

  ngOnInit(){
    this.activatedRoute.params.subscribe( params => {
      this.heroe = this.heroesServices.buscarHeroe(params['name'])
    });
  }
  
}
