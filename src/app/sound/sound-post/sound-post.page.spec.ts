import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundPostPage } from './sound-post.page';

describe('SoundPostPage', () => {
	let component: SoundPostPage;
	let fixture: ComponentFixture<SoundPostPage>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [SoundPostPage],
			schemas: [CUSTOM_ELEMENTS_SCHEMA],
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SoundPostPage);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
