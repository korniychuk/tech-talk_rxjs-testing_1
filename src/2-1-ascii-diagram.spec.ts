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

  it('Should convert ASCII diagrams into observables', () => {
    testScheduler.run(({ cold, expectObservable }) => {
      const source$ = cold('--a-b---c');
      const expected =     '--a-b---c';

      expectObservable(source$).toBe(expected);
    });
  });

});
