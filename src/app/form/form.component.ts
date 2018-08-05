import { Component, OnInit } from '@angular/core';
import {ContactModel} from '../contact.model';
import {ContactsService} from '../contacts.service';
import {StoreService} from '../store.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  name:string = '';
  email:string = '';
  phone: string = '';
  desc: string = '';

  // contactsService: ContactsService = new ContactsService();
  constructor(public contactsService: ContactsService,
              private storeService: StoreService){}

  public addContact():void{
    let current: ContactModel = new ContactModel(this.name,
      this.email,
      this.phone,
      this.desc);

    this.contactsService.addContact(current);

    this.name = '';
    this.email = '';
    this.phone = '';
    this.desc = '';
  }

  saveCount() {
    this.storeService.saveData();
  }
}
