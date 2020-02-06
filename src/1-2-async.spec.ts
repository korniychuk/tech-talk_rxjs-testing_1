import * as $ from 'rxjs/operators';
import * as $$ from 'rxjs';

describe('Subscribe & Assert Testing in RxJS', () => {

  it('ok', $$.noop);

  // it('Wait async value', () => {
  //   const source$ = $$.timer(100);
  //   const final$ = source$.pipe(
  //     $.mapTo(10),
  //   );
  //   let res: number;
  //
  //   final$.subscribe({
  //     next: (val) => {
  //       res = val;
  //     },
  //   });
  //
  //   expect(res!).toBe(10);
  // });

  // it('Wait async value', (done) => {
  //   const source$ = $$.timer(100);
  //   const final$ = source$.pipe(
  //     $.mapTo(10),
  //   );
  //   let res: number;
  //
  //   final$.subscribe({
  //     next: (val) => {
  //       res = val;
  //     },
  //     complete: done,
  //   });
  //
  //   expect(res!).toBe(10);
  // });

  // it('Wait async value', (done) => {
  //   const source$ = $$.timer(100);
  //   const final$ = source$.pipe(
  //     $.mapTo(10),
  //   );
  //
  //   final$.subscribe({
  //     next: (val) => {
  //       expect(val).toBe(10);
  //     },
  //     complete: done,
  //   });
  // });

});
