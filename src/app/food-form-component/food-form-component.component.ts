import { Component } from '@angular/core';
import { Food } from '../food-list-component/food-list-component.component';




@Component({
  selector: 'app-food-form-component',
  templateUrl: './food-form-component.component.html',
  styleUrls: ['./food-form-component.component.css']
})
export class FoodFormComponentComponent {

  foods : Food[] = [
    {
        name: "Coke",
        food_group: "BEVERAGE",
        calories: 150
    },
    {
        name: "Fish and Chips",
        food_group: "MAIN_COURSE",
        calories: 1200
    },
    {
        name: "Sour Lemonade",
        food_group: "BEVERAGE",
        calories: 12
    },
    {
        name: "Cesar Salad",
        food_group: "MAIN_COURSE",
        calories: 450
    }
  ]

}
