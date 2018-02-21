import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DirectiveComponent} from './directive.component';
import {MatCardModule} from '@angular/material';
import {NgxLocalStorageModule} from '../../ngx-localstorage/ngx-localstorage.module';

describe('DirectiveComponent', () => {
  let component: DirectiveComponent;
  let fixture: ComponentFixture<DirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DirectiveComponent],
      imports: [MatCardModule, NgxLocalStorageModule.forRoot()]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
