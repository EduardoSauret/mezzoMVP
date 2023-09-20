import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentCreatorsProfilePage } from './content-creators-profile.page';

describe('ContentCreatorsProfilePage', () => {
	let component: ContentCreatorsProfilePage;
	let fixture: ComponentFixture<ContentCreatorsProfilePage>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ContentCreatorsProfilePage],
			schemas: [CUSTOM_ELEMENTS_SCHEMA],
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ContentCreatorsProfilePage);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
