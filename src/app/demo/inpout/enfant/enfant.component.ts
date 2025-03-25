import { Component, input, InputSignal, Output, OutputEmitterRef, signal, output } from '@angular/core';

@Component({
  selector: 'app-enfant',
  imports: [],
  templateUrl: './enfant.component.html',
  styleUrl: './enfant.component.scss'
})
export class EnfantComponent {
  //input
  valeurDuParent :InputSignal<string|undefined> = input<string>();

  //output
  eventParent : OutputEmitterRef<string> = output<string>();

  transmettre(){
    this.eventParent.emit('salut papa');
  }

  monSignal = signal<string>('');

  changeValue(){
    this.monSignal.set('bonjour');
  }

}
