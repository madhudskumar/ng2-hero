import { NgModule } from '@angular/core';
import { BrowserModule }   from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

//self modules
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component'
import { HeroesComponent } from './heroes.component'
import {RouterModule} from "@angular/router";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot([
            {
                path:'heroes',
                component: HeroesComponent
            }

        ])
    ],
    declarations: [
        AppComponent,
        HeroesComponent,
        HeroDetailComponent
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule { }