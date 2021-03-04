import { Injectable } from "@angular/core";

@Injectable()
export class GlobalvarService {
  public arrNotes = [];
  public jumdata = 0;

  constructor() {}

  public addNew(tjudul: String, tisi: String, ttgl: Date) {
    var notebaru = [];
    notebaru[0] = tjudul;
    notebaru[1] = tisi;
    notebaru[2] = ttgl;
    notebaru[3] = 0;

    this.arrNotes.push(notebaru);
  }

  public getAllNotes() {
    return this.arrNotes;
  }
}
