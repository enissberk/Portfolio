import { Component, OnInit } from '@angular/core';
import * as DataService from '../services/bucket'

@Component({
  selector: 'app-blog',
  templateUrl: './blog.page.html',
  styleUrls: ['./blog.page.scss'],
})
export class BlogPage implements OnInit {

  user;
  blog: DataService.Blog[] = [];
  
  constructor() {
    DataService.initialize({ apikey: "1lgsn519kvkmsk51" })
   }

  ngOnInit() {
    this.getBlog()
    this.getUser()
  }

  async getUser() {
    this.user = await DataService.about_me.get("61839b964e0014002d1467e1")
  }

  async getBlog(){
    this.blog = await DataService.blog.getAll()
    console.log(this.blog)
  }
}