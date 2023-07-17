import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact, Success, Err } from '../Interfaces/contact';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  constructor(private http: HttpClient) {}

  Contact(Contact: Contact): Observable<Success> {
    return this.http.post<Success>(
      'http://localhost:3000/Comments/Insert',
      Contact
    );
  }
}
