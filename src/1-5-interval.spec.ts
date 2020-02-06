import * as $ from 'rxjs/operators';
import * as $$ from 'rxjs';

describe('Subscribe & Assert Testing in RxJS', () => {

  it('Should compare emitted values on completion with toArray', (done) => {
    const source$ = $$.of('Ready', 'Set', 'Go!').pipe(
      $.mergeMap((message, index) => $$.of(message).pipe(
        $.delay(index * 100),
      )),
    );
    const expected = ['Ready', 'Set', 'Go!'];
    let index = 0;

    source$.subscribe({
      next: (val) => {
        expect(val).toEqual(expected[index++]);
      },
      complete: done,
    });
  });

  // it('Should compare emitted values on completion with toArray', async () => {
  //   const source$ = $$.of('Ready', 'Set', 'Go!').pipe(
  //     $.mergeMap((message, index) => $$.of(message).pipe(
  //       $.delay(index * 100),
  //     )),
  //   );
  //   const expected = ['Ready', 'Set', 'Go!'];
  //
  //   const res = await source$.toPromise();
  //   // const res = await source$.pipe($.toArray()).toPromise();
  //
  //   expect(res).toEqual(expected);
  // });

});
