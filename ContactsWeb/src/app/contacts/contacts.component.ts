import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import "rxjs/add/operator/map";
import {ContactsService} from '../../Services/contacts.service';

@Component({
  selector: 'app-c',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})

export class ContactsComponent implements OnInit {

  dataContacts:any;
  motCle:String="";
  page:number=0;
  size:number=5;
  pages:any;

  constructor(private http:Http, public contactService:ContactsService) { }

  ngOnInit() {
  this.chercher();
  }

  chercher(){
    this.contactService.getContacts(this.motCle,this.page,this.size)
      .subscribe(data=> {
          this.dataContacts = data;
          this.pages = new Array(data.totalPages);
        },
        error1 => {
          alert("Error  !!!!")
        });
  }
  goToPage(i:number){
    this.page = i;
    this.chercher();
  }


}
