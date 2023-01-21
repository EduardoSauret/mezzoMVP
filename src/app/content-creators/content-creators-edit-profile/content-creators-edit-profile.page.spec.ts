import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentCreatorsEditProfilePage } from './content-creators-edit-profile.page';

describe('ContentCreatorsEditProfilePage', () => {
	let component: ContentCreatorsEditProfilePage;
	let fixture: ComponentFixture<ContentCreatorsEditProfilePage>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ContentCreatorsEditProfilePage],
			schemas: [CUSTOM_ELEMENTS_SCHEMA],
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ContentCreatorsEditProfilePage);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
