import { Injectable } from '@angular/core';
import { Hero} from './hero';
import { HEROES } from './mock-heroes'
import {Http, Headers} from "@angular/http";
import 'rxjs/add/operator/toPromise'


@Injectable()
export class HeroService {
    private heroesUrl = 'app/heroes';
    private headers = new Headers({'Content-Type':'application/json'})

    private handleError(error:any): Promise<any>{
        console.log('an error occured', error);
        return Promise.reject(error.message || error);
    }

    constructor (private http : Http) {}

    getHeroes():Promise<Hero[]> {
        return this.http.get(this.heroesUrl)
            .toPromise()
            .then(response => response.json().data as Hero[])
            .catch(this.handleError);
    }

    create(name:string):Promise<Hero>{
        return this.http
            .post(this.heroesUrl, JSON.stringify({name:name}),{headers:this.headers})
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    update(hero: Hero): Promise<Hero>{
        const url = `${this.heroesUrl}/${hero.id}`;

        return this.http
            .put(url, JSON.stringify(hero), {headers: this.headers})
            .toPromise()
            .then(() => hero)
            .catch(this.handleError)
    }

    getHero(id):Promise<Hero>{
        return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id));
    }
}