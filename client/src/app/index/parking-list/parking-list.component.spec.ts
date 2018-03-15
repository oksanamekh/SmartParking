import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ParkingsComponent} from './parking-list.component';

describe('ParkingsComponent', () => {
    let component: ParkingsComponent;
    let fixture: ComponentFixture<ParkingsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ParkingsComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ParkingsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
