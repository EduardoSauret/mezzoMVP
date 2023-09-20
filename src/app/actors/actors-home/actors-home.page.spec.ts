import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorsHomePage } from './actors-home.page';

describe('ActorsHomePage', () => {
	let component: ActorsHomePage;
	let fixture: ComponentFixture<ActorsHomePage>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ActorsHomePage],
			schemas: [CUSTOM_ELEMENTS_SCHEMA],
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ActorsHomePage);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
