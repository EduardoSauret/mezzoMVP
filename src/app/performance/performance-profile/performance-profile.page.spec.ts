import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceProfilePage } from './performance-profile.page';

describe('PerformanceProfilePage', () => {
	let component: PerformanceProfilePage;
	let fixture: ComponentFixture<PerformanceProfilePage>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [PerformanceProfilePage],
			schemas: [CUSTOM_ELEMENTS_SCHEMA],
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PerformanceProfilePage);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
