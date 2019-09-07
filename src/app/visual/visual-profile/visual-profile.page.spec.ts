import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualProfilePage } from './visual-profile.page';

describe('VisualProfilePage', () => {
	let component: VisualProfilePage;
	let fixture: ComponentFixture<VisualProfilePage>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [VisualProfilePage],
			schemas: [CUSTOM_ELEMENTS_SCHEMA],
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(VisualProfilePage);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
