import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundProfileVideoPage } from './sound-profile-video.page';

describe('SoundProfileVideoPage', () => {
	let component: SoundProfileVideoPage;
	let fixture: ComponentFixture<SoundProfileVideoPage>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [SoundProfileVideoPage],
			schemas: [CUSTOM_ELEMENTS_SCHEMA],
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SoundProfileVideoPage);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
