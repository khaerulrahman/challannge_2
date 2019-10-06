import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'product', loadChildren: './product/product.module#ProductPageModule' },
  { path: 'honda', loadChildren: './honda/honda.module#HondaPageModule' },
  { path: 'kawasaki', loadChildren: './kawasaki/kawasaki.module#KawasakiPageModule' },
  { path: 'suzuki', loadChildren: './suzuki/suzuki.module#SuzukiPageModule' },
  { path: 'yamaha', loadChildren: './yamaha/yamaha.module#YamahaPageModule' },
  { path: 'beat', loadChildren: './beat/beat.module#BeatPageModule' },
  { path: 'keranjang', loadChildren: './keranjang/keranjang.module#KeranjangPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
