import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Event {
  id: number;
  name: string;
  type: 'conference' | 'webinar' | 'meeting';
}

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) {}

  getEvents(
    limit: number,
    offset: number,
    filterBy?: string): Observable<Event[]> {

    let url =
      `https://angularinter.onrender.com/api/filter?limit=${limit}&offset=${offset}`;

    if (filterBy) {
      url += `&filterBy=${filterBy}`;
    }

    return this.http.get<Event[]>(url);

  }

  submitEvent(formData: FormData): Observable<any> {
    return this.http.post(
      'https://angularinter.onrender.com/api/submit',
      formData
    );
  }
  getEventById(id: number): Observable<Event> {
    return this.http.get<Event>(
      `https://angularinter.onrender.com/api/event/${id}`
    );
  }
}