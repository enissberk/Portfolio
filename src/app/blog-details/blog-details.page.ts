import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as DataService from '../services/bucket'

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.page.html',
  styleUrls: ['./blog-details.page.scss'],
})
export class BlogDetailsPage implements OnInit {
  id:any;
  user;
  blog: DataService.Blog;
  
  constructor(private router: ActivatedRoute) {
    DataService.initialize({ apikey: "1lgsn519kvkmsk51" })
   }

  ngOnInit() {
    this.id = this.router.snapshot.params.id;
    this.getBlog()
    this.getUser()
  }

  async getUser() {
    this.user = await DataService.about_me.get("61839b964e0014002d1467e1")
  }

  async getBlog(){
    this.blog = await DataService.blog.get(this.id)
    console.log(this.blog)
  }
}
