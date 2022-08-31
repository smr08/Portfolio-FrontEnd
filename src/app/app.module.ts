import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BarraSuperiorComponent } from './components/header/barra-superior/barra-superior.component';
import { BannerComponent } from './components/header/banner/banner.component';

//modulo personalizado
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { NgCircleProgressModule } from 'ng-circle-progress';

import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { HyssComponent } from './components/hyss/hyss.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FooterComponent } from './components/footer/footer.component';

import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

import { FormsModule } from '@angular/forms';
import { interceptorProvider } from './service/interceptor-service';
import { ReactiveFormsModule } from '@angular/forms';
import { FotoComponent } from './components/foto/foto.component';
import { AcercaDeMiComponent } from './components/acerca-de-mi/acerca-de-mi.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BarraSuperiorComponent,
    BannerComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    HyssComponent,
    ProyectosComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    FotoComponent,
    AcercaDeMiComponent,
  
    
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimeNgModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
