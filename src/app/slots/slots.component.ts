import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SlotsService } from './slots.service';

@Component({
  selector: 'app-slots',
  templateUrl: './slots.component.html',
  styleUrls: ['./slots.component.scss']
})
export class SlotsComponent implements OnInit {
  data: any;
  slots: any;

  constructor(
    private route: ActivatedRoute,
    public slotsService: SlotsService
  ) { }

  ngOnInit() {
    this.data = this.route.snapshot.data['resolved'];
    this.slots = this.data.slots;
    console.log(this.slots);
  }

}
