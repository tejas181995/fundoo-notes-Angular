import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppLogoComponent } from './components/app-logo/app-logo.component';
import { LoginComponent } from './components/login/login.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NoteComponent } from './components/note/note.component';
import { DisplayComponent } from './components/display/display.component';
import { MatCardModule } from '@angular/material/card';
import { GetArchivesComponent } from './components/get-archives/get-archives.component';
import { GetAllNotesComponent } from './components/get-all-notes/get-all-notes.component';
import { GetTrashComponent } from './components/get-trash/get-trash.component';
import { IconsComponent } from './components/icons/icons.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ClickOutsideModule } from 'ng-click-outside';
import { MatExpansionModule } from '@angular/material/expansion';
import { UpdateNoteComponent } from './components/update-note/update-note.component';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
    AppLogoComponent,
    LoginComponent,
    SignUpComponent,
    DashboardComponent,
    NoteComponent,
    DisplayComponent,
    GetArchivesComponent,
    GetAllNotesComponent,
    GetTrashComponent,
    IconsComponent,
    UpdateNoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatIconModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatTooltipModule,
    MatCardModule,
    MatDialogModule,
    ClickOutsideModule,
    MatExpansionModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
