import { Component, OnInit } from '@angular/core';
import { IDuckFeed } from 'src/app/interfaces/IDuckFeed';
import { DuckFeedServiceService } from 'src/app/services/duck-feed-service.service';

@Component({
  selector: 'app-duck-feed',
  templateUrl: './duck-feed.component.html',
  styleUrls: ['./duck-feed.component.scss']
})
export class DuckFeedComponent implements OnInit {

  constructor(
    private duckFeedService: DuckFeedServiceService
  ) { }

  ngOnInit(): void {
  }

  new() {
    const duckFeed: IDuckFeed = {
      "province": "BC", 
      "city": "Victoria",
      "frequency": "3", 
      "period": "weekly",
      "quantity_unit": "g",
      "quantity": 150, 
      "food": "grapes", 
      "type_of_food": 1
      };
    this.duckFeedService.insert(duckFeed).subscribe(
      (data) => {
        console.log(JSON.parse(data.body));
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
