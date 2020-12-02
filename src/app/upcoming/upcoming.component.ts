import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ControllerService } from '../controller.service';
@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css']
})
export class UpcomingComponent implements OnInit {

  constructor(private http:HttpClient,private adm:ControllerService) {
   this.adm.upcomingMatches().subscribe(data=>{console.log(data);
    // this.details=data;
     //console.log(this.details);
     
   });
   }

  ngOnInit(): void {
  }

}
