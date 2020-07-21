import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { AchievementsComponent } from './components/achievements/achievements.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';


const routes: Routes = [
  {
    path:'',redirectTo:'/home',pathMatch:'full'
  },
 
  {
    path:'home',component:HomeComponent,
  },
  {
    path:'about',component:AboutComponent
  },
  {
    path:'contacts', component:ContactComponent
  },
  {
    path:'achievements',component:AchievementsComponent
  },
  {
    path:'gallery',component:GalleryComponent
  },
  {
    path:'feedback',component:FeedbackComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'signup',component:SignupComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
