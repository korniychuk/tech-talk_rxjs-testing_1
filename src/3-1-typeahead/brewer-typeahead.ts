import { ajax } from 'rxjs/ajax';
import * as $$ from 'rxjs';
import * as $ from 'rxjs/operators';

const BASE_URL = 'https://api.openbrewerydb.org/breweries';

export const breweryTypeahead = (ajaxHelper: typeof ajax) =>
  <T>(source$: $$.Observable<T>): $$.Observable<string[]> =>
    source$.pipe(
      $.debounceTime(200),
      $.pluck('target', 'value'),
      $.distinctUntilChanged(),
      $.switchMap(searchTerm =>
        ajaxHelper
            .getJSON(`${ BASE_URL }?by_name=${ searchTerm }`)
            .pipe<any>($.catchError(() => $$.EMPTY)),
      ),
      $.map((list: { [key: string]: any }[]) => list.map(v => v.name)),
    );
