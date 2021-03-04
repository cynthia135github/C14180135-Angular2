import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { GlobalvarService } from "../app/globalvar.service";

@Component({
  selector: "app-favorite",
  templateUrl: "./favorite.component.html",
  styleUrls: ["./favorite.component.css"]
})
export class FavoriteComponent implements OnInit {
  arrFavNotes = [];
  constructor(private router: Router, public globalvar: GlobalvarService) {
    this.refreshData();
  }

  ngOnInit() {
    this.refreshData();
  }

  refreshData() {
    this.arrFavNotes = [];
    for (var i = 0; i < this.globalvar.arrNotes.length; i++) {
      if (this.globalvar.arrNotes[i][3] == 1) {
        this.arrFavNotes.push(this.globalvar.arrNotes[i]);
      }
    }
  }

  fav(id: number) {
    this.globalvar.arrNotes[id][3] = 0;
    //this.refreshData();
  }

  GoToDetail() {
    this.router.navigate(["/detailnote"]);
  }
}
