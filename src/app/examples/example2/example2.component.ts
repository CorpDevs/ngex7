import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({ selector: 'example2', templateUrl: 'example2.component.html' })
export class Example2Component implements OnInit{

  post: any;
  rForm: FormGroup;
  name: String = '';
  description: String = '';
  errorMessage: String = 'This field is required!';

  constructor(private fb: FormBuilder) {

    this.rForm = fb.group({
      'name': [null, Validators.required],
      'description': [null, Validators.compose([Validators.required,
        Validators.minLength(10), Validators.maxLength(600)])],
      'validate': null
    });
  }

  ngOnInit() {
    this.rForm.get('validate').valueChanges.subscribe(
      (validate) => {
        if (validate === true) {
          this.rForm.get('name').setValidators([Validators.required , Validators.minLength(4)]);
          this.errorMessage = 'Minimum 4 chars!';
        } else {
          this.rForm.get('name').setValidators(Validators.required);
        }
        this.rForm.get('name').updateValueAndValidity();
      }
    );
  }

  addPost(data) {
    this.post = data;
    this.name = data.name;
    this.description = data.description;
  }
}
