import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceHomePage } from './performance-home.page';

describe('PerformanceHomePage', () => {
	let component: PerformanceHomePage;
	let fixture: ComponentFixture<PerformanceHomePage>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [PerformanceHomePage],
			schemas: [CUSTOM_ELEMENTS_SCHEMA],
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PerformanceHomePage);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
