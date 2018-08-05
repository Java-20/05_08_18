import { Component, OnInit } from '@angular/core';
import {ContactsService} from '../contacts.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {
  constructor(public contactService: ContactsService){}
}
