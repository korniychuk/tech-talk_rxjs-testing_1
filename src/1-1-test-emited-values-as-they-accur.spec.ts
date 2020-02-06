import * as $ from 'rxjs/operators';
import * as $$ from 'rxjs';

describe('Subscribe & Assert Testing in RxJS', () => {

  it('Should compare each emitted value | false positive', () => {
    const source$ = $$.of(1, 2, 3);
    const final$ = source$.pipe(
      $.map(v => v * 10),
    );

    const expected = [10, 20, 30];
    let index = 0;

    final$.subscribe((val) => {
      expect(val).toBe(expected[index++]);
    });
  });

  // it('Should compare each emitted value | second way', () => {
  //   const source$ = $$.of(1, 2, 3);
  //   const final$ = source$.pipe(
  //     $.map(v => v * 10),
  //   );
  //
  //   const expected = [10, 20, 30];
  //   const actual: number[] = [];
  //
  //   final$.subscribe((val) => {
  //     actual.push(val);
  //   });
  //
  //   expect(actual).toEqual(expected);
  // });

  // it('Should compare each emitted value', (done) => {
  //   const source$ = $$.of(1, 2, 3);
  //   const final$ = source$.pipe(
  //     $.map(v => v * 10),
  //   );
  //
  //   const expected = [10, 20, 30];
  //   let index = 0;
  //
  //   final$.subscribe((val) => {
  //     expect(val).toBe(expected[index++]);
  //   }, null, done);
  // });
});
