import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { GlobalvarService } from "../app/globalvar.service";

@Component({
  selector: "app-detailnote",
  templateUrl: "./detailnote.component.html",
  styleUrls: ["./detailnote.component.css"]
})
export class DetailnoteComponent implements OnInit {
  notesJudul: String[];
  notesIsi: String[];
  notesTgl: Date[];
  jumlahdata: Number;

  constructor(private router: Router, public globalvar: GlobalvarService) {
    this.notesJudul = this.globalvar.getJudul();
    this.notesIsi = this.globalvar.getIsi();
    this.notesTgl = this.globalvar.getTgl();
    this.jumlahdata = this.globalvar.getJumlah();
  }

  ngOnInit() {}

  fav() {}

  GoToFav(){
    this.router.navigate(["/favorite"]);
  }
}
