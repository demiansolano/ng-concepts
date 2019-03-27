import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {


  @Input() whichMap: any;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {

  }

  goToBooth(booth){
    this.router.navigateByUrl('/booth/'+booth);
    this.whichMap
  }

}
