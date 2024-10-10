import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileClaimComponent } from './file-claim.component';

describe('FileClaimComponent', () => {
  let component: FileClaimComponent;
  let fixture: ComponentFixture<FileClaimComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FileClaimComponent]
    });
    fixture = TestBed.createComponent(FileClaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
