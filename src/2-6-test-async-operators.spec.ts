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

  it('Should let you test asynchronous operations', () => {
    testScheduler.run(({ expectObservable }) => {
      const source$ = $$.of(1, 2, 3, 4, 5);
      const final$ = source$.pipe($.delay(10));
      const expected = '----------(abcde|)';

      expectObservable(final$).toBe(expected, { a: 1, b: 2, c: 3, d: 4, e: 5 });
    });
  });

  // it('Should let you test asynchronous operations', () => { // !
  //   testScheduler.run(({ expectObservable }) => {
  //     const source$ = $$.of(1, 2, 3, 4, 5);
  //     const final$ = source$.pipe($.delay(200));
  //     const expected = '200ms (abcde|)';
  //
  //     expectObservable(final$).toBe(expected, { a: 1, b: 2, c: 3, d: 4, e: 5 });
  //   });
  // });

});
