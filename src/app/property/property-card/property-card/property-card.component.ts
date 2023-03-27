import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent {
@Input() property: any;
constructor(private route: Router){}
routerChange(e:number){
  this.route.navigateByUrl("/property-detail/"+e);
}
}
