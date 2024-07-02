import { ComponentFixture, TestBed } from '@angular/core/testing'

import { RoomFilterComponent } from './room-filter.component'
import { NO_ERRORS_SCHEMA } from '@angular/core'

describe('RoomFilterComponent', () => {
  let component: RoomFilterComponent
  let fixture: ComponentFixture<RoomFilterComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomFilterComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents()

    fixture = TestBed.createComponent(RoomFilterComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
