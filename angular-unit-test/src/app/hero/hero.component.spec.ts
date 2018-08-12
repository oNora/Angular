import { By } from '@angular/platform-browser';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { HeroComponent } from './hero.component';

// shallow tests
describe('HeroComponent (shallow test)', () => {
    // get intellisense for the component
    let fixture: ComponentFixture<HeroComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                HeroComponent
            ],
            schemas: [NO_ERRORS_SCHEMA]
        });

        fixture = TestBed.createComponent(HeroComponent);

    })


    it('should have the current hero', () => {
        fixture.componentInstance.hero = { id: 1, name: 'SuperDude', strength: 3 };

        expect(fixture.componentInstance.hero.name).toEqual('SuperDude');

    });

    it('should render the hero in an anchor tag', () => {
        fixture.componentInstance.hero = { id: 1, name: 'SuperDude', strength: 3 };
        fixture.detectChanges(); // tells Angular to implement the bindings

        //  fixture.debugElement a wrapper around the actual DOM note -  similar to the fixture.nativeElement but a little bit more powerful
        // By library - By.css has selector similar to the how jquery work
        let debugElAnchor = fixture.debugElement.query(By.css('a'));
        expect(debugElAnchor.nativeElement.textContent).toContain('SuperDude');

        //fixture.nativeElement get access to the DOM
        expect(fixture.nativeElement.querySelector('a').textContent).toContain('SuperDude');

    })
})