import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DateAdapter, MAT_DATE_FORMATS, MAT_NATIVE_DATE_FORMATS, MatNativeDateModule, NativeDateAdapter } from '@angular/material/core';
import { User } from '../../models/user.class';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule
  ],
  providers: [
    { provide: DateAdapter, useClass: NativeDateAdapter },
    { provide: MAT_DATE_FORMATS, useValue: MAT_NATIVE_DATE_FORMATS }
  ],
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss',
})
export class DialogAddUserComponent {

  user: User = new User();
  birthDate: Date;

  saveUser() {
    this.user.birthDate = this.birthDate.getTime();
    console.log('Current User is: ', this.user)
  }

}
