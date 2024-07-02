import { ComponentFixture, TestBed } from '@angular/core/testing'

import { FloorSelectComponent } from './floor-select.component'
import { NO_ERRORS_SCHEMA } from '@angular/core'

describe('FloorSelectComponent', () => {
  let component: FloorSelectComponent
  let fixture: ComponentFixture<FloorSelectComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FloorSelectComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents()

    fixture = TestBed.createComponent(FloorSelectComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
