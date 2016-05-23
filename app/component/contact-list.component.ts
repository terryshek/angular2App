import { Component, OnInit} from "@angular/core";
import {ContactComponent} from './contact.component';
import {ContactService} from "../service/contact-service";
import {Contact} from "../interface/contact";

@Component({
  selector:"contact-list",
  template:`
      <ul>
        <li *ngFor="#contact of contacts" (click)="onSelect(contact)" [class.click]="selectContact == contact">
          {{contact.firstName}} {{contact.lastName}}
        </li>
      </ul>
      <contact [contact]="selectContact"></contact>
  `,
  directives:[ContactComponent],
  styleUrls:["../styles.css", "../contact-list.css"],
  providers:[ContactService]
})
export class ContactList implements OnInit{
  public contacts:Contact[];
  constructor(private _contactService:ContactService){
    console.log(_contactService)
  }

  public selectContact = {}

  onSelect(contact:Contact){
    this.selectContact = contact;
    console.log(this.selectContact)

  }
  getContact(){
    this._contactService.getContacts().then((contacts:Contact[])=>this.contacts = contacts)
  }

  ngOnInit():any{
      this.getContact()
  }
}
