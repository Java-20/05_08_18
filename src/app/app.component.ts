import { Component } from '@angular/core';
import {ContactsService} from './contacts.service';
import {StoreService} from './store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ContactsService, StoreService]
})
export class AppComponent {
  // contactService: ContactsService = new ContactsService();
  constructor(public contactsService: ContactsService){}
}
