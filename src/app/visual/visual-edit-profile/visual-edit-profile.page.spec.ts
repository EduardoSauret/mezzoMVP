import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualEditProfilePage } from './visual-edit-profile.page';

describe('VisualEditProfilePage', () => {
	let component: VisualEditProfilePage;
	let fixture: ComponentFixture<VisualEditProfilePage>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [VisualEditProfilePage],
			schemas: [CUSTOM_ELEMENTS_SCHEMA],
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(VisualEditProfilePage);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
