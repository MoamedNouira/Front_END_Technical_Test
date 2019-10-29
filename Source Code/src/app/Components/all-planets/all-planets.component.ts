import { Component, OnInit } from "@angular/core";
import { PlanetService } from "src/app/Services/planet.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-all-planets",
  templateUrl: "./all-planets.component.html",
  styleUrls: ["./all-planets.component.css"]
})
export class AllPlanetsComponent implements OnInit {
  planets: any;
  constructor(private planetsService: PlanetService, private router: Router) {}

  ngOnInit() {
    this.planetsService.getPlanets().subscribe(
      data => {
        this.planets = data.results;

        console.log(this.planets);
      },
      err => {
        console.log(err);
      }
    );
  }
  setIndex(id) {
    let index = id + 1;
    this.router.navigateByUrl("/planet/" + index, {
      state: { url: this.planets[id].url }
    });
  }
}
