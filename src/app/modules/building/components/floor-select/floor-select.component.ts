import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { Floor } from '../../models/floor.model'

@Component({
  selector: 'app-floor-select',
  templateUrl: './floor-select.component.html',
  styleUrl: './floor-select.component.scss',
})
export class FloorSelectComponent implements OnInit {
  @Input() floors!: Floor[]
  @Input() floorSelect!: Floor
  @Output() changeOption: EventEmitter<Floor> = new EventEmitter()

  ngOnInit(): void {
    if (this.floors.length && !this.floorSelect) {
      this.floorSelect = this.floors[0]
      this.changeOption.emit(this.floorSelect)
    }
  }

  onChangeOption(option: Floor): void {
    this.changeOption.emit(option)
  }
}
