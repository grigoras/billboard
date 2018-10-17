import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TopComponent } from './top/top.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'top', component: TopComponent}
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(routes);
