import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentCreatorsUploadPage } from './content-creators-upload.page';

describe('ContentCreatorsUploadPage', () => {
	let component: ContentCreatorsUploadPage;
	let fixture: ComponentFixture<ContentCreatorsUploadPage>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ContentCreatorsUploadPage],
			schemas: [CUSTOM_ELEMENTS_SCHEMA],
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ContentCreatorsUploadPage);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
