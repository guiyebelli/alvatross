import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/building/building.module').then((m) => m.BuildingModule),
    canActivate: [],
  },
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
