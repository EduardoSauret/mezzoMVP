import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualHomePage } from './visual-home.page';

describe('VisualHomePage', () => {
	let component: VisualHomePage;
	let fixture: ComponentFixture<VisualHomePage>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [VisualHomePage],
			schemas: [CUSTOM_ELEMENTS_SCHEMA],
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(VisualHomePage);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
