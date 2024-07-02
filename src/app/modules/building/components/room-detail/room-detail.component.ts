import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core'
import { Room } from '../../models/room.model'
import { DialogConfirmComponent } from '../dialog-confirm/dialog-confirm.component'
import { MatDialog } from '@angular/material/dialog'
import { MatSnackBar } from '@angular/material/snack-bar'

@Component({
  selector: 'app-room-detail',
  templateUrl: './room-detail.component.html',
  styleUrl: './room-detail.component.scss',
})
export class RoomDetailComponent {
  @Input() room!: Room
  @Output() delete: EventEmitter<number> = new EventEmitter()

  constructor(
    public dialog: MatDialog,
    private snackbar: MatSnackBar
  ) {}

  editRoom(capacity: string, occupation: string): void {
    this.dialog
      .open(DialogConfirmComponent, {
        data: { message: '¿Esta seguro que desea editar la sala?' },
      })
      .beforeClosed()
      .subscribe((response) => {
        if (response) {
          this.room.capacity = Number(capacity)
          this.room.occupation = Number(occupation)
          this.snackbar.open('Sala editada con exito!', '', {
            duration: 4000,
            panelClass: 'SUCCESS',
          })
        }
      })
  }
  deleteRoom(): void {
    this.delete.emit(this.room.id)
  }
}
