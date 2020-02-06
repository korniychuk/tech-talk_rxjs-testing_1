import * as $ from 'rxjs/operators';
import * as $$ from 'rxjs';

describe('Subscribe & Assert Testing in RxJS', () => {

  it('Wait async value | false positive', () => {
    const source$ = $$.timer(100);
    const final$ = source$.pipe(
      $.mapTo(10),
    );

    const res = final$.toPromise();

    expect(res).resolves.toBe(10);
  });

  // it('Wait async value', () => {
  //   const source$ = $$.timer(100);
  //   const final$ = source$.pipe(
  //     $.mapTo(10),
  //   );
  //
  //   const res = final$.toPromise();
  //
  //   return expect(res).resolves.toBe(10);
  // });

  // it('Wait async value', async () => {
  //   const source$ = $$.timer(100);
  //   const final$ = source$.pipe(
  //     $.mapTo(10),
  //   );
  //
  //   const res = final$.toPromise();
  //
  //   await expect(res).resolves.toBe(10);
  // });

  // it('Wait async value', async () => {
  //   const source$ = $$.timer(100);
  //   const final$ = source$.pipe(
  //     $.mapTo(10),
  //   );
  //
  //   const res = await final$.toPromise();
  //
  //   expect(res).toBe(10);
  // });

});
