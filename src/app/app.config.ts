import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideAnimationsAsync(),
    provideFirebaseApp(() => initializeApp({
      "projectId": "simple-crm-85a08",
      "appId": "1:892191666614:web:6a94bf6165fafd10711117",
      "storageBucket": "simple-crm-85a08.appspot.com",
      "apiKey": "AIzaSyDRbCy_t9-cIzX2o1ob2ucVscFWzvZVDmI",
      "authDomain": "simple-crm-85a08.firebaseapp.com",
      "messagingSenderId": "892191666614"
    })),
    provideFirestore(() => getFirestore())
  ]
};
