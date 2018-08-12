import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA, Component, Input, Directive } from '@angular/core';
import { of } from 'rxjs/observable/of';

import { HeroesComponent } from './heroes.component';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';
import { HeroComponent } from '../hero/hero.component';

// mock router link directive
// mock elements, directives and so on is a way to not use NO_ERRORS_SCHEMA
@Directive({
    selector: '[routerLink]',
    host: { '(click)': 'onClick()' }
})
export class RouterLinkDirectiveStub {
    @Input('routerLink') linkParams: any;
    navigateTo: any = null;

    onClick() {
        this.navigateTo = this.linkParams;
    }
}


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
                HeroComponent,
                RouterLinkDirectiveStub
            ],
            // schemas: [NO_ERRORS_SCHEMA],
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
    });

    it(`should call heroServices.deleteHero when the Hero Component's
    delete button is clicked`, () => {

            spyOn(fixture.componentInstance, 'delete');
            mockHeroService.getHeroes.and.returnValue(of(HEROES));
            // this will run ngOnInit
            fixture.detectChanges();

            const heroComponent = fixture.debugElement.queryAll(By.directive(HeroComponent));

            // instead stopPropagation we can use also jasmine
            // call the delete event manual
            // heroComponent[0].query(By.css('button')).triggerEventHandler('click', { stopPropagation: () => { } });

            // second way to call delete method instead the above line 73 - here we make the component to call the event
            // (<HeroComponent>heroComponent[0].componentInstance).delete.emit(undefined);
            // another way to do it - here we use debugElement to call the event
            heroComponent[0].triggerEventHandler('delete', null);


            expect(fixture.componentInstance.delete).toHaveBeenCalledWith(HEROES[0]);
        });

    it(`should call a new hero to the hero list when the add button is clicked `, () => {

        mockHeroService.getHeroes.and.returnValue(of(HEROES));
        // this will run ngOnInit
        fixture.detectChanges();

        const name = 'Mr. Ice';

        mockHeroService.addHero.and.returnValue(of({ id: 5, name: name, strength: 4 }));
        const inputElement = fixture.debugElement.query(By.css('input')).nativeElement;
        const addButton = fixture.debugElement.queryAll(By.css('button'))[0];

        inputElement.value = name;
        addButton.triggerEventHandler('click', null);

        fixture.detectChanges();
        const heroText = fixture.debugElement.query(By.css('ul')).nativeElement.textContent;
        expect(heroText).toContain(name);
    });


    it('should render correct route for the first hero', () => {

        mockHeroService.getHeroes.and.returnValue(of(HEROES));
        // this will run ngOnInit
        fixture.detectChanges();

        const heroComponent = fixture.debugElement.queryAll(By.directive(HeroComponent));
        let routerLink = heroComponent[0].query(By.directive(RouterLinkDirectiveStub)).injector.get(RouterLinkDirectiveStub);

        heroComponent[0].query(By.css('a')).triggerEventHandler('click', null);

        expect(routerLink.navigateTo).toBe('/detail/1');
    });
});
