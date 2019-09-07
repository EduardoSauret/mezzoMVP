import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualUploadPage } from './visual-upload.page';

describe('VisualUploadPage', () => {
	let component: VisualUploadPage;
	let fixture: ComponentFixture<VisualUploadPage>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [VisualUploadPage],
			schemas: [CUSTOM_ELEMENTS_SCHEMA],
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(VisualUploadPage);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
