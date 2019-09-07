import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualTabsPage } from './visual-tabs.page';

describe('VisualTabsPage', () => {
	let component: VisualTabsPage;
	let fixture: ComponentFixture<VisualTabsPage>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [VisualTabsPage],
			schemas: [CUSTOM_ELEMENTS_SCHEMA],
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(VisualTabsPage);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
