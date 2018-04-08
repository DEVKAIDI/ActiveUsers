import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {ContactModel} from '../models/ContactModel';

@Injectable()
export class ContactsService {

  constructor(public http: Http) {
  }
  getContacts(motCle: String, page: number, size: number) {
    return this.http.get("http://127.0.0.1:8080/chercherContact?mc=" + motCle + "&page=" + page + "&size=" + size).map(resp => resp.json());
  }
  saveContact(contact:ContactModel) {
    return this.http.post("http://127.0.0.1:8080/contacts",contact).map(resp=>resp);
  }
}
