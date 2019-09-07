import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualPostPage } from './visual-post.page';

describe('VisualPostPage', () => {
	let component: VisualPostPage;
	let fixture: ComponentFixture<VisualPostPage>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [VisualPostPage],
			schemas: [CUSTOM_ELEMENTS_SCHEMA],
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(VisualPostPage);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
