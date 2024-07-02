import { ComponentFixture, TestBed } from '@angular/core/testing'

import { RoomDetailComponent } from './room-detail.component'
import { NO_ERRORS_SCHEMA } from '@angular/core'

describe('RoomDetailComponent', () => {
  let component: RoomDetailComponent
  let fixture: ComponentFixture<RoomDetailComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomDetailComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents()

    fixture = TestBed.createComponent(RoomDetailComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
