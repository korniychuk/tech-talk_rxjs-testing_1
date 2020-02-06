// eslint-disable arrow-parens
import * as $ from 'rxjs/operators';
import * as $$ from 'rxjs';
import { TestScheduler } from 'rxjs/testing';
import { Observable, ReplaySubject } from 'rxjs';

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

  describe('Should share the last sent message', () => {
    // const shareReplayOne = () => <T>(o$: Observable<T>): Observable<T> => {
    //   const subject$ = new $$.ReplaySubject<T>(1);
    //   // const subject$ = new $$.Subject<T>();
    //   o$.subscribe(subject$);
    //
    //   return subject$.asObservable();
    // };

    const shareReplayOne = () => <T>(o$: Observable<T>): Observable<T> =>
      o$.pipe(
        $.multicast(new ReplaySubject(1)),
        $.refCount(),
        // $.shareReplay(1),
      );

    it('Should send all messages', () => {
      testScheduler.run(({ hot, cold, expectObservable }) => {

        const source$ = cold('--a-b--c');
        const final$ = source$.pipe(shareReplayOne());
        const expected =     '--a-b--c';

        expectObservable(final$).toBe(expected);
      });
    });

    // it('Should send only ', () => {
    //   testScheduler.run(({ hot, cold, expectObservable }) => {
    //
    //     const source$ = hot('--a-b-^-c');
    //     const final$ = source$.pipe(shareReplayOne());
    //     const expected =          '--c';                    // <---! invalid
    //     // const expected =          'b-c';                    // <---! valid
    //
    //     expectObservable(final$).toBe(expected);
    //   });
    // });

    // it('Should repeat the last sent message', () => {
    //   testScheduler.run(({ hot, cold, expectObservable }) => {
    //
    //     const source$ = hot('--a-b--c-^');
    //     const final$ = source$.pipe(shareReplayOne());
    //     const expected =             'c';
    //
    //     expectObservable(final$).toBe(expected);
    //   });
    // });
  });

});
