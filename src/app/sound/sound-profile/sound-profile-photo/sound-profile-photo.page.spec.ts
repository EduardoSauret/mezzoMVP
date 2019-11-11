import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundProfilePhotoPage } from './sound-profile-photo.page';

describe('SoundProfilePhotoPage', () => {
	let component: SoundProfilePhotoPage;
	let fixture: ComponentFixture<SoundProfilePhotoPage>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [SoundProfilePhotoPage],
			schemas: [CUSTOM_ELEMENTS_SCHEMA],
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SoundProfilePhotoPage);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
