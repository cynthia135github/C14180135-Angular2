import { Component, VERSION } from "@angular/core";
import { Router } from "@angular/router";
import { GlobalvarService } from "./globalvar.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  txtJudul = "";
  txtIsi = "";
  txtTgl: Date;
  statusAdd = "";
  /*notesJudul : String[];
  notesIsi : String[];
  notesTgl : Date[];
  jumlahdata = 0;*/

  constructor(private router: Router, public globalvar: GlobalvarService) {}

  AddNote() {
    if (this.txtJudul != "" && this.txtIsi != "" && this.txtTgl != null) {
      alert(this.txtJudul + this.txtIsi + this.txtTgl);
      /*this.notesJudul[this.jumlahdata] = this.txtJudul;
      this.notesIsi[this.jumlahdata] = this.txtIsi;
      this.notesTgl[this.jumlahdata] = this.txtTgl;*/
      this.globalvar.addNew(this.txtJudul, this.txtIsi, this.txtTgl);
      this.statusAdd = "Sukses Add New Note !";
    } else {
      alert("Input tidak boleh kosong !");
    }
  }

  GoToDetail() {
    this.router.navigate(["/detailnote"]);
  }
}
