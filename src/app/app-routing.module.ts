import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './authentication/auth.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DisplayComponent } from './components/display/display.component';
import { ForgotComponent } from './components/forgot/forgot.component';
import { GetAllNotesComponent } from './components/get-all-notes/get-all-notes.component';
import { GetArchivesComponent } from './components/get-archives/get-archives.component';
import { GetTrashComponent } from './components/get-trash/get-trash.component';
import { LoginComponent } from './components/login/login.component';
import { NoteComponent } from './components/note/note.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'signup',
    component:SignUpComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'forgotpassword',
    component: ForgotComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {path: "", redirectTo: "newnote", pathMatch: "full"},
      {path: "newnote", component: GetAllNotesComponent},
      {path: "notes", component: GetAllNotesComponent},
      {path: "trash", component: GetTrashComponent},
      {path: "archives", component: GetArchivesComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
