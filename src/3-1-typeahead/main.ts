import * as $$ from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { breweryTypeahead } from './brewer-typeahead';

const inputEl = document.querySelector('#input');
const outputEl = document.querySelector('#typeahead-container');

const input$ = $$.fromEvent(inputEl!, 'input');

input$
    .pipe(
      breweryTypeahead(ajax),
    )
    .subscribe((names: string[]) => {
      outputEl!.innerHTML = names.join('<br>');
    });
