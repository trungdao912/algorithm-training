import { InboxdetailComponent } from './inboxdetail/inboxdetail.component';
import { InboxComponent } from './inbox/inbox.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MessagesComponent } from './messages/messages.component';
import { ContactsComponent } from './contacts/contacts.component';
import { PreferencesComponent } from './preferences/preferences.component';

const routes: Routes = [
  { path: 'messages', component: MessagesComponent, children: [
    { path: ':name', component: InboxComponent, children: [
      { path: ':id', component: InboxdetailComponent, outlet: 'inboxdetail' }
    ] }
  ]},
  { path: 'contacts', component: ContactsComponent },
  { path: 'preferences', component: PreferencesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
