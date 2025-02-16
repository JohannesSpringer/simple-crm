import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef } from '@angular/material/dialog';
import { DialogAddUserComponent } from './dialog-add-user.component';
import { Firestore } from '@angular/fire/firestore';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

describe('DialogAddUserComponent', () => {
  let component: DialogAddUserComponent;
  let fixture: ComponentFixture<DialogAddUserComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [
        DialogAddUserComponent
      ],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        provideAnimationsAsync(),
        { provide: Firestore, useValue: {} }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DialogAddUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
