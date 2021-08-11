import { Component, OnInit } from '@angular/core';
import { DealServiceService } from 'src/service/deal-service.service';
import { Deal } from './dto/deal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'warehouse';

  private deals: Deal[] = [];

  constructor(private service : DealServiceService){

  }

  ngOnInit(){
    this.service.getDeals().subscribe(data => {
      this.deals = data;
    })

  }


}
