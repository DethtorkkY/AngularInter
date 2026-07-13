import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

interface Event {
  id: number;
  name: string;
  type: 'conference' | 'webinar' | 'meeting';
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) {}

  selectedOption: 'conference' | 'webinar' | 'meeting' = 'conference';

  events: Event[] = [];

  eventNames: Record<'conference' | 'webinar' | 'meeting', string> = {
    conference: 'Конференция',
    webinar: 'Вебинар',
    meeting: 'Встреча'
  };

  handleSubmit(form: NgForm): void {
    const formData = new FormData();

    formData.append('event-name', form.value['event-name']);
    formData.append('event-type', form.value['event-type']);

    this.http
      .post('http://localhost:3001/api/submit', formData)
      .subscribe({
        next: (response) => {
          console.log('Успешно!', response);
        },
        error: (error) => {
          console.error(error);
        }
      });
  }

  ngOnInit(): void {
    this.loadEvents();
  }

  loadEvents(): void {
    this.http
      .get<Event[]>('http://localhost:3001/api/filter')
      .subscribe({
        next: data => {
          this.events = data;
          console.log(data);
        },
        error: err => console.error(err)
      });
  }

}