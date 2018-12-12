import { NgModule, ModuleWithProviders } from '@angular/core';
import { InputComponent } from './input/input.component';
import { RadioComponent } from './radio/radio.component';
import { RatingComponent } from './rating/rating.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShoppingcartService } from 'src/app/restaurants/restaurant-detail/shopping-cart/shopping-cart.service';
import { RestaurantsService } from 'src/app/restaurants/restaurant/restaurants.service';
import { OrderService } from 'src/app/order/order.service';
import { SnackbarComponent } from './messages/snackbar/snackbar.component';
import { NotificationService } from './messages/snackbar/notification.service';
import { LoginService } from 'src/app/security/login/login.service';
import { LoggerInGuard } from 'src/app/security/loggedin.guard';
import { LeaveOrderGuard } from 'src/app/order/leave-order.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from 'src/app/security/auth.interceptor';

@NgModule({
    declarations: [InputComponent, RadioComponent, RatingComponent, SnackbarComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    exports: [InputComponent, RadioComponent, RatingComponent, CommonModule, FormsModule, ReactiveFormsModule, SnackbarComponent]
})
export class SharedModule {
    // Modulos compartilhados
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [ShoppingcartService,
                RestaurantsService,
                OrderService,
                NotificationService,
                LoginService,
                LoggerInGuard,
                LeaveOrderGuard,
                { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
            ]
        };
    }
}
