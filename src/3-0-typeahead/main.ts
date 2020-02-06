import * as $$ from 'rxjs';
import * as $ from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

const inputEl = document.querySelector('#input');
const outputEl = document.querySelector('#typeahead-container');

const input$ = $$.fromEvent(inputEl!, 'input');

const BASE_URL = 'https://api.openbrewerydb.org/breweries';

input$
    .pipe(
      $.debounceTime(200),
      $.pluck('target', 'value'),
      $.distinctUntilChanged(),
      $.switchMap(searchTerm =>
        ajax
            .getJSON(`${ BASE_URL }?by_name=${ searchTerm }`)
            .pipe<any>($.catchError(() => $$.EMPTY)),
      ),
      $.map((list: { [key: string]: any }[]) => list.map(v => v.name)),
    )
    .subscribe((names: string[]) => {
      outputEl!.innerHTML = names.join('<br>');
    });
