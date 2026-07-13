import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { NgForm } from '@angular/forms';
import { ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { HelloComponent } from '../../components/hello/hello.component';

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

  constructor(private eventService: EventService, private resolver: ComponentFactoryResolver) {}

  @ViewChild('dynamicContainer', { read: ViewContainerRef, static: true })
  container!: ViewContainerRef;

  selectedOption: 'conference' | 'webinar' | 'meeting' = 'conference';

  events: Event[] = [];
  page = 1;
  limit = 2;

  eventNames: Record<'conference' | 'webinar' | 'meeting', string> = {
    conference: 'Конференция',
    webinar: 'Вебинар',
    meeting: 'Встреча'
  };

  handleSubmit(form: NgForm): void {
    const formData = new FormData();

    formData.append('event-name', form.value['event-name']);
    formData.append('event-type', form.value['event-type']);

    this.eventService.submitEvent(formData).subscribe({
      next: (response : any) => {
        console.log('Успешно!', response);
        this.loadEvents();
      },
      error: (error : any) => {
        console.error(error);
      }
    });
  }

  ngOnInit(): void {
    this.loadEvents();
  }

  loadEvents(): void {
    const offset = (this.page - 1) * this.limit;

    this.eventService.getEvents(
      this.limit,
      offset,
      this.selectedOption
    )
    .subscribe({
      next: data => this.events = data,
      error: err => console.error(err)
    });
  }

  onFilterChange(): void {
    this.page = 1;
    this.loadEvents();
  } 

  nextPage(): void {
    this.page++;
    this.loadEvents();
  }

  prevPage(): void {
    if (this.page > 1) {
      this.page--;
      this.loadEvents();
    }
  }

  createComponent(): void {
    this.container.clear();
    const factory = this.resolver.resolveComponentFactory(HelloComponent);
    this.container.createComponent(factory);
  }
}