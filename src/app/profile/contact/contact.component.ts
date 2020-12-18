import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from 'src/app/default.error-matcher';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  customerForm: FormGroup;
  matcher = new MyErrorStateMatcher();
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createCustomer();
  }
  onSubmit() {
    console.log("ok");
  }

  createCustomer() {
    this.customerForm = this.fb.group({
      name: ['', Validators.required],
      subject: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.required]
    })
  }

}
