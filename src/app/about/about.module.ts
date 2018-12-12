import { NgModule } from '@angular/core';
import { AboutComponent } from './about.component';
import { Routes, RouterModule } from '@angular/router';

const ROUTES: Routes = [
    {path: '', component: AboutComponent}
];

@NgModule({
    declarations: [AboutComponent],
    imports: [RouterModule.forChild(ROUTES)] // configura Rotas, modulo de rotas junto com as rotas
})
export class AboutModule {}

// Lazy Module
