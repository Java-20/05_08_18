import {ContactModel} from './contact.model';

export class ContactsService {
  private arr: ContactModel[] = [];
  current: ContactModel = null;

  public addContact(contact: ContactModel): void{
    this.arr.push(contact);
  }


  public getContacts():ContactModel[]{
    return this.arr;
  }

}
