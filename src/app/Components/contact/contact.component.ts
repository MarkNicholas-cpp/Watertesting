import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommentsService } from 'src/app/Services/comments.service';
import { Subscription } from 'rxjs';
import { Success, Err } from 'src/app/Interfaces/contact';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  Subscribe = new Subscription();
  Success: boolean = false;
  err: boolean = true;
  Msg: String = '';
  constructor(private Service: CommentsService) {}

  Submit(Form: NgForm) {
    this.Subscribe = this.Service.Contact(Form.form.value).subscribe({
      next: (result: Success) => {
        this.Success = true;
        this.err = false;
        this.Msg = 'Thanks You For Contacting Us';
      },
      error: (err) => {
        this.Success = false;
        this.err = true;
        this.Msg = err.error.Msg;
      },
    });
  }
}
