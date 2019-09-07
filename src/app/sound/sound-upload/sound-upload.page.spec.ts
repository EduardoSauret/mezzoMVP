import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundUploadPage } from './sound-upload.page';

describe('SoundUploadPage', () => {
	let component: SoundUploadPage;
	let fixture: ComponentFixture<SoundUploadPage>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [SoundUploadPage],
			schemas: [CUSTOM_ELEMENTS_SCHEMA],
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SoundUploadPage);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
