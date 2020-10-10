import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private emailApi = 'https://mailthis.to/martin.michotte@gmail.com'

  constructor(
    private http: HttpClient,
  ) { }

  postMessage(input: any) {
    return this.http.post(this.emailApi, input, {responseType: 'text'}).pipe(
      map(
        (response) => {
          if (response) {
            return response;
          }
        },
        (error) => {
          return error;
        }
      )
    )
  }

}
