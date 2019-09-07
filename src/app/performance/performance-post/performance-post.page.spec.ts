import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformancePostPage } from './performance-post.page';

describe('PerformancePostPage', () => {
	let component: PerformancePostPage;
	let fixture: ComponentFixture<PerformancePostPage>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [PerformancePostPage],
			schemas: [CUSTOM_ELEMENTS_SCHEMA],
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PerformancePostPage);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
