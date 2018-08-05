import {Component, Input, OnInit} from '@angular/core';
import {ContactModel} from '../contact.model';
import {ContactsService} from '../contacts.service';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class RowComponent {
  @Input() current: ContactModel;

  constructor(private contactsService: ContactsService){}
  public getCurrent():ContactModel{
    return this.current;
  }

  changeCurrent() {
    this.contactsService.current = this.current;
  }
}
