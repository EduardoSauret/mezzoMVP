import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioListComponent } from './audio-list.component';

describe('AudioListComponent', () => {
	let component: AudioListComponent;
	let fixture: ComponentFixture<AudioListComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [AudioListComponent],
			schemas: [CUSTOM_ELEMENTS_SCHEMA],
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(AudioListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
