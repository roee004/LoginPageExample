import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class FormsService {

  private formsBegaviorSubject = new BehaviorSubject<any>([]);
  forms = this.formsBegaviorSubject.asObservable();

  constructor() {

   }

   updateForms(forms) {
    this.formsBegaviorSubject.next(forms);
   }
}
