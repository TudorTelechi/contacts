import axios from "axios";

interface Contact {
  groupId: string;
}

export class ContactService {
  static serverURL = "http://localhost:9000";

  static getAllContacts() {
    const dataURL = `${this.serverURL}/contacts`;
    return axios.get(dataURL);
  }
  static getContact(contactId: Contact) {
    const dataURL = `${this.serverURL}/contacts/${contactId}`;
    return axios.get(dataURL);
  }

  static createContact(contact: Contact) {
    const dataURL = `${this.serverURL}/contacts/`;
    return axios.post(dataURL, contact);
  }

  static updateContact(contact: Contact, contactId: Contact) {
    const dataURL = `${this.serverURL}/contacts/${contactId}`;
    return axios.put(dataURL, contact);
  }

  static deleteContact(contactId: Contact) {
    const dataURL = `${this.serverURL}/coontact/${contactId}`;
    return axios.delete(dataURL);
  }

  static getALLGroups() {
    const dataURL = `${this.serverURL}/groups/`;
    return axios.get(dataURL);
  }

  static getGroup(contact: Contact) {
    const groupId = contact.groupId;
    const dataURL = `${this.serverURL}/groups/${groupId}`;
    return axios.get(dataURL);
  }
}
