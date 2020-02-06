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

  it('Should let you test hot observables', () => {
    testScheduler.run(({ hot, cold, expectObservable }) => {
      const source$ = hot('--a-b--c');
      const expected =    '--a-b--c';

      expectObservable(source$).toBe(expected);
    });
  });

  // it('Should let you test hot observables', () => { // !
  //   testScheduler.run(({ hot, cold, expectObservable }) => {
  //     const source$ = hot('--a-b-^-c');
  //     const expected =          '--c';
  //
  //     expectObservable(source$).toBe(expected);
  //   });
  // });

  // it('Should let you test hot observables', () => { // !
  //   testScheduler.run(({ hot, cold, expectObservable }) => {
  //     const source$ = hot('--a-b-^-c');
  //     const final$ = source$.pipe($.first());
  //     const expected =          '--(c|)';
  //
  //     expectObservable(final$).toBe(expected);
  //   });
  // });

});
