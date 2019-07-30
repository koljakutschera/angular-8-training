import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";

import { HomeComponent } from "./home/home.component";

import { CanNavigateToAdminGuard } from "./can-navigate-to-admin.guard";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "books",
    loadChildren: "src/app/book/book.module#BookModule"
  },
  {
    path: "admin",
    loadChildren: "src/app/admin/admin.module#AdminModule",
    canActivate: [CanNavigateToAdminGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule],
  providers: [CanNavigateToAdminGuard]
})
export class AppRoutingModule {}
