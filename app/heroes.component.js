"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var hero_service_1 = require('./hero.service');
var HeroesComponent = (function () {
    function HeroesComponent(heroService) {
        this.heroService = heroService;
        this.title = 'hero details';
    }
    HeroesComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroService.getHeroes().then(function (heroes) { return _this.heroes = heroes; });
    };
    HeroesComponent.prototype.add = function (name) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        this.heroService.create(name)
            .then(function (hero) {
            _this.heroes.push(hero);
            _this.selectedHero = null;
        });
    };
    HeroesComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    HeroesComponent.prototype.delete = function (hero) {
        var _this = this;
        this.heroService
            .delete(hero.id)
            .then(function () {
            _this.heroes = _this.heroes.filter(function (h) { return h !== hero; });
            if (_this.selectedHero === hero) {
                _this.selectedHero = null;
            }
        });
    };
    HeroesComponent.prototype.onselect = function (hero) {
        this.selectedHero = hero;
    };
    HeroesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-heroes',
            template: "\n        <ul class=\"heroes\">\n            <li *ngFor=\"let hero of heroes\" (click)=\"onselect(hero)\" [class.selected]=\"hero === selectedHero\">\n                <span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n                <button class=\"delete\"  (click)=\"delete(hero); $event.stopPropagation()\">x</button>\n            </li>\n        </ul>\n        <my-hero-detail [hero]=\"selectedHero\"></my-hero-detail>\n        <div *ngIf=\"selectedHero\">\n          <h2>\n            {{selectedHero.name | uppercase}} is my hero\n          </h2>\n          <button (click)=\"gotoDetail()\">View Details</button>\n        </div>\n        <div>\n          <label>Hero name:</label> <input #heroName />\n          <button (click)=\"add(heroName.value); heroName.value=''\">\n            Add\n          </button>\n        </div>\n    ",
            styles: ["\n          button.delete {\n              float:right;\n              margin-top: 2px;\n              margin-right: .8em;\n              background-color: gray !important;\n              color:white;\n          }\n          .selected {\n            background-color: #CFD8DC !important;\n            color: white;\n          }\n          .heroes {\n            margin: 0 0 2em 0;\n            list-style-type: none;\n            padding: 0;\n            width: 15em;\n          }\n          .heroes li {\n            cursor: pointer;\n            position: relative;\n            left: 0;\n            background-color: #EEE;\n            margin: .5em;\n            padding: .3em 0;\n            height: 1.6em;\n            border-radius: 4px;\n          }\n          .heroes li.selected:hover {\n            background-color: #BBD8DC !important;\n            color: white;\n          }\n          .heroes li:hover {\n            color: #607D8B;\n            background-color: #DDD;\n            left: .1em;\n          }\n          .heroes .text {\n            position: relative;\n            top: -3px;\n          }\n          .heroes .badge {\n            display: inline-block;\n            font-size: small;\n            color: white;\n            padding: 0.8em 0.7em 0 0.7em;\n            background-color: #607D8B;\n            line-height: 1em;\n            position: relative;\n            left: -1px;\n            top: -4px;\n            height: 1.8em;\n            margin-right: .8em;\n            border-radius: 4px 0 0 4px;\n          }\n    "],
            providers: [hero_service_1.HeroService]
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService])
    ], HeroesComponent);
    return HeroesComponent;
}());
exports.HeroesComponent = HeroesComponent;
//# sourceMappingURL=heroes.component.js.map