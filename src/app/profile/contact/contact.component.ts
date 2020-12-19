import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from 'src/app/default.error-matcher';
import { ToastrNotificationService } from 'src/app/service/toastr-notification.service';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  customerForm: FormGroup;
  matcher = new MyErrorStateMatcher();
  constructor(private fb: FormBuilder, private http: HttpClient, private toastr: ToastrNotificationService) { }

  ngOnInit(): void {
    this.createCustomer();
  }
  onSubmit() {
    console.log("ok", this.customerForm.value);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
          this.http.post('https://formspree.io/f/xwkwwerp',
            { name: this.customerForm.value.name,
              subject: this.customerForm.value.subject, 
              replyto: this.customerForm.value.email, 
              message: this.customerForm.value.message },
            { 'headers': headers }).subscribe(
              response => {
                console.log(response);
                this.toastr.showSucces("Send Feedback Successfully");
              }
            );
    this.customerForm.reset();
  }

  createCustomer() {
    this.customerForm = this.fb.group({
      name: [''],
      subject: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.required]
    })
  }

}
