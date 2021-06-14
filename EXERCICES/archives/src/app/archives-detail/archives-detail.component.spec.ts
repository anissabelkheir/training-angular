import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivesDetailComponent } from './archives-detail.component';

describe('ArchivesDetailComponent', () => {
  let component: ArchivesDetailComponent;
  let fixture: ComponentFixture<ArchivesDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchivesDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchivesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
