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

  it('Should concat two streams', () => {
    testScheduler.run(({ cold, expectObservable }) => {
      const sourceOne$ = cold('-a---b-|');
      const sourceTwo$ = cold('-c---d-|');
      const final$ = $$.concat(sourceOne$, sourceTwo$);

      const expected = '-a---b--c---d-|';

      expectObservable(final$).toBe(expected);
    });
  });

  // it('Should let you identify subscription points', () => {
  //   testScheduler.run(({ cold, expectObservable, expectSubscriptions }) => {
  //     const sourceOne$ =   cold('-a---b-|');
  //     const sourceTwo$ =   cold('-c---d-|');
  //     const final$ = $$.concat(sourceOne$, sourceTwo$);
  //
  //     const expected =          '-a---b--c---d-|';
  //     const sourceOneExpected = '^------!';
  //     const sourceTwoExpected = '-------^------!';
  //
  //     expectObservable(final$).toBe(expected);
  //     expectSubscriptions(sourceOne$.subscriptions).toBe(sourceOneExpected);
  //     expectSubscriptions(sourceTwo$.subscriptions).toBe(sourceTwoExpected);
  //   });
  // });

});
