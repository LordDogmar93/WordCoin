// app.routes.ts
import { Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { MisMonedasComponent } from './component/mis-monedas/mis-monedas.component';
import { MisBilletesComponent } from './component/mis-billetes/mis-billetes.component';
import { PaisesDelMundoComponent } from './component/paises-del-mundo/paises-del-mundo.component';
import { LayoutComponent } from './component/layout/layout.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // <-- PRIMERA RUTA
  { path: 'login', component: LoginComponent },
  {
    path: 'app',
    component: LayoutComponent,
    children: [
      { path: 'mis-monedas', component: MisMonedasComponent },
      { path: 'mis-billetes', component: MisBilletesComponent },
      { path: 'paises-del-mundo', component: PaisesDelMundoComponent },
    ],
  },
];
