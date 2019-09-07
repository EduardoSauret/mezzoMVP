import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundTabsPage } from './sound-tabs.page';

describe('SoundTabsPage', () => {
	let component: SoundTabsPage;
	let fixture: ComponentFixture<SoundTabsPage>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [SoundTabsPage],
			schemas: [CUSTOM_ELEMENTS_SCHEMA],
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SoundTabsPage);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
