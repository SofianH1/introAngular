import { Component } from '@angular/core';
import { EnfantComponent } from '../enfant/enfant.component';

@Component({
  selector: 'app-parent',
  imports: [EnfantComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {
  valeurParent :string = "salut fiston";

  valeurEnfant! : string;

  recevoirValeurEnfant(valeur:string){
    this.valeurEnfant = valeur;
  }
}
