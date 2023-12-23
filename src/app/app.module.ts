import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import firebaseConfig from './firebase';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { HttpModule } from '@angular/http';
import { UserService } from './user.service';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AuthService } from './auth.service';
import { ShareModule } from './share.module';
import { AngularFireFunctionsModule, FunctionsRegionToken } from '@angular/fire/functions';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SuperTabsModule } from '@ionic-super-tabs/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
	declarations: [AppComponent],
	entryComponents: [],
	imports: [
		CommonModule,
		BrowserModule,
		IonicModule.forRoot(),
		AppRoutingModule,
		AngularFireModule.initializeApp(firebaseConfig),
		AngularFireAuthModule,
		AngularFirestoreModule,
		HttpModule,
		ShareModule,
		AngularFireFunctionsModule,
		FlexLayoutModule,
		SuperTabsModule.forRoot(),
		BrowserAnimationsModule,
		MatInputModule,
		MatFormFieldModule,
		HttpClientModule
	],
	providers: [
		StatusBar,
		SplashScreen,
		{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
		UserService,
		AuthService,
		{ provide: FunctionsRegionToken, useValue: 'us-central1' }
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
