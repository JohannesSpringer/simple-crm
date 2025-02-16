import { Component, inject } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { User } from '../../models/user.class';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatDialogRef } from '@angular/material/dialog';
import { Firestore, collection, updateDoc, doc } from '@angular/fire/firestore';


@Component({
  selector: 'app-dialog-edit-address',
  standalone: true,
  imports: [
      MatProgressBarModule,
      MatFormFieldModule,
      FormsModule,
      CommonModule,      
      MatInputModule
    ],
  templateUrl: './dialog-edit-address.component.html',
  styleUrl: './dialog-edit-address.component.scss'
})
export class DialogEditAddressComponent {
  user: User = new User();
  userId: string = '';
  loading: boolean = false;
  firestore: Firestore = inject(Firestore);

  constructor(public dialogRef: MatDialogRef<DialogEditAddressComponent>) { }

  saveUser() {
    this.loading = true;
    const usersRef = collection(this.firestore, 'users');
    const userDocRef = doc(usersRef, this.userId);
    updateDoc(userDocRef, this.user.toJSON()).then((result: any) => {
      this.loading = false;
      this.dialogRef.close();
    });
  }

}
