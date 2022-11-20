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
  static getContact(contactID: Contact) {
    const dataURL = `${this.serverURL}/contacts/${contactID}`;
    return axios.get(dataURL);
  }

  static createContact(contact: Contact) {
    const dataURL = `${this.serverURL}/contacts/`;
    return axios.post(dataURL, contact);
  }

  static updateContact(contact: Contact, contactID: Contact) {
    const dataURL = `${this.serverURL}/contacts/${contactID}`;
    return axios.put(dataURL, contact);
  }

  static deleteContact(contactID: Contact) {
    const dataURL = `${this.serverURL}/contacts/${contactID}`;
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
