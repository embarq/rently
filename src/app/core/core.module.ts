import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule, FirebaseOptionsToken } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { PropertiesService } from './properties.service';
import { environment } from 'src/environments/environment';
import { EnvService } from './env.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    AngularFireModule,
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [
    { provide: FirebaseOptionsToken, useValue: environment.firebase },
    PropertiesService,
    EnvService
  ]
})
export class CoreModule { }
