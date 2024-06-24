import { Component, Input, Output, EventEmitter} from '@angular/core';
import { RouterLink,Router} from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './heroe-tarjeta.component.html',
  styleUrl: './heroe-tarjeta.component.css'
})
export class HeroeTarjetaComponent {
  @Input() index:any;
  @Input() heroe:any = {}

  @Output() heroeSeleccionado: EventEmitter<number>;
  
  constructor(private router:Router){
    this.heroeSeleccionado = new EventEmitter()

  }

  verHeroe(){
    this.heroeSeleccionado.emit(this.index)
    console.log('llego emit....')
  }
  
}
