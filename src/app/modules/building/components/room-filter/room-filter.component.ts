import { AfterViewInit, Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core'
import { debounceTime, distinctUntilChanged, fromEvent } from 'rxjs'

@Component({
  selector: 'app-room-filter',
  templateUrl: './room-filter.component.html',
  styleUrl: './room-filter.component.scss',
})
export class RoomFilterComponent implements AfterViewInit {
  @ViewChild('capacityInput')
  capacityInput!: ElementRef<HTMLInputElement>
  @ViewChild('occupationInput')
  occupationInput!: ElementRef<HTMLInputElement>

  @Output() capacityValueChange: EventEmitter<number> = new EventEmitter()
  @Output() occupationValueChange: EventEmitter<number> = new EventEmitter()

  ngAfterViewInit(): void {
    fromEvent<Event>(this.capacityInput.nativeElement, 'keyup')
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe((value) => {
        this.capacityValueChange.emit(Number(this.capacityInput.nativeElement.value || null))
      })
    fromEvent<Event>(this.occupationInput.nativeElement, 'keyup')
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe((value) => {
        this.occupationValueChange.emit(Number(this.occupationInput.nativeElement.value || null))
      })
  }
}
