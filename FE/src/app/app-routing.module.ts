import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntrypointComponent } from './entrypoint/entrypoint.component';
import { NotesComponent } from './notes/notes.component';

const routes: Routes = [
  {
    path: '',
    component: EntrypointComponent
  },
  {
    path: 'notes',
    component: NotesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
