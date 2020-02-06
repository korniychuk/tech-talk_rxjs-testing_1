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

  it('Should allow configuration of emitted values', () => {
    testScheduler.run(({ cold, expectObservable }) => {
      const source$ = cold('--a-b---c');
      // const final$ = source$.pipe($.map(v => v * 10));
      const expected =     '--a-b---c';

      expectObservable(source$).toBe(expected);
    });
  });

  // it('Should allow configuration of emitted values', () => { // !
  //   testScheduler.run(({ cold, expectObservable }) => {
  //     const source$ = cold('--a-b---c', { a: 1, b: 2, c: 3 });
  //     const final$ = source$.pipe($.map(v => v * 10));
  //     const expected = '--a-b---c';
  //
  //     expectObservable(final$).toBe(expected, { a: 10, b: 20, c: 30 });
  //   });
  // });

});
