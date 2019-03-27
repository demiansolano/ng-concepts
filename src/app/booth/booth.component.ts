import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-booth',
  templateUrl: './booth.component.html',
  styleUrls: ['./booth.component.css']
})
export class BoothComponent implements OnInit {

  booth: string;
  greeting: string;

  constructor(
    private route: ActivatedRoute,
    private api: ApiService
  ) { 
    route.params.subscribe(params =>{
      this.booth = params.id;
    })
  }

  ngOnInit() {
    this.api.castGreeting.s
  }

}
