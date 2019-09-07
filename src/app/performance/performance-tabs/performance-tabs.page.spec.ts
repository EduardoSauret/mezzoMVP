import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceTabsPage } from './performance-tabs.page';

describe('PerformanceTabsPage', () => {
	let component: PerformanceTabsPage;
	let fixture: ComponentFixture<PerformanceTabsPage>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [PerformanceTabsPage],
			schemas: [CUSTOM_ELEMENTS_SCHEMA],
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PerformanceTabsPage);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
