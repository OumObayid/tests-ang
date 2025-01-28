import { ProductsnodeComponent } from './pages/tests/nodejs/productsnode.component';
import { ProductsfireComponent } from './pages/tests/firebase/productsfire.component';
import { UpdateProductnodeComponent } from './pages/tests/nodejs/update-productnode.component';
import { Rxjs1Component } from './pages/tests/rxjs/rxjs1.component';
import { ProductsResolver } from './services/resolvers/products.resolver';
import { ResolverComponent } from './pages/tests/resolver/resolver.component';
import { GuardComponent } from './pages/tests/guard/guard.component';
import { LoginComponent } from './pages/tests/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FormcontrolgroupComponent } from './pages/tests/formControl-formGroup/formcontrolgroup.component';
import { ViewchildNgFormComponent } from './pages/tests/ngForm/viewChild-ngForm.component';
import { NgFormComponent } from './pages/tests/ngForm/ng-form.component';
import { ContainerTemplateComponent } from './pages/tests/ngContainer-ngTemplate/container-template/container-template.component';
import { NgrxComponent } from './pages/tests/ngrx/ngrx.component';
import { ClienthttpComponent } from './pages/tests/http/Clienthttp.component';
import { Test27Component } from './pages/tests/viewChild/test27.component';
import { Test28Component } from './pages/tests/ViewChildren/test28.component';
import { Test29Component } from './pages/tests/ViewChildren/test29.component';
import { Test30Component } from './pages/tests/contentChild/test30.component';
import { Test31Component } from './pages/tests/contentChild/test31.component';
import { Test32Component } from './pages/tests/viewChild/test32.component';
import { Test26Component } from './pages/tests/viewChild/test26.component';
import { Test25Component } from './pages/tests/ng-content/test25.component';
import { Test24Component } from './pages/tests/switch/test24.component';
import { Test23Component } from './pages/tests/@ngif/test23.component';
import { test22Component } from './pages/tests/@ngfor/test22.component';
import { Test21Component } from './pages/tests/pipes-template/test21.component';
import { Test20Component } from './pages/tests/cycle/test20.component';
import { Test19Component } from './pages/tests/style/test19.component';
import { Test18Component } from './pages/tests/style/test18.component';
import { Test17Component } from './pages/tests/style/test17.component';
import { test16Component } from './pages/tests/style/test16.component';
import { Test15Component } from './pages/tests/style/test15.component';
import { test14Component } from './pages/tests/class/test14.component';
import { Test13Component } from './pages/tests/class/test13.component';
import { Test12Component } from './pages/tests/class/test12.component';
import { Test11Component } from './pages/tests/class/test11.component';
import { Test10Component } from './pages/tests/class/test10.component';
import { Test9Component } from './pages/tests/signal-effect-computed-model/test9.component';
import { Test8Component } from './pages/tests/signal-effect-computed-model/test8.component';
import { Test6Component } from './pages/tests/input/test6.component';
import { Test7Component } from './pages/tests/output/test7.component';
import { Test5Component } from './pages/tests/signal-effect-computed-model/test5.component';
import { Test4Component } from './pages/tests/signal-effect-computed-model/test4.component';
import { Test3Component } from './pages/tests/ajax/test3.component';
import { Test1Component } from './pages/tests/binding/test1.component';
import { Test2Component } from './pages/tests/interval/test2.component';
import { HomeComponent } from './pages/home/home.component';
import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },

  //test
  { path: 'test1', component: Test1Component },
  { path: 'test2', component: Test2Component },
  { path: 'guard', component: GuardComponent },
  { path: 'test3', component: Test3Component },
  { path: 'http', component: ClienthttpComponent },
  { path: 'test4', component: Test4Component },
  { path: 'test5', component: Test5Component },
  { path: 'test6', component: Test6Component },
  { path: 'test7', component: Test7Component },
  { path: 'test8', component: Test8Component },
  { path: 'test9', component: Test9Component },
  { path: 'test10', component: Test10Component },
  { path: 'test11', component: Test11Component },
  { path: 'test12', component: Test12Component },
  { path: 'test13', component: Test13Component },
  { path: 'test14', component: test14Component },
  { path: 'test15', component: Test15Component },
  { path: 'test16', component: test16Component },
  { path: 'test17', component: Test17Component },
  { path: 'test18', component: Test18Component },
  { path: 'test19', component: Test19Component },
  { path: 'test20', component: Test20Component },
  { path: 'test21', component: Test21Component },
  { path: 'test22', component: test22Component },
  { path: 'test23', component: Test23Component },
  { path: 'test24', component: Test24Component },
  { path: 'test25', component: Test25Component },
  { path: 'test26', component: Test26Component },
  { path: 'test27', component: Test27Component },
  { path: 'test28', component: Test28Component },
  { path: 'test29', component: Test29Component },
  { path: 'test30', component: Test30Component },
  { path: 'test31', component: Test31Component },
  { path: 'viewChild3', component: Test32Component },
  { path: 'ngrx', component: NgrxComponent },
  { path: 'ng-container-template', component: ContainerTemplateComponent },
  { path: 'ngform1', component: NgFormComponent },
  { path: 'ngform2', component: ViewchildNgFormComponent },
  { path: 'form-control-group', component: FormcontrolgroupComponent },
  { path: 'login', component: LoginComponent },
  //guard
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard],
  },
  //resolver
  {
    path: 'resolver',
    component: ResolverComponent,
    resolve: {
      products: ProductsResolver, // Associe le resolver à cette route
    },
  },
  //rxjs
  { path: 'rxjs1', component: Rxjs1Component },
//nodejs
{ path: 'products-node', component: ProductsnodeComponent },
{ path: 'update-node/:id', component:UpdateProductnodeComponent },
//firebase
{ path: 'products-firebase', component: ProductsfireComponent },

];
