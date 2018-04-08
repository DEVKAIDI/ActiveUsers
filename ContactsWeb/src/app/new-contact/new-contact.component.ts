import { Component, OnInit } from '@angular/core';
import {ContactModel} from '../../models/ContactModel';
import {ContactsService} from '../../Services/contacts.service';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {

  contact:ContactModel = new ContactModel();
  constructor(public contactService:ContactsService) { }


  save(){
    this.contactService.saveContact(this.contact).subscribe(data=>alert("OK"),error1 => {alert("error saving !!")})
  }
  ngOnInit() {
  }

}
