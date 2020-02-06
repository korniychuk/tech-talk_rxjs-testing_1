import * as $ from 'rxjs/operators';
import * as $$ from 'rxjs';
import { TestScheduler } from 'rxjs/testing';

describe('Marble testing in RxJS', () => {
  let testScheduler: TestScheduler;

  beforeEach(() => {
    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('Should let you test errors and error messages', () => {
    testScheduler.run(({ expectObservable }) => {
      const source$ = $$.of({ first: 'Elon', last: 'Musk' }, null).pipe(
        $.map(v => `${ v!.first } ${ v!.last }`),
        $.catchError(() => {
          throw 'Invalid Name'; // eslint-disable-line no-throw-literal
          // throw { message: 'Invalid Name' }; // eslint-disable-line no-throw-literal
          // throw new Error('Invalid Name');
          // return  $$.throwError(new Error('Invalid Name'));
        }),
      );

      const expected = '(a#)';

      expectObservable(source$).toBe(expected, { a: 'Elon Musk' }, 'Invalid Name');
      // expectObservable(source$).toBe(expected, { a: 'Elon Musk' }, { message: 'Invalid Name' });
      // expectObservable(source$).toBe(expected, { a: 'Elon Musk' }, new Error('Invalid Name'));
    });
  });

});
