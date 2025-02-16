import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserComponent } from './user.component';
import { MatDialogModule } from '@angular/material/dialog';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { of } from 'rxjs';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  // Mock für Firestore
  const firestoreMock = {
    collection: jasmine.createSpy('collection').and.returnValue({}),
    collectionData: jasmine.createSpy('collectionData').and.returnValue(of([
      { userId: '1', firstName: 'Max', lastName: 'Mustermann', mail: 'max@example.com', city: 'Berlin' },
      { userId: '2', firstName: 'Lisa', lastName: 'Meier', mail: 'lisa@example.com', city: 'Hamburg' }
    ]))
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        UserComponent,
        MatDialogModule
      ],
      providers: [
        { provide: Firestore, useValue: firestoreMock },
        provideFirebaseApp(() => initializeApp({
          "projectId": "simple-crm-85a08",
          "appId": "1:892191666614:web:6a94bf6165fafd10711117",
          "storageBucket": "simple-crm-85a08.appspot.com",
          "apiKey": "AIzaSyDRbCy_t9-cIzX2o1ob2ucVscFWzvZVDmI",
          "authDomain": "simple-crm-85a08.firebaseapp.com",
          "messagingSenderId": "892191666614"
        })), // Firebase bereitstellen
        provideFirestore(() => getFirestore()) // Firestore bereitstellen
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
