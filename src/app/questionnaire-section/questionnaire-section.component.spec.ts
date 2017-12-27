import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionnaireSectionComponent } from './questionnaire-section.component';

describe('QuestionnaireSectionComponent', () => {
  let component: QuestionnaireSectionComponent;
  let fixture: ComponentFixture<QuestionnaireSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionnaireSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionnaireSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
