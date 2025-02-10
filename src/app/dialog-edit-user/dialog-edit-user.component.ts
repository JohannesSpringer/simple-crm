import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { User } from '../../models/user.class';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DateAdapter, MAT_DATE_FORMATS, MAT_NATIVE_DATE_FORMATS, NativeDateAdapter } from '@angular/material/core';
import { collection, doc, Firestore, updateDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-dialog-edit-user',
  standalone: true,
  imports: [
    MatProgressBarModule,
    MatFormFieldModule,
    FormsModule,
    CommonModule,
    MatInputModule,
    MatDatepickerModule
  ],
  providers: [
    { provide: DateAdapter, useClass: NativeDateAdapter },
    { provide: MAT_DATE_FORMATS, useValue: MAT_NATIVE_DATE_FORMATS }
  ],
  templateUrl: './dialog-edit-user.component.html',
  styleUrl: './dialog-edit-user.component.scss'
})
export class DialogEditUserComponent {
  user: User;
  userId: string = '';
  loading: boolean = false;
  birthDate: Date;
  firestore: Firestore = inject(Firestore);


  constructor(public dialogRef: MatDialogRef<DialogEditUserComponent>) {
    // this.user.birthDate = new Date(this.user.birthDate);
  }

  saveUser() {
    this.loading = true;
    const usersRef = collection(this.firestore, 'users');
    const userDocRef = doc(usersRef, this.userId);
    updateDoc(userDocRef, this.user.toJSON()).then((result: any) => {
      console.log('User successfully updated. ', result);
      this.loading = false;
      this.dialogRef.close();
    });
  }
}
