import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { FooterComponent } from './pages/footer/footer.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { GaleriaComponent } from './pages/galeria/galeria.component';
import { MensajeComponent } from './pages/mensaje/mensaje.component';

export const routes: Routes = [
  {
    path: '',
    component: InicioComponent,
  },
  {
    path: '',
    component: MensajeComponent,
  },
  {
    path: '',
    component: ServiciosComponent,
  },
  {
    path: '',
    component: GaleriaComponent,
  },
  {
    path: '',
    component: FooterComponent,
  },
];
