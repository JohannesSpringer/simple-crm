import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';
import { Firestore, collection, collectionData, getDoc, doc, docData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { User } from '../../models/user.class';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent {

  firestore: Firestore = inject(Firestore);
  userId = '';
  user$!: Observable<any>;
  user: User = new User();
  

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( paramMap => {
      this.userId = paramMap.get('id');
      console.log('GOT ID:', this.userId);
      this.getUser();
    })
  }

  getUser() {
    const usersRef = collection(this.firestore, 'users');
    const userDocRef = doc(usersRef, this.userId);
    this.user$ = docData(userDocRef, { idField: 'id' });
    this.user$.subscribe(user => {
      this.user = new User(user);
      console.log("User daten. ", this.user);
    });
  }
}
