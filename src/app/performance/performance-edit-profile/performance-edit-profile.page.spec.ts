import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceEditProfilePage } from './performance-edit-profile.page';

describe('PerformanceEditProfilePage', () => {
	let component: PerformanceEditProfilePage;
	let fixture: ComponentFixture<PerformanceEditProfilePage>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [PerformanceEditProfilePage],
			schemas: [CUSTOM_ELEMENTS_SCHEMA],
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PerformanceEditProfilePage);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
