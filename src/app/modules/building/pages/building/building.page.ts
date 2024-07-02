import { Component, OnInit } from '@angular/core'
import { BuildingService } from '../../services/building.service'
import { Observable, catchError, of, tap } from 'rxjs'
import { Floor } from '../../models/floor.model'
import { MatSnackBar } from '@angular/material/snack-bar'

@Component({
  selector: 'app-building',
  templateUrl: './building.page.html',
  styleUrl: './building.page.scss',
})
export class BuildingPage implements OnInit {
  floors$!: Observable<Floor[]>
  floorSelect!: Floor
  capacityValueFilter?: number
  occupationValueFilter?: number

  constructor(
    private buildingService: BuildingService,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.floors$ = this.buildingService.getFloors().pipe(
      tap((floors) => {
        this.floorSelect = floors[0]
      }),
      catchError(() => {
        this.snackbar.open('Ups! Se produjo un error al intentar obtener las salas', '', {
          duration: 4000,
          panelClass: 'ERROR',
        })
        return of([])
      })
    )
  }

  changeFloor(newFloor: Floor) {
    this.floorSelect = newFloor
  }

  changeCapacityValue(value: number) {
    this.capacityValueFilter = value
  }

  changeOccupationValue(value: number) {
    this.occupationValueFilter = value
  }
}
