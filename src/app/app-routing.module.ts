import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantDetailComponent } from './restaurants/restaurant-detail/restaurant-detail.component';
import { MenuComponent } from './restaurants/restaurant-detail/menu/menu.component';
import { ReviewsComponent } from './restaurants/restaurant-detail/reviews/reviews.component';
import { OrderSummaryComponent } from './order/order-summary/order-summary.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './security/login/login.component';
import { LoggerInGuard } from './security/loggedin.guard';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login/:to', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'restaurants/:id', component: RestaurantDetailComponent,
      children: [
          {path: '', redirectTo: 'menu', pathMatch: 'full'}, // Após 'restaurants/:id' se não digitar nada, é redirecionado para menu
          {path: 'menu', component: MenuComponent},
          {path: 'reviews', component: ReviewsComponent}
  ]},
  {path: 'restaurants', component: RestaurantsComponent},
  {path: 'order-summary', component: OrderSummaryComponent},
  // LazyModule canLoad: [LoggerInGuard] pergunta se ele pode carregar, se loggin esta ok
  {path: 'order', loadChildren: './order/order.module#OrderModule', canLoad: [LoggerInGuard], canActivate: [LoggerInGuard]},
  {path: 'about', loadChildren: './about/about.module#AboutModule'}, // lazyModule
  {path: '**', component: NotFoundComponent} // rota de wildcard página não encontrada
];

@NgModule({
  /* Carrega os modulos lazy em background*/ // configurando Rotas
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
