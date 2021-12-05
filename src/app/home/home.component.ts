import { Component, OnInit } from '@angular/core';
import { MealInfoService } from '../meal-info.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public mealName:string=''
  public imgUrl:string=''
  public instructions:string=''
  public display:boolean=true
 
  constructor(private mealService:MealInfoService) { }

  ngOnInit(): void {
  }
  getImg(){
    const mealUrl="https://www.themealdb.com/api/json/v1/1/search.php?s="+this.mealName
    this.mealService.getImg(mealUrl).subscribe((data:any)=>{this.imgUrl=data.meals[0].strMealThumb;
      this.instructions=data.meals[0].strInstructions
      this.display=false
    })
    
    }
    
  }

