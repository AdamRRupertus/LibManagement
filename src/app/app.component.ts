import { Component } from '@angular2/core';
import {BooksComponent} from './books.component'

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
      <books></books>
  `,
  directives: [BooksComponent]
})
export class AppComponent  { name = 'Adam'; }
