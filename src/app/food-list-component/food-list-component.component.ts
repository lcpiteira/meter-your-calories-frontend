import { Component } from '@angular/core';


export interface Order {
  username: string;
  order_ts: string;
  order_total_calories: number;
  foodDtoList: Food[];
}
export interface Food {
  name: string;
  food_group: string;
  calories: number;
}



const ELEMENT_DATA : Order[] = [ 
  {
    username: "Luis Piteira",
    order_ts: "2023-02-19T12:43:09",
    order_total_calories: 462,
    foodDtoList: [
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

] 





@Component({
  selector: 'app-food-list-component',
  templateUrl: './food-list-component.component.html',
  styleUrls: ['./food-list-component.component.css']
})



export class FoodListComponentComponent {
  displayedColumns: string[] = ['date','mainCourse', 'beverage' ,'totalCalories' ];
  dataSource = ELEMENT_DATA;

  getNameOfFood(order: Order, type: string) {
    return order
        .foodDtoList
        .filter(food => food.food_group === type)[0].name
        
  }
  
}
