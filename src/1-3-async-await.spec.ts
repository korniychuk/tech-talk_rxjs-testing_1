import * as $ from 'rxjs/operators';
import * as $$ from 'rxjs';

describe('Subscribe & Assert Testing in RxJS', () => {

  it('ok', $$.noop);

  it('Wait async value', async () => {
    const source$ = $$.timer(100);
    const final$ = source$.pipe(
      $.mapTo(10),
    );

    const res = await final$.toPromise();

    expect(res).toBe(10);
  });

});
