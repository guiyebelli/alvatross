import { ComponentFixture, TestBed } from '@angular/core/testing'

import { DialogConfirmComponent } from './dialog-confirm.component'
import { NO_ERRORS_SCHEMA } from '@angular/core'

describe('DialogConfirmComponent', () => {
  let component: DialogConfirmComponent
  let fixture: ComponentFixture<DialogConfirmComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogConfirmComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents()

    fixture = TestBed.createComponent(DialogConfirmComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
