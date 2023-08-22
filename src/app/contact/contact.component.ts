import { Component } from '@angular/core';
import {AbstractControl, AsyncValidatorFn, FormBuilder, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {Router} from "@angular/router";
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm : FormGroup;
  maxMessageCount: number = 3;
  isButtonDisabled : boolean = false;

  constructor ( private router : Router,private formBuilder: FormBuilder, private snackBar : MatSnackBar) {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required, this.maxLengthValidator(2000)]
    });
  }

  sendContactMessage () {
    if(this.contactForm.valid) {
      const { name, email, subject, message } = this.contactForm.value;
      const messageCount = localStorage.getItem('messageCount');
      if (!messageCount) {
        localStorage.setItem('messageCount','1');
      }
      const currentCount = messageCount ? parseInt(messageCount, 10) : 0;
      localStorage.setItem('messageCount', (currentCount + 1).toString());


      if (currentCount >= this.maxMessageCount) {
        this.isButtonDisabled = true;
        this.snackBar.open('You have reached the maximum message limit.', 'Close', { duration: 3000 });
        return;
      }
        console.log(this.contactForm.value.email);
        const formElement = document.querySelector('form');
        formElement?.submit();
    } else {
      this.markFormFieldsAsTouched();
    }
  }
  markFormFieldsAsTouched() {
    Object.keys(this.contactForm.controls).forEach(key => {
      const control = this.contactForm.get(key);
      if (control) {
        control.markAsTouched();
      }
    });
  }

  getErrorMessage(controlName: string): string {
    const control = this.contactForm.get(controlName);

    if (control?.errors) {
      if (control.errors['required']) {
        return 'This field is required';
      }

      if (control.errors['email']) {
        return 'Invalid email address';
      }
      if (control.errors['maxLengthExceeded']) {
        return 'Maximum length exceeded.';
      }
    }

    return '';
  }


  maxLengthValidator(maxLength: number): AsyncValidatorFn {
    return (control: AbstractControl): Promise<ValidationErrors | null> => {
      return new Promise((resolve) => {
        if (control.value && control.value.length > maxLength) {
          resolve({ maxLengthExceeded: true });
        } else {
          resolve(null);
        }
      });
    };
  }
}
