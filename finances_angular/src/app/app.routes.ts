import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { TransactionPageComponent } from './pages/transaction-page/transaction-page.component';

export const routes: Routes = [
  {path: "", component: HomePageComponent},
  {path: "transaction", component: TransactionPageComponent},
];
