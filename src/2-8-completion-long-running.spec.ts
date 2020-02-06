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

  it('ok', $$.noop);

  // it('Should let you test snapshots of streams that do not complete', () => {
  //   testScheduler.run(({ expectObservable }) => {
  //     const source$ = $$.interval(1000).pipe(
  //       $.map(val => `${ val + 1 }sec`),
  //     );
  //     const expected = '1s a 999ms b 999ms c';
  //
  //     expectObservable(source$).toBe(expected, {
  //       a: '1sec',
  //       b: '2sec',
  //       c: '3sec',
  //     });
  //   });
  // });

  // it('Should let you test snapshots of streams that do not complete', () => { // !
  //   testScheduler.run(({ expectObservable }) => {
  //     const source$ = $$.interval(1000).pipe(
  //       $.map(val => `${ val + 1 }sec`),
  //     );
  //     const expected = '1s a 999ms b 999ms c';
  //     const unsubscribe = '4s !';
  //
  //     expectObservable(source$, unsubscribe).toBe(expected, {
  //       a: '1sec',
  //       b: '2sec',
  //       c: '3sec',
  //     });
  //   });
  // });

});
