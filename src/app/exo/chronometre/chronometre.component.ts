import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-chronometre',
  imports: [RouterModule],
  templateUrl: './chronometre.component.html',
  styleUrl: './chronometre.component.scss'
})

export class ChronometreComponent {

    tempsChrono : number = 0;
    interval : any;
  
  // TODO : Ajouter get/set

  startChrono():void{
    this.interval = setInterval(
      ()=>{
        this.tempsChrono ++;
      },1000
    )
  }
  pauseChrono():void{
    clearInterval(this.interval);
  }
  resetChrono():void{
    this.pauseChrono();
    this.tempsChrono = 0;
  }
}
