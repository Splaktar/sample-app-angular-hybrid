import {UIROUTER_DIRECTIVES} from "ui-router-ng2";
import {Component, Input} from "@angular/core";
import {ContactList} from "./contactList.component";

/**
 * This component renders the contacts submodule.
 *
 * On the left is the list of contacts.
 * On the right is the ui-view viewport where contact details appear.
 */
@Component({
  selector: 'contacts',
  directives: [ContactList, UIROUTER_DIRECTIVES],
  template: `
    <div class="my-contacts flex-h">
    
      <contact-list [contacts]="contacts" class="flex nogrow"></contact-list>
    
      <div ui-view>
        <!-- This default content is displayed when the ui-view is not filled in by a child state -->
        <h4 style="margin: 1em 2em;">Select a contact</h4>
      </div>
    </div>
`})
export class Contacts {
  @Input() contacts;
}
