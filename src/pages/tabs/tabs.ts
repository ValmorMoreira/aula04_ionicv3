import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

import { ContactsListPage } from '../contacts-list/contacts-list';
import { CreateContactPage } from '../create-contact/create-contact';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;

  tab9Root = ContactsListPage;
  tab10Root = CreateContactPage;

  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
