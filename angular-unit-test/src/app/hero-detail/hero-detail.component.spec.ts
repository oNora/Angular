import { ActivatedRoute } from '@angular/router';
import { TestBed, ComponentFixture, fakeAsync, tick, async, flush } from '@angular/core/testing';
import { Location } from '@angular/common';
import { of } from 'rxjs/observable/of';
import { FormsModule } from '@angular/forms';
// import { NO_ERRORS_SCHEMA } from '@angular/core';

import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from '../hero.service';

describe('HeroesComponent (deep test)', () => {
    let fixture: ComponentFixture<HeroDetailComponent>;
    let mockActivateRoute, mockHeroService, mockLocation;

    beforeEach(() => {
        // mocks without Jasmine
        mockActivateRoute = {
            snapshot: { paramMap: { get: () => { return '3' } } }
        }

        // mock with jasmine;
        mockHeroService = jasmine.createSpyObj(['getHero', 'updateHero']);
        mockLocation = jasmine.createSpyObj(['back']);

        TestBed.configureTestingModule({
            imports: [FormsModule],
            declarations: [
                HeroDetailComponent,
            ],
            // schemas: [NO_ERRORS_SCHEMA],
            providers: [
                { provide: HeroService, useValue: mockHeroService },
                { provide: ActivatedRoute, useValue: mockActivateRoute },
                { provide: Location, useValue: mockLocation }
            ]
        });

        fixture = TestBed.createComponent(HeroDetailComponent);

        // move this in before each because in first IT statement for some reason after added other it blocks this break the tests.
        mockHeroService.getHero.and.returnValue(of({ id: 3, name: 'SuperDude', strenght: 100 }));
    });

    it('should render hero name in a h2 tag', () => {
        fixture.detectChanges();

        expect(fixture.nativeElement.querySelector('h2').textContent).toContain('SUPERDUDE');
    });


    // test async code 1
    // this work with both implementation of save method
    it('should call update when save is called', fakeAsync(() => {
        mockHeroService.updateHero.and.returnValue(of({}));
        fixture.detectChanges();

        fixture.componentInstance.save();
        // comes from angular - this will make interval before continue (it can work without params)
        // this is if we know how long to wait
        // tick(250);

        // if we dont know we can use :
        flush();

        expect(mockHeroService.updateHero).toHaveBeenCalled();
    }));


    // test async code 2
    // this works only with second implementation of save method
    it('should call update when save is called example 2', async(() => {
        mockHeroService.updateHero.and.returnValue(of({}));
        fixture.detectChanges();

        fixture.componentInstance.save();

        // this is related to how zone.js working
        fixture.whenStable().then(() => {
            expect(mockHeroService.updateHero).toHaveBeenCalled();
        });

    }));
});