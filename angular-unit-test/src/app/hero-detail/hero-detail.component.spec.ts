import { ActivatedRoute } from '@angular/router';
import { TestBed, ComponentFixture } from '@angular/core/testing';
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

    });

    it('should render hero name in a h2 tag', () => {
        mockHeroService.getHero.and.returnValue(of({ id: 3, name: 'SuperDude', strenght: 100 }));
        fixture.detectChanges();

        expect(fixture.nativeElement.querySelector('h2').textContent).toContain('SUPERDUDE');
    });
});