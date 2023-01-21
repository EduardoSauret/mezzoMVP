import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentCreatorsHomePage } from './content-creators-home.page';

describe('ContentCreatorsHomePage', () => {
	let component: ContentCreatorsHomePage;
	let fixture: ComponentFixture<ContentCreatorsHomePage>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ContentCreatorsHomePage],
			schemas: [CUSTOM_ELEMENTS_SCHEMA],
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ContentCreatorsHomePage);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
