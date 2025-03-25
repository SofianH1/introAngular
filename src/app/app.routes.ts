import { Routes } from '@angular/router';
import { MainDemoComponent } from './demo/main-demo/main-demo.component';
import { ChronometreComponent } from './exo/chronometre/chronometre.component';
import { ExoComponent } from './exo/exo.component';
import { DirectiveComponent } from './demo/directive/directive.component';
import { BindingComponent } from './demo/binding/binding.component';
import { ParentComponent } from './demo/inpout/parent/parent.component';
import { EnfantComponent } from './demo/inpout/enfant/enfant.component';
import { ListeDeCoursesComponent } from './exo/liste-de-courses/liste-de-courses.component';
import { DoubleComponentsComponent } from './exo/double-components/double-components.component';

export const routes: Routes = [
    {
        path:"demo",component: MainDemoComponent, children:[
            {
                path:'directive',component:DirectiveComponent
            },
            {
                path:'inpout',component:ParentComponent
            },
            {
              path:'binding',component:BindingComponent
            }
        ]
    },
    {
        path:"exo",component:ExoComponent, children : [
            {
                path:"chrono",component:ChronometreComponent
            },
            {
              path:"listeDeCourses",component:ListeDeCoursesComponent
          },
            {
              path:"doubleComponents",component:DoubleComponentsComponent
          }
        ]
    }
];
