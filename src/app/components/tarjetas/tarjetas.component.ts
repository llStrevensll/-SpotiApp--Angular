import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent {

  //Inputs
  @Input() items: any[] = [];

  constructor() { }


}
