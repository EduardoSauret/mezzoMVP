import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
// import { MatInputModule } from '@angular/material/input';
// import { MatFormFieldModule } from "@angular/material/form-field";

import { IonicModule } from '@ionic/angular';

import { LoginPage } from './login.page';

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
		// MatFormFieldModule,
		// MatInputModule,
		SharedModule
  ],
  declarations: [LoginPage],
	exports: [
		// MatFormFieldModule,
		// MatInputModule
	]
})
export class LoginPageModule {}
