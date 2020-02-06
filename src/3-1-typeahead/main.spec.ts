import * as $ from 'rxjs/operators';
import * as $$ from 'rxjs';
import { TestScheduler } from 'rxjs/testing';

import { breweryTypeahead } from './brewer-typeahead';

describe('Marble testing in RxJS', () => {
  let testScheduler: TestScheduler;

  beforeEach(() => {
    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('', () => {
    testScheduler.run(({ cold, expectObservable }) => {
      const searchTerm = 'testing';
      const breweries = [{ name: 'Brewery 1' }];

      const source$ = cold('a', { a: { target: { value: searchTerm } } });
      const final$ = source$.pipe(
        breweryTypeahead({
          getJSON: () => $$.of(breweries).pipe($.delay(300)),
        } as any),
      );
      const expected = '500ms a';
      const expectedValues = { a: ['Brewery 1'] };

      expectObservable(final$).toBe(expected, expectedValues);
    });
  });

});
