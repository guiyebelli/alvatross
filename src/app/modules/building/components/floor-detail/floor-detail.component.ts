import { Component, Input, OnChanges, SimpleChanges } from '@angular/core'
import { Floor } from '../../models/floor.model'
import { MatDialog } from '@angular/material/dialog'
import { DialogConfirmComponent } from '../dialog-confirm/dialog-confirm.component'
import { MatSnackBar } from '@angular/material/snack-bar'
import { Room } from '../../models/room.model'

@Component({
  selector: 'app-floor-detail',
  templateUrl: './floor-detail.component.html',
  styleUrl: './floor-detail.component.scss',
})
export class FloorDetailComponent implements OnChanges {
  @Input() floor!: Floor
  @Input() capacityFilter?: number
  @Input() occupationFilter?: number
  roomsFilter: Room[] = []

  constructor(
    public dialog: MatDialog,
    private snackbar: MatSnackBar
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.updateRooms()
  }

  addFloor(): void {
    const id = this.floor.rooms.length + 1
    this.floor.rooms.push({
      id,
      name: 'Sala ' + id + ' planta ' + this.floor.id,
      capacity: 0,
      occupation: 0,
    })
  }

  deleteRoom(idRoom: number): void {
    this.dialog
      .open(DialogConfirmComponent, {
        data: { message: '¿Esta seguro que desea eliminar la sala?' },
      })
      .beforeClosed()
      .subscribe((response) => {
        if (response) {
          this.floor.rooms = this.floor.rooms.filter((f) => f.id !== idRoom)
          this.updateRooms()
          this.snackbar.open('Sala eliminada con exito!', '', {
            duration: 4000,
            panelClass: 'SUCCESS',
          })
        }
      })
  }

  private updateRooms(): void {
    this.roomsFilter = this.floor.rooms
    if (this.capacityFilter) {
      this.roomsFilter = this.roomsFilter.filter((r) => r.capacity === this.capacityFilter)
    }
    if (this.occupationFilter) {
      this.roomsFilter = this.roomsFilter.filter((r) => r.occupation === this.occupationFilter)
    }
  }
}
