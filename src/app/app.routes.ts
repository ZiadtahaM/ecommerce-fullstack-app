import { authGuard } from './core/guards/auth.guard';

import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './layout/blank-layout/blank-layout.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProductsComponent } from './components/products/products.component';
import { BrandsComponent } from './components/brands/brands.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { aynelaGuard } from './core/guards/aynela.guard';
import { DetailsComponent } from './components/details/details.component';
import { AllordersComponent } from './components/allorders/allorders.component';
import { OrdersComponent } from './components/orders/orders.component';
import { BrandsspecComponent } from './components/brondsspsfs/brandsspec.component';
import path from 'path';
import { WishListComponent } from './components/wish-list/wish-list.component';


export const routes: Routes = [
    {path:'',component:AuthLayoutComponent, canActivate:[aynelaGuard] , children:[
        {path:'', redirectTo:'login', pathMatch:'full'},
        {path:'login',component:LoginComponent},
        {path:'register',component:RegisterComponent},
  
    ]},
    {path:'',component:BlankLayoutComponent, canActivate:[authGuard],children:[
        {path:'',redirectTo:'home',pathMatch:'full'},
        {path:'products',component:ProductsComponent,},
        {path:'brands',component:BrandsComponent},
        {path:'categories',component:CategoriesComponent},
        {path:'cart',component:CartComponent},
        {path:'home',component:HomeComponent},
        {path:'wish-list',component:WishListComponent},
        { path: 'details/:id', component: DetailsComponent },
        { path: 'allorders', component: AllordersComponent },
        { path: 'orders/:id', component: OrdersComponent },
        { path: 'brandsspec/:id', component: BrandsspecComponent }
    ]},


    {path:'**',component:NotfoundComponent}

];
