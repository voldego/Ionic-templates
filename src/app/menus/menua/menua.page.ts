import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menua',
  templateUrl: './menua.page.html',
  styleUrls: ['./menua.page.scss'],
})
export class MenuaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public menu1: boolean = false;
  public menu2: boolean = false;
  public menu3: boolean = false;
  public menu4: boolean = false;
  public menu5: boolean = false;
  public menu6: boolean = false;
  public menu7: boolean = false;
  public menu8: boolean = false;
  public menu9: boolean = false;
  public transcale1: boolean = false;
  public trans1: boolean = false;
  public trans2: boolean = false;
  public blur1: boolean = false;

  public togglem1() {
    this.menu1 = !this.menu1;
  }
  public togglem2() {
    this.menu2 = !this.menu2;
    this.transcale1 = !this.transcale1;

  }
  public togglem3() {
    this.menu3 = !this.menu3;
    this.trans1 = !this.trans1;

  }
  public togglem4() {
    this.menu4 = !this.menu4;
    this.trans2= !this.trans2;

  }
  public togglem5() {
    this.menu5 = !this.menu5;
  }
  public togglem6() {
    this.menu6 = !this.menu6;
  }
  
  public togglem7() {
    this.menu7 = !this.menu7;
    this.blur1 = !this.blur1;

  }
  public togglem8() {
    this.menu8 = !this.menu8;
  }
  public togglem9() {
    this.menu9 = !this.menu9;
  }

}
