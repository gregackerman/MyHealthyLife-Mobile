import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the PatientProfile provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class PatientProfile {

  constructor(public http: Http) {
    console.log('Hello PatientProfile Provider');
  }

  loadProfile(id): any {
    let profile;
    if (id='123') {
      profile = {'name' : 'John Smith',
                  'age' : 45,
                  'conditions' : ['asthma','migraine']}
      } else
    if (id='456') {
      profile = {'name' : 'Sara Jenkins',
                  'age' : 37,
                  'conditions' : ['migraine']}
      } else
    if (id='789') {
      profile = {'name' : 'Tony Spumoni',
                  'age' : 68,
                  'conditions' : ['joint pain']}
    return profile;
    }
  }

}
