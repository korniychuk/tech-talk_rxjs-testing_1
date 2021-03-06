import * as $$ from 'rxjs';
import * as $ from 'rxjs/operators';
import { marbles } from 'rxjs-marbles';

describe('rxjs-marbles', () => {

  it('should support marble tests', marbles((m) => {

    const source =  m.hot('--^-a-b-c-|');
    const subs =            '^-------!';
    const expected =        '--b-c-d-|';

    const destination = source.pipe(
      $.map(value => String.fromCharCode(+value.charCodeAt(0) + 1)),
    );

    m.expect(destination).toBeObservable(expected);
    m.expect(source).toHaveSubscriptions(subs);
  }));
});
