import { Component, OnInit } from '@angular/core';
import { FormsService } from '../forms.service';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  forms: any;
  formsCount: number;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required,
  ]);

  matcher = new MyErrorStateMatcher();
  showPasswordChecked = false;

  constructor(private formsService: FormsService, public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.formsService.forms.subscribe(res => {
      this.forms = res;
      this.formsCount = res.length;
    });
  }

  signIn(f: NgForm) {
    console.log('user submited');

    if (f.valid && this.emailFormControl.valid && this.passwordFormControl.valid) {
      this.snackBar.open('Great to have you', null, { duration: 1000, panelClass: ['snack-bar-welcome']});
    } else {
      this.snackBar.open('invalid input', null, { duration: 1000, panelClass: ['snack-bar-error']});
    }
  }
}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
