import { NgModule } from '@angular/core';
import { BrowserModule }   from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {RouterModule} from "@angular/router";

//self modules
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component'
import { HeroesComponent } from './heroes.component'
import { DashboardComponent } from './dashboard.component'

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot([
            {
                path:'heroes',
                component: HeroesComponent
            },
            {
                path:'detail/:id',
                component:HeroDetailComponent
            },
            {
                path:'dashboard',
                component:DashboardComponent
            },
            {
                path:'',
                redirectTo:'/dashboard',
                pathMatch: 'full'
            }
        ])
    ],
    declarations: [
        AppComponent,
        HeroesComponent,
        HeroDetailComponent,
        DashboardComponent
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule { }