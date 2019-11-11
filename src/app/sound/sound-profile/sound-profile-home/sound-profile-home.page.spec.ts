import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundProfileHomePage } from './sound-profile-home.page';

describe('SoundProfileHomePage', () => {
	let component: SoundProfileHomePage;
	let fixture: ComponentFixture<SoundProfileHomePage>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [SoundProfileHomePage],
			schemas: [CUSTOM_ELEMENTS_SCHEMA],
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SoundProfileHomePage);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
