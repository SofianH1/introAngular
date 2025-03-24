import { Routes } from '@angular/router';
import { MainDemoComponent } from './demo/main-demo/main-demo.component';
import { ChronometreComponent } from './exo/chronometre/chronometre.component';
import { ExoComponent } from './exo/exo.component';

export const routes: Routes = [
    {
        path:"demo",component: MainDemoComponent
    },
    {
        path:"exo",component:ExoComponent, children : [
            {
                path:"chrono",component:ChronometreComponent
            }
        ]
    }
];
