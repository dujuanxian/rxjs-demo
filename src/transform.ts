import { Observable } from "rxjs";
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/fromPromise';
import { br, log } from "./util";
import RSVP from "rsvp";

Observable.of(1, 2, 3)
  .subscribe(x => log(x.toString ()));

br();

Observable.from([1, 2, 3])
  .subscribe(x => log(x.toString ()));

br();

Observable.fromEvent(document.querySelector('button'), 'click')
  .subscribe(x => alert('clicked'));

Observable.fromPromise(fetch('http://localhost:3000/data').then(x =>  x.json()))
  .subscribe(response => {
    console.log(response.a);
  });

Observable.fromPromise(new RSVP.Promise(( resolve ) => resolve ({a: 1})))
  .subscribe(response => {
    console.log(response);
  });
