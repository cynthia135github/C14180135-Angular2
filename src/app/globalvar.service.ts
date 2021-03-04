import { Injectable } from "@angular/core";

@Injectable()
export class GlobalvarService {
  private judul: String[];
  private isi: String[];
  private tgl: Date[];
  public jumdata = 0;

  constructor() {
    this.judul = [];
    this.isi = [];
    this.tgl = [];
  }

  public addNew(tjudul: String, tisi: String, ttgl: Date) {
    this.judul[this.jumdata] = tjudul;
    this.isi[this.jumdata] = tisi;
    this.tgl[this.jumdata] = ttgl;
    this.jumdata++;
  }

  public getJudul() {
    return this.judul;
  }
  public getIsi() {
    return this.isi;
  }
  public getTgl() {
    return this.tgl;
  }
  public getJumlah() {
    return this.jumdata;
  }
}
