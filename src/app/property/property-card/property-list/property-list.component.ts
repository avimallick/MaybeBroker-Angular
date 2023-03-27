import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from 'src/app/services/housing.service';
import { IProperty } from 'src/Models/IProperty.interface';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  SellRent = 1;
  
  Properties: Array<IProperty> = [];

  constructor(private route: ActivatedRoute, private housingservice: HousingService){}

  ngOnInit(): void{
    if(this.route.snapshot.url.toString()){
      this.SellRent=2 //We are on rent property here, else we are on base URL
    }
    this.housingservice.getAllProperties().subscribe(
      data=>{
        this.Properties=data;
        console.log(this.route.snapshot.url.toString());
      }, error=> {
        console.log(error);
      }
    )
  }

}
