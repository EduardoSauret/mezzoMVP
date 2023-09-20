import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorsProfilePage } from './actors-profile.page';

describe('ActorsProfilePage', () => {
	let component: ActorsProfilePage;
	let fixture: ComponentFixture<ActorsProfilePage>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ActorsProfilePage],
			schemas: [CUSTOM_ELEMENTS_SCHEMA],
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ActorsProfilePage);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
