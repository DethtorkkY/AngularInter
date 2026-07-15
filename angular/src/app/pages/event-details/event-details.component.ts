import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private eventService: EventService) { }

  eventId: number | null = null;
  event: any = null;

  ngOnInit(): void {

  this.route.queryParams.subscribe(params => {

    const id = Number(params['id']);

    this.eventService.getEventById(id)
      .subscribe({

        next: data => {
          this.event = data;
        },

        error: err => {
          console.error(err);
        }
      });
  });
}
}
