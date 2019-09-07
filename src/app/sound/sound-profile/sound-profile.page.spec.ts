import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundProfilePage } from './sound-profile.page';

describe('SoundProfilePage', () => {
	let component: SoundProfilePage;
	let fixture: ComponentFixture<SoundProfilePage>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [SoundProfilePage],
			schemas: [CUSTOM_ELEMENTS_SCHEMA],
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SoundProfilePage);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
