import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  form: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
    price: new FormControl(5, [Validators.required, Validators.min(5), Validators.max(20)]),
  });

  /**
   * Check the form valid and show a message if it is valid.
   */
  submit(): void {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      alert('Valid form');
    }
  }


  /**
   * Return true if the control passes the validations and false otherwise
   * @param {string} nameControl Control's name
   * @returns {boolean}
   */
  validations(nameControl: string): boolean {
    if (this.form.get(nameControl)?.invalid && (this.form.get(nameControl)?.touched || this.form.get(nameControl)?.dirty)) {
      return false;
    } else {
      return true;
    }
  }

  /**
   * Initialize the form
   */
  initForm(): void {
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
      price: new FormControl(5, [Validators.required, Validators.min(5), Validators.max(20)]),
    });
  }

}
