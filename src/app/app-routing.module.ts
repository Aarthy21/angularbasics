import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FollowersComponent } from './followers/followers.component';
import { PostsComponent } from './posts/posts.component';
import { FirstComponent } from './first/first.component';


const routes: Routes = [
  // {path:'',component:FirstComponent},
  {path:'followers',component:FollowersComponent},
  {
    path:'posts',component:PostsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
