import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecureGuard } from './guards/secure.guard';

const routes: Routes = [
  {
    path: 'lazy',
    loadChildren: () => import('./components/lazy/lazy.module').then(m => m.LazyModule)
  },
  {
    path: 'secure',
    loadChildren: () => import('./components/secure/secure.module').then(m => m.SecureModule),
    canActivate: [SecureGuard],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
