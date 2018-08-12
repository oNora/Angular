import { TestBed, ComponentFixture } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { NO_ERRORS_SCHEMA, Component, Input } from "@angular/core";
import { of } from "rxjs/observable/of";

import { HeroesComponent } from "./heroes.component";
import { HeroService } from "../hero.service";
import { Hero } from "../hero";
import { HeroComponent } from "../hero/hero.component";

describe('HeroesComponent (deep test)', () => {
    // get intellisense for the component
    let fixture: ComponentFixture<HeroesComponent>;

    let HEROES;
    // mock with Jasmine
    let mockHeroService;



    beforeEach(() => {
        HEROES = [
            { id: 1, name: 'SpiderDude', strength: 8 },
            { id: 2, name: 'Wonderful Woman', strength: 24 },
            { id: 3, name: 'SuperDude', strength: 55 }
        ]
        mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero']);

        TestBed.configureTestingModule({
            declarations: [
                HeroesComponent,
                HeroComponent
            ],
            schemas: [NO_ERRORS_SCHEMA],
            providers: [
                { provide: HeroService, useValue: mockHeroService }
            ]
        });

        fixture = TestBed.createComponent(HeroesComponent);


    });

    it('should render each Hero as HeroComponent', () => {
        mockHeroService.getHeroes.and.returnValue(of(HEROES));
        // this will call all child components too
        // this will run ngOnInit
        fixture.detectChanges();

        // this works for component because components are subclass of directives
        const heroComponentDebugEls = fixture.debugElement.queryAll(By.directive(HeroComponent));
        expect(heroComponentDebugEls.length).toEqual(3);

        // example 1 - checking one by one
        expect(heroComponentDebugEls[0].componentInstance.hero.name).toEqual('SpiderDude');

        // example 2 - loop through the HEROES array
        for (let i = 0; i < heroComponentDebugEls.length; i++) {
            expect(heroComponentDebugEls[i].componentInstance.hero).toEqual(HEROES[i]);
        }
    })

});
