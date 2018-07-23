import { Observable } from "rxjs";
import 'rxjs/add/observable/of';

Observable.of(1, 2, 3)
  .subscribe(x => document.writeln(x.toString()));

