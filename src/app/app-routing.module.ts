import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { ContactComponent } from './Components/contact/contact.component';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'Main', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'Contact', component: ContactComponent },
  { path: 'Main', component: LandingPageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
