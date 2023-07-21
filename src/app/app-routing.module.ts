import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DogJokeComponent } from './componentes/dog-joke/dog-joke.component';

const routes: Routes = [
  {path: "dogjoke", component: DogJokeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
