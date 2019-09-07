import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundHomePage } from './sound-home.page';

describe('SoundHomePage', () => {
	let component: SoundHomePage;
	let fixture: ComponentFixture<SoundHomePage>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [SoundHomePage],
			schemas: [CUSTOM_ELEMENTS_SCHEMA],
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SoundHomePage);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
