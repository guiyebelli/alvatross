import { ComponentFixture, TestBed } from '@angular/core/testing'

import { BlockSpinnerComponent } from './block-spinner.component'
import { NO_ERRORS_SCHEMA } from '@angular/core'

describe('BlockSpinnerComponent', () => {
  let component: BlockSpinnerComponent
  let fixture: ComponentFixture<BlockSpinnerComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlockSpinnerComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents()

    fixture = TestBed.createComponent(BlockSpinnerComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
