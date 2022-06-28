import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MaterialModule} from './material/material.module';
import {MainComponent} from './pages/main/main.component';
import {HeaderComponent} from './_shared/header/header.component';
import {FooterComponent} from './_shared/footer/footer.component';
import {InicioComponent} from './pages/inicio/inicio.component';
import {ToastrModule} from 'ngx-toastr';
import {BasicoDirective} from './_directivas/basico.directive';
import {BlockCopyPasteDirective} from './_directivas/blockcopypaste.directive';
import {RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module} from 'ng-recaptcha';
import {JwtModule} from '@auth0/angular-jwt';
import {environment} from 'src/environments/environment';
import {TOKEN_NAME} from './_shared/constantes';
import {ServerErrorsInterceptor} from './_shared/server-errors.interceptor';
import {ExpirationDialogComponent} from './pages/main/expiration-dialog/expiration-dialog.component';
import {NgIdleKeepaliveModule} from '@ng-idle/keepalive';
import {NgxGoogleAnalyticsModule} from 'ngx-google-analytics';
import {NgFallimgModule} from 'ng-fallimg';
import {QuillModule} from 'ngx-quill';
import {MayusculasDirective} from './_directivas/mayusculas.directive';
import {FechaDirective} from './_directivas/fecha.directive';
import {CelularDirective} from './_directivas/celular.directive';
import {CorreoDirective} from './_directivas/correo.directive';
import {NgxPrintModule} from 'ngx-print';
import {NgxMatIntlTelInputModule} from 'ngx-mat-intl-tel-input';
import {NumeroDirective} from './_directivas/numero.directive';
import {LetrasDirective} from './_directivas/letras.directive';


export function tokenGetter() {
  return sessionStorage.getItem(TOKEN_NAME);
}


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    BasicoDirective,
    BlockCopyPasteDirective,
    ExpirationDialogComponent,
    MayusculasDirective,
    FechaDirective,
    CelularDirective,
    CorreoDirective,
    NumeroDirective,
    LetrasDirective,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FlexLayoutModule,
    NgxPrintModule,
    RecaptchaV3Module,
    NgxMatIntlTelInputModule,
    JwtModule.forRoot({
      config: {
        tokenGetter,
        allowedDomains: [environment.ALLOWD_HOST],
        disallowedRoutes: [],
      }
    }),
    NgIdleKeepaliveModule.forRoot(),
    ToastrModule.forRoot(),
    NgxGoogleAnalyticsModule.forRoot(environment.GoogleAnalitycs),
    NgFallimgModule.forRoot({
      default: '/assets/images/default.jpg'
    }),
    QuillModule.forRoot(),
    NgxPrintModule
  ],
  providers: [
    {provide: RECAPTCHA_V3_SITE_KEY, useValue: `${environment.apiGoogle}`},
    {provide: HTTP_INTERCEPTORS, useClass: ServerErrorsInterceptor, multi: true}

  ],
  bootstrap: [AppComponent],
  entryComponents: [

  ]
})
export class AppModule {
}
