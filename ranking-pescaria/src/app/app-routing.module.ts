import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RankingComponent } from './ranking/ranking.component';

const routes: Routes = [
  { path: '', component: RankingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}