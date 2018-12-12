import { NgModule } from '@angular/core';
import { OrderComponent } from './order.component';
import { OrderItemsComponent } from './order-items/order-items.component';
import { DeliveryCostsComponent } from './delivery-costs/delivery-costs.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { LeaveOrderGuard } from './leave-order.guard';

const ROUTES: Routes = [
    {path: '', component: OrderComponent, canDeactivate: [LeaveOrderGuard]}
];

@NgModule({
    declarations: [OrderComponent, OrderItemsComponent, DeliveryCostsComponent],
    imports: [SharedModule, RouterModule.forChild(ROUTES)] // SharedModule modulo compartilhado criado , já tem vários modulos de uso comum
    // não precisa usar export pq estes modulos não precisa compartilhar nada com ninguém, somente ele usa seus componentes
})
export class OrderModule {}
