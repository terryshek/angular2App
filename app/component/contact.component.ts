import {Component} from '@angular/core';
import {ContactList} from './contact-list.component';

@Component({
  selector: 'contact',
  template: `
        <div>
          <div>
            <label for="firstName">First Name:</label>
            <input type="text" [(ngModel)]="contact.firstName" id="firstName" />
          </div>
          <div>
            <label for="lastNmae">Last Name:</label>
            <input type="text" id="lastName" [(ngModel)]="contact.lastName" />
          </div>
          <div>
            <label for="phone">Phone</label>
            <input type="text" id="phone"[(ngModel)]="contact.phone" /> 
          </div>
          <div>
            <label for="email">Email:</label>
           <input type="text" id="email" [(ngModel)]="contact.email" />
          </div>
        </div>
    `,
  inputs:["contact"],
  styles:[`
    label {
      display:inline-block;
      width:140px;
      }
    input {
      width:250px
    }
  `]
})
export class ContactComponent {
  public contact = {}
}
