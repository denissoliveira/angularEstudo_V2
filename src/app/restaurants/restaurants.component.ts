import { Component, OnInit } from '@angular/core';
import { Restaurant } from './restaurant/restaurant.model';
import { RestaurantsService } from './restaurant/restaurants.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/from';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
  animations: [
    trigger('toggleSearch', [
      state('hidden', style({
        opacity: 0,
        'max-height': '0px'
      })),
      state('visible', style({
        opacity: 1,
        'max-height': '70px',
        'margin-top': '20px'
      })),
      transition('* => *', animate('250ms 0s ease-in-out'))
    ])
  ]
})
export class RestaurantsComponent implements OnInit {

  searchBarState = 'hidden';
  restaurants: Restaurant[];
  searchForm: FormGroup;
  searchControl: FormControl;

  constructor(private restaurantsService: RestaurantsService, private fb: FormBuilder) { }

  ngOnInit() {

    this.searchControl = this.fb.control('');
    this.searchForm = this.fb.group({
      searchControl: this.searchControl
    });

    // fica ouvindo o que se digita no input. o switchMap para não precisa fazer vários subscribe
    this.searchControl.valueChanges
      .debounceTime(500) // aguarda tempo até se executado
      .distinctUntilChanged() // evita repetição, deixando somente eventos únicos (no caso aqui texto digitado)
      // .do(searchTerm => console.log(`q = ${searchTerm}`)) faz alguma coisa, foi usado para teste
      .switchMap(searchTerm =>
        this.restaurantsService.restaurants(searchTerm) // evita que um subscribe sobrescreva outro
        .catch(error => Observable.from([]))) // caso aconteça um erro ele continua a execução (ex. erro de acesso ao serv)
      .subscribe(restaurants => this.restaurants = restaurants); // pega a lista de restaurants e atribui a var resta..

    this.restaurantsService.restaurants()
      .subscribe(restaurants => this.restaurants = restaurants);
  }

  toggleSearch() {
    this.searchBarState = this.searchBarState === 'hidden' ? 'visible' : 'hidden';
  }

}
