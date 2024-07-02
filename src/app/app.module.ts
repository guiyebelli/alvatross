import { NgModule } from '@angular/core'
import { AppComponent } from './app.component'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app.routes'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { RouterModule } from '@angular/router'
import { provideHttpClient } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule, RouterModule, FormsModule],
  providers: [provideHttpClient(), provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
