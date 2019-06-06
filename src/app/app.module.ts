import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { GanderTitlePipe } from './gander-title.pipe';
import {FormsModule} from '@angular/forms';
import {RouterModule,Routes} from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { NewsapiComponent } from './newsapi/newsapi.component';
import { NewsFilterPipe } from './news-filter.pipe';
import {HttpClientModule} from '@angular/common/http';
import { SearchPipe } from './search.pipe';


const appRoutes:Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'gallery',component:GalleryComponent},
  {path:'news',component:NewsapiComponent},
  {path:'**',component:NotfoundComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    GanderTitlePipe,
    NotfoundComponent,
    NewsapiComponent,
    NewsFilterPipe,
    SearchPipe,
  ],
  imports: [
    BrowserModule,FormsModule,RouterModule.forRoot(appRoutes),HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
