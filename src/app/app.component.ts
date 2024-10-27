import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { initializeApp } from "firebase/app";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule, MatSidenavModule, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'simple-crm';

  // Your web app's Firebase configuration
  firebaseConfig = {
    apiKey: "AIzaSyDRbCy_t9-cIzX2o1ob2ucVscFWzvZVDmI",
    authDomain: "simple-crm-85a08.firebaseapp.com",
    projectId: "simple-crm-85a08",
    storageBucket: "simple-crm-85a08.appspot.com",
    messagingSenderId: "892191666614",
    appId: "1:892191666614:web:6a94bf6165fafd10711117"
  };

  // Initialize Firebase
  app = initializeApp(this.firebaseConfig);

  constructor() {

  }
}
