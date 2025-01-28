import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private dataUrl = 'assets/data.json';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<boolean> {
    return this.http.get<{ username: string, password: string }>(this.dataUrl).pipe(
      map(data => data.username === username && data.password === password)
    );
  }
}
