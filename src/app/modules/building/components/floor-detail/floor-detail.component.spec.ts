import { ComponentFixture, TestBed } from '@angular/core/testing'

import { FloorDetailComponent } from './floor-detail.component'
import { NO_ERRORS_SCHEMA } from '@angular/core'

describe('FloorDetailComponent', () => {
  let component: FloorDetailComponent
  let fixture: ComponentFixture<FloorDetailComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FloorDetailComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents()

    fixture = TestBed.createComponent(FloorDetailComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
