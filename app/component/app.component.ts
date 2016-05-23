import {Component} from '@angular/core';
import {ContactList} from './contact-list.component';

@Component({
    selector: 'my-app',
    template: `
        <contact-list></contact-list>
    `,
    directives:[ContactList],
})
export class AppComponent {

}
