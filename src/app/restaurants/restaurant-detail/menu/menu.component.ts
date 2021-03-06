import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from '../../restaurant/restaurants.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MenuItem } from '../menu-item/menu-item.model';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  menu: Observable<MenuItem[]>;

  constructor(private restaurantsService: RestaurantsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.menu = this.restaurantsService
      .menuOfRestaurant(this.route.parent.snapshot.params['id']);
      /*router.parent , ao acessar rota de restaurantes foi passado o id do restaurante selecionado */
  }

  addMenuItem(item: MenuItem) {
    console.log(item);
  }
}
