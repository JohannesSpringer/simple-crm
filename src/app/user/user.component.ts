import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { User } from '../../models/user.class';
import { MatCardModule } from '@angular/material/card';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatTooltipModule, MatDialogModule, MatCardModule, CommonModule, RouterModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})

export class UserComponent {

  user: User = new User();
  firestore: Firestore = inject(Firestore);
  users$: Observable<any[]>;
  allUsers = [];

  constructor(public dialog: MatDialog) {
    // const userCollection = collection(this.firestore, 'users');
    // this.users$ = collectionData(userCollection, { idField: 'userId' });
  }

  ngOnInit(): void {
    const userCollection = collection(this.firestore, 'users');
    this.users$ = collectionData(userCollection, { idField: 'userId' });
    this.users$.subscribe(users => {
      console.log("Neue User Daten. ", users);
      this.allUsers = users;
    })
  }

  openDialog() {
    this.dialog.open(DialogAddUserComponent, {
      // data: {name: this.name, animal: this.animal},
    });
  }
}
