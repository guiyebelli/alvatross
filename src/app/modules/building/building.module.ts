import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { routes } from './building-routing.module'
import { FloorDetailComponent } from './components/floor-detail/floor-detail.component'
import { BuildingPage } from './pages/building/building.page'
import { FormsModule } from '@angular/forms'
import { FloorSelectComponent } from './components/floor-select/floor-select.component'
import { MatSelectModule } from '@angular/material/select'
import { RoomDetailComponent } from './components/room-detail/room-detail.component'
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'
import { DialogConfirmComponent } from './components/dialog-confirm/dialog-confirm.component'
import { MatDialogModule } from '@angular/material/dialog'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { RoomFilterComponent } from './components/room-filter/room-filter.component'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { BlockSpinnerComponent } from './components/block-spinner/block-spinner.component'

const COMPONENTS = [
  BuildingPage,
  FloorDetailComponent,
  FloorSelectComponent,
  RoomDetailComponent,
  DialogConfirmComponent,
  RoomFilterComponent,
  BlockSpinnerComponent,
]

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
  ],
})
export class BuildingModule {}
