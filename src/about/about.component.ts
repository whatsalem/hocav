import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm }   from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
results: any;
name:any;
email:any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  this.load();
  }
  load()
  {
  this.http.get('https://bansachonline.herokuapp.com/getlistuser').subscribe(data => {
      this.results = data;
      console.log(data);
      console.clear();
    });
  }
  onSubmit(form: NgForm){
    this.http.post("https://bansachonline.herokuapp.com/user",{user_name_add: this.name,user_email_add: this.email})
    .subscribe(data => {
      console.log(data);
      this.load();
    });
  }
}