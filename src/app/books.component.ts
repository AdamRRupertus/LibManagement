import {Component} from '@angular/core'

@Component({
    selector:'books',
    template:`
        <h2>Books</h2>
        {{title}}
        <ul>
            <li *ngFor="#name of names">
                {{name}}
            </li>
        </ul>
    `,
    providers: [BookService]
})
export class BooksComponent{
    title="Your book:";
    names: string[];

    constructor(bookService: BookService){
        this.names=bookService.getBooks();
    }

}