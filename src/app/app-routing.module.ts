import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkComponent } from './work/work.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FourOFourComponent } from './four-o-four/four-o-four.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about-me', component: AboutMeComponent},
  {path: 'work', component: WorkComponent},
  {path: 'skills', component: SkillsComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'not-found', component: FourOFourComponent},
  {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
