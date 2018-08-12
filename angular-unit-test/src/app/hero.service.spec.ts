import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { HeroService } from './hero.service';
import { MessageService } from './message.service';

describe('HeroService', () => {

    let mockMessageService;
    let httpTestingController: HttpTestingController;
    let service: HeroService;

    beforeEach(() => {
        mockMessageService = jasmine.createSpyObj(['add']);

        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                HeroService,
                { provide: MessageService, useValue: mockMessageService },
            ]
        });

        // this approach with getting the service lice this can be used instead inject method used in the first test
        // httpTestingController = TestBed.get(httpTestingController);
        // service = TestBed.get(HeroService);
    });

    describe('getHero', () => {

        it('should call get with the correct URL',
            inject([HeroService, HttpTestingController], (service: HeroService, controller: HttpTestingController) => {

                service.getHero(4).subscribe();
                // service.getHero(3).subscribe();

                const req = controller.expectOne('api/heroes/4');
                req.flush({ id: 4, name: 'SuperDude', strength: 100 });

                // with this we verifying what we expect in case if we have something like line 35 (comment in line)
                controller.verify();
            }));
    })

});