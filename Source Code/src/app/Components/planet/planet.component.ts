import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";
import { PlanetService } from 'src/app/Services/planet.service';
import { Router } from '@angular/router';

@Component({
  selector: "app-planet",
  templateUrl: "./planet.component.html",
  styleUrls: ["./planet.component.css"]
})
export class PlanetComponent implements OnInit {
  planet: {} ;

  constructor(
    private _location: Location,
    private planetsService: PlanetService,
    private router: Router
  ) {}

  ngOnInit() {

    this.planetsService.getPlanetById(history.state.url)
    .subscribe( data => {
      this.planet = data;
      console.log(this.planet);


    }, err => {
     console.log(err);
    });
  }
  goBack() {
    this._location.back();
  }
}
