import { Component } from '@angular/core';
import { RouterLink} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { UpperCasePipe,DatePipe} from '@angular/common'

@Component({
  selector: 'app-heroe',
  standalone: true,
  imports: [RouterLink,UpperCasePipe,DatePipe],
  templateUrl: './heroe.component.html',
  styleUrl: './heroe.component.css'
})

export class HeroeComponent {
  id :number = 0
  heroe:any = {};
  img = ''
  constructor(private activatedRoute:ActivatedRoute,
              private heroesServices:HeroesService
  ){
    this.activatedRoute.params.subscribe( params => {
      this.id = parseInt(params['id'])
      this.heroe = heroesServices.getHeroe(this.id)
      this.img = this.heroe.casa == "Marvel" ? "../../../assets/img/Marvel_Logo.svg" : "../../../assets/img/logo_dc.png"

    });
      
  }

}
