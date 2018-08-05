import {ContactsService} from './contacts.service';
import {Injectable} from '@angular/core';
@Injectable()
export class StoreService {
  constructor(private contactService: ContactsService){}

  saveData(){
    let count: number = this.contactService.getContacts().length;
    localStorage.setItem('Count',count + '');
  }
}
