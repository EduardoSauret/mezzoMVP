import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentCreatorsTabsPage } from './content-creators-tabs.page';

describe('ContentCreatorsTabsPage', () => {
	let component: ContentCreatorsTabsPage;
	let fixture: ComponentFixture<ContentCreatorsTabsPage>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ContentCreatorsTabsPage],
			schemas: [CUSTOM_ELEMENTS_SCHEMA],
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ContentCreatorsTabsPage);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
