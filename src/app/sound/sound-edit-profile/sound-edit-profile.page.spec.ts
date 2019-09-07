import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundEditProfilePage } from './sound-edit-profile.page';

describe('SoundEditProfilePage', () => {
	let component: SoundEditProfilePage;
	let fixture: ComponentFixture<SoundEditProfilePage>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [SoundEditProfilePage],
			schemas: [CUSTOM_ELEMENTS_SCHEMA],
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SoundEditProfilePage);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
