import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private msg:MessageService) { 
    this.msg.userName.subscribe(uname=>{
      this.userName=uname;
      console.log("USERNAME======>"+this.userName)
    })
  }
message:string;
userName:string="Aarthy"
ngOnInit(){
  this.msg.currentMessage.subscribe(message => this.message =
    message);
}

UpdateVal(uname){
  
  this.msg.userName.next(uname.value);
}

}
