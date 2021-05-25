import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetArchivesComponent } from './get-archives.component';

describe('GetArchivesComponent', () => {
  let component: GetArchivesComponent;
  let fixture: ComponentFixture<GetArchivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetArchivesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetArchivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
