import { SurabaseDeplCloudComponent } from './pages/tests/deployements/cloud/deplcloudsurabase';
import { LaravelDeplCloudComponent } from './pages/tests/deployements/cloud/deplcloudlaravel.component';
import { FirebaseDeplCloudComponent } from './pages/tests/deployements/cloud/deplcloudfirebase.component';
import { ExpressRaylwayDeplCloudComponent } from './pages/tests/deployements/cloud/deplcloudexpressrailway.component';
import { DeplVpsFullstackComponent } from './pages/tests/deployements/vps/deplvpsfullstack';
import { DeplVpsLaravelNginxApacheComponent } from './pages/tests/deployements/vps/deplvpslaravel.component';
import { DeplVpsApiNodejsComponent } from './pages/tests/deployements/vps/deplvpsapinode.component';
import { LaravelDeplHebergeurComponent } from './pages/tests/deployements/hebergeur/laraveldeplhebergeur.component';
import { ReactjsDeplHebergeurComponent } from './pages/tests/deployements/hebergeur/reactjsdeplhebergeur.component';
import { AngularDeplHebergeurComponent } from './pages/tests/deployements/hebergeur/angulardeplhebergeur.component';
import { ReactjsDeplGithubComponent } from './pages/tests/deployements/github/reactjsdeplgithub.component';
import { AngularDeplGithubComponent } from './pages/tests/deployements/github/angulardeplgithub.component';
import { ResolverComponent } from './pages/tests/resolver/resolver.component';
import { ProductsResolver } from './services/resolvers/products.resolver';
import { LazyLoadingComponent } from './pages/tests/routes/lazyloading.component';
import { RouteGuardComponent } from './pages/tests/routes/routeguard.component';
import { RedirectionEtPage404Component } from './pages/tests/routes/redirectionetpage404.component';
import { RoutesAvecParametresReqComponent } from './pages/tests/routes/routesavecparametresrequ.component';
import { RoutesAvecParametresComponent } from './pages/tests/routes/routesavecparametres.component';
import { UtilisationServiceComponent } from './pages/tests/utilisation-service/utilisation-service.component';
import { RoutesIntroComponent } from './pages/tests/routes/routesintro.component';
import { NgOnChangesComponent } from './pages/tests/cycle/ngonchange.component';
import { NgOnDestroyComponent } from './pages/tests/cycle/ngondestroy.component';
import { NgOnAfterViewInitComponent } from './pages/tests/cycle/ngonafterviewinit.component';
import { NgOnInitComponent } from './pages/tests/cycle/ngoninit.compoenent';
import { UpdateProductFireComponent } from './pages/tests/firebase/updateproductfire.component';
import { LoginComponent } from './pages/tests/login/login.component';
import { RxjsTransformationComponent } from './pages/tests/rxjs/rxjstransformer.component';
import { RxjscreationComponent } from './pages/tests/rxjs/rxjscreation.component';
import { JsonUpdateProductComponent } from './pages/tests/json/jsonupdateproduct.component';
import { JsonProductsComponent } from './pages/tests/json/jsonproducts.component';
import { ProductsnodeComponent } from './pages/tests/nodejs/productsnode.component';
import { ProductsfireComponent } from './pages/tests/firebase/productsfire.component';
import { UpdateProductnodeComponent } from './pages/tests/nodejs/update-productnode.component';
import { RxjsbservableComponent } from './pages/tests/rxjs/rxjsobservable.component';
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
import { Test9Component } from './pages/tests/signaux/test9.component';
import { Test8Component } from './pages/tests/signaux/test8.component';
import { Test6Component } from './pages/tests/input/test6.component';
import { Test7Component } from './pages/tests/output/test7.component';
import { Test5Component } from './pages/tests/signaux/test5.component';
import { Test4Component } from './pages/tests/signaux/test4.component';
import { AjaxComponent } from './pages/tests/ajax/ajax.component';
import { Test1Component } from './pages/tests/binding/test1.component';
import { Test2Component } from './pages/tests/interval/test2.component';
import { HomeComponent } from './pages/home/home.component';
import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { authGuard2 } from './guards/auth2.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },

  //test
  { path: 'data-binding', component: Test1Component },
  { path: 'introduction-au-routing', component: RoutesIntroComponent },
  { path: 'interval', component: Test2Component },

  //routing
  {
    path: 'routes-avec-des-parametres',
    component: RoutesAvecParametresComponent,
  },
  {
    path: 'route-avec-parametres-de-requete',
    component: RoutesAvecParametresReqComponent,
  },
  {
    path: 'redirections-et-pages-404',
    component: RedirectionEtPage404Component,
  },
  {
    path: 'chargement-de-modules-avec-lazy-loading',
    component: LazyLoadingComponent,
  },

  { path: 'route-guards-proteger-les-pages', component: RouteGuardComponent },
  { path: 'les-services', component: UtilisationServiceComponent },
  { path: 'ajax', component: AjaxComponent },
  { path: 'http', component: ClienthttpComponent },
  { path: 'signal-et-computed', component: Test4Component },
  { path: 'signal-et-effect', component: Test5Component },
  { path: 'les-inputs', component: Test6Component },
  { path: 'les-outputs', component: Test7Component },
  { path: 'les-model', component: Test8Component },
  { path: 'les-signaux-et-leurs-methodes', component: Test9Component },
  { path: 'liaison-conditionnelle', component: Test10Component },
  { path: 'liaison-une-chaine-de-caracteres', component: Test11Component },
  { path: 'liaison-avec-un-tableau', component: Test12Component },
  { path: 'liaison-avec-un-objet', component: Test13Component },
  { path: 'combinaison-des-approches', component: test14Component },
  { path: 'liaison-d-une-propriete', component: Test15Component },
  { path: 'liaison-avec-unites', component: test16Component },
  { path: 'liaison-multiple', component: Test17Component },
  { path: 'liaison-a-un-objet', component: Test18Component },
  { path: 'approches-en-combinaison', component: Test19Component },
  { path: 'ngoninit', component: NgOnInitComponent },
  { path: 'ngonchanges', component: NgOnChangesComponent },
  { path: 'ngafterviewinit', component: NgOnAfterViewInitComponent },
  { path: 'ngondestroy', component: NgOnDestroyComponent },
  { path: 'les-pipes', component: Test21Component },
  { path: '@for', component: test22Component },
  { path: '@if', component: Test23Component },
  { path: '@switch', component: Test24Component },
  { path: 'projection-avec-ng-content', component: Test25Component },
  { path: 'acceder-a-un-element-du-dom', component: Test26Component },
  { path: 'acceder-a-un-composant-enfant', component: Test27Component },
  { path: 'acceder-a-plusieurs-elements', component: Test28Component },
  { path: 'acceder-aux-composants-enfants', component: Test29Component },
  {
    path: 'acceder-aux-elements-enfants-d-un-composant',
    component: Test30Component,
  },
  {
    path: 'acceder-a-un-composant-enfant-dans-la-projection-de-contenu',
    component: Test31Component,
  },
  { path: 'viewchild-avec-ng-template', component: Test32Component },
  { path: 'les-states-et-les-reducers', component: NgrxComponent },
  { path: 'ng-container---ng-template', component: ContainerTemplateComponent },
  { path: 'ngform-dans-ngsubmit', component: NgFormComponent },
  {
    path: 'utiliser-viewchild-pour-ngform',
    component: ViewchildNgFormComponent,
  },
  { path: 'formgroup-et-formcontrol', component: FormcontrolgroupComponent },
  //guard
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard],
  },
  {
    path: 'exemple-de-protection',
    component: LoginComponent,
    canActivate: [authGuard2],
  },

  // Resolver : Récupérer des données avant d'afficher une route (ex: liste de produits)
  {
    path: 'les-resolvers',
    component: ResolverComponent,
    resolve: {
      products: ProductsResolver, // Associe le resolver à cette route
    },
  },
  //rxjs
  { path: 'les-observables', component: RxjsbservableComponent },
  { path: 'les-operateurs-de-creation', component: RxjscreationComponent },
  {
    path: 'les-operateurs-de-transformation',
    component: RxjsTransformationComponent,
  },
  //nodejs
  { path: 'crud-nodejs-mongodb', component: ProductsnodeComponent },
  { path: 'update-node/:id', component: UpdateProductnodeComponent },
  //firebase
  { path: 'crud-firebase', component: ProductsfireComponent },
  {
    path: 'update-product-firebase/:id',
    component: UpdateProductFireComponent,
  },
  //json
  { path: 'crud-json', component: JsonProductsComponent },
  { path: 'updateproduct-json/:id', component: JsonUpdateProductComponent },



  //deployement
  { path: 'deployement-github-angular', component: AngularDeplGithubComponent },
  { path: 'deployement-github-reactjs', component: ReactjsDeplGithubComponent },
  { path: 'deployement-hebergeur-angular-api-rest', component: AngularDeplHebergeurComponent },
  { path: 'deployement-hebergeur-reactjs-api-rest', component: ReactjsDeplHebergeurComponent },
  { path: 'deployement-hebergeur-laravel', component: LaravelDeplHebergeurComponent },
  { path: 'deployement-vps-api-node.js', component: DeplVpsApiNodejsComponent },
  { path: 'deployement-vps-laravel-nginx-apache', component: DeplVpsLaravelNginxApacheComponent },
  { path: 'deployement-vps-full-stack-sur-vps', component: DeplVpsFullstackComponent },
  { path: 'deployement-cloud-laravel-heroku', component: LaravelDeplCloudComponent },
  { path: 'deployement-cloud-expressjs-railway', component: ExpressRaylwayDeplCloudComponent },
  { path: 'deployement-cloud-firebase-functions', component: FirebaseDeplCloudComponent },
  { path: 'deployement-cloud-supabase', component: SurabaseDeplCloudComponent },

];
