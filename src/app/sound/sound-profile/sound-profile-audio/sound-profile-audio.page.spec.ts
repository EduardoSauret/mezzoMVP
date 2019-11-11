import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundProfileAudioPage } from './sound-profile-audio.page';

describe('SoundProfileAudioPage', () => {
	let component: SoundProfileAudioPage;
	let fixture: ComponentFixture<SoundProfileAudioPage>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [SoundProfileAudioPage],
			schemas: [CUSTOM_ELEMENTS_SCHEMA],
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SoundProfileAudioPage);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
