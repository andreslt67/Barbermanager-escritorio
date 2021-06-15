import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InicioPeluqueriaComponent } from './inicio-peluqueria/inicio-peluqueria.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { PrincipalPeluqueriaComponent } from './principal-peluqueria/principal-peluqueria.component';
import { HttpInterceptorService } from './servicios/http-interceptor.service';
import { WinPeluqueriaComponent } from './win-peluqueria/win-peluqueria.component';
import { WinPeluqueroComponent } from './win-peluquero/win-peluquero.component';
import { NavPeluqueriaComponent } from './nav-peluqueria/nav-peluqueria.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { NavPeluqueroComponent } from './nav-peluquero/nav-peluquero.component';
import { DivPeluExpansionComponent } from './div-pelu-expansion/div-pelu-expansion.component';
import { PeluqueriaInfoComponent } from './peluqueria-info/peluqueria-info.component';
import { PeluqueriaPelusComponent } from './peluqueria-pelus/peluqueria-pelus.component';
import { WinOpcionInsertarComponent } from './win-opcion-insertar/win-opcion-insertar.component';
import { WinAuntenticaPeluComponent } from './win-auntentica-pelu/win-auntentica-pelu.component';
import { PeluqueroFotosComponent } from './peluquero-fotos/peluquero-fotos.component';
import { PeluqueroResenasComponent } from './peluquero-resenas/peluquero-resenas.component';
import { PeluqueroInfoComponent } from './peluquero-info/peluquero-info.component';
import { PeluqueroCitasComponent } from './peluquero-citas/peluquero-citas.component';
import { WinSubirFotoComponent } from './win-subir-foto/win-subir-foto.component';
import { DialogBorrarImgComponent } from './dialog-borrar-img/dialog-borrar-img.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioPeluqueriaComponent,
    PrincipalPeluqueriaComponent,
    WinPeluqueriaComponent,
    WinPeluqueroComponent,
    NavPeluqueriaComponent,
    NavPeluqueroComponent,
    DivPeluExpansionComponent,
    PeluqueriaInfoComponent,
    PeluqueriaPelusComponent,
    WinOpcionInsertarComponent,
    WinAuntenticaPeluComponent,
    PeluqueroFotosComponent,
    PeluqueroResenasComponent,
    PeluqueroInfoComponent,
    PeluqueroCitasComponent,
    WinSubirFotoComponent,
    DialogBorrarImgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatMenuModule,
    MatTabsModule,
    MatCardModule,
    MatDividerModule,
    MatSidenavModule,
    MatListModule,
    MatSnackBarModule,
    FormsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatExpansionModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true },
    MatDatepickerModule,
    MatNativeDateModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
