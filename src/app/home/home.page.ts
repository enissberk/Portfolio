import { Component, OnInit } from '@angular/core';
import * as DataService from '../services/bucket'
import { About_Me } from './../services/bucket';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  user;
  age: number = 0;
  portfolio: DataService.Portfolio[]=[];
  portfolios = new Array (1);
  reference: DataService.Reference[]= [];
  constructor() {
    DataService.initialize({ apikey: "1lgsn519kvkmsk51" })
  }

  async ngOnInit() {
    await this.getUser()
    await this.getPortfolio()
    await this.getReference();

    if (this.user) {
      this.age = this.calculateAge(new Date(this.user.birthday))
      console.log(this.age)
    }
  }
  calculateAge(birthday) {
    let month_diff = Date.now() - birthday.getTime();
    let age_dt = new Date(month_diff);
    let year = age_dt.getUTCFullYear();
    let age = Math.abs(year - 1970);
    return age
  }

  async getUser() {
    this.user = await DataService.about_me.get("61839b964e0014002d1467e1")
  }
  
  async getReference(){
    DataService.reference.getAll().then((res)=>{
      this.reference=res;
      console.log(this.reference)
    })}

  async getPortfolio(){
    DataService.portfolio.getAll().then((res)=>{
      this.portfolio=res;
      console.log(this.portfolio)
    })
  }
  option = {
    slidesPerView: 1.5,
    centeredSlides: true,
    loop: true,
    spaceBetween: 10,
    autoplay: true,
  }

}
