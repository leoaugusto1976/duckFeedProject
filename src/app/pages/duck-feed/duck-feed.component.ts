import { Component, OnInit } from '@angular/core';
import { IDuckFeed } from 'src/app/interfaces/IDuckFeed';
import { DuckFeedServiceService } from 'src/app/services/duck-feed-service.service';
import { FormBuilder, FormGroup, AbstractControl } from '@angular/forms';
import { ITyepOfFood } from 'src/app/interfaces/ITypeOfFood';
import { IFood } from 'src/app/interfaces/IFood';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import csc from 'country-state-city'
import { ICountry, IState, ICity } from 'country-state-city'

@Component({
  selector: 'app-duck-feed',
  templateUrl: './duck-feed.component.html',
  styleUrls: ['./duck-feed.component.scss']
})
export class DuckFeedComponent implements OnInit {

  public formDuckFeed: FormGroup;
  public periods: string[] = ['Daily', 'Weekly', 'Bi-Weekly', 'Monthly', 'Yearly'];
  public type_of_food_data: ITyepOfFood[] = [
    { id: 1, name: "Fruit" },
    { id: 2, name: "Vegetables" },
    { id: 3, name: "Grains" }
  ];

  private food_data: IFood[] = [
    { id: 1, name: "Grapes", type_of_food_id: 1 },
    { id: 2, name: "Rice", type_of_food_id: 3 },
    { id: 3, name: "Lettuce", type_of_food_id: 2 }
  ];
  public food_data_filtered: IFood[] = this.food_data;

  public provinces: IState[];
  public cities: ICity[];

  private duckFeed: IDuckFeed = {
    "province": "", 
    "city": "",
    "frequency": null, 
    "period": null,
    "quantity_unit": "",
    "quantity": 0, 
    "food": "", 
    "type_of_food": 0
  };

  public messageError: string = '';
  public formHidden: boolean = false;

  get type_of_food(): AbstractControl { return this.formDuckFeed.get('type_of_food'); }
  get food(): AbstractControl { return this.formDuckFeed.get('food'); }
  get city(): AbstractControl { return this.formDuckFeed.get('city'); }
  get province(): AbstractControl { return this.formDuckFeed.get('province'); }
  get quantity(): AbstractControl { return this.formDuckFeed.get('quantity'); }
  get frequency(): AbstractControl { return this.formDuckFeed.get('frequency'); }
  get period(): AbstractControl { return this.formDuckFeed.get('period'); }
    
  constructor(
    private form: FormBuilder,
    private duckFeedService: DuckFeedServiceService
  ) { }

  ngOnInit(): void {
    this.formDuckFeed = this.form.group({
      type_of_food: [''],
      food: [''],
      city: [''],
      province: [''],
      quantity: [''],
      frequency: [''],
      period: ['']
    });

    const canada: ICountry = csc.getCountryByCode("CA");
    this.provinces = csc.getStatesOfCountry(canada.id);
  }

  public new() {
    this.duckFeed.food = this.food.value.id;
    this.duckFeed.type_of_food = this.type_of_food.value.id;
    this.duckFeed.city = this.city.value;
    this.duckFeed.province = this.province.value.name;
    this.duckFeed.quantity = this.quantity.value;
    this.duckFeed.quantity_unit = "g";
    this.duckFeed.frequency = this.frequency.value === '' ? ' ' : this.frequency.value;
    this.duckFeed.period = this.period.value === '' ? ' ' : this.period.value;

    this.duckFeedService.insert(this.duckFeed).subscribe(
      (data) => {
        this.messageError = '';
        this.formHidden = true;
      },
      (error) => {
        this.formHidden = false;
        this.messageError = error.text;
      }
    );
  }

  public onTypeOfFoodSelected(event: MatAutocompleteSelectedEvent): void {
    this.food_data_filtered = this.food_data.filter(f => f.type_of_food_id === event.option.value.id);
  }

  public displayName(opt): string {
    return opt.name;
  }

  public onProvinceSelected(event: MatAutocompleteSelectedEvent): void {
    this.cities = csc.getCitiesOfState(event.option.value.id);
  }

  public disablePeriodField(): boolean {
    return this.period.value === '';
  }
}
