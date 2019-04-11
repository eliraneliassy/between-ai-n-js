import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageClassfierUploadComponent } from './image-classfier-upload.component';

describe('ImageClassfierUploadComponent', () => {
  let component: ImageClassfierUploadComponent;
  let fixture: ComponentFixture<ImageClassfierUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageClassfierUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageClassfierUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
