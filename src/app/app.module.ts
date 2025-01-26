import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';
import { DemoNgZorroAntdModule } from './DemoNgZorroAntdModule';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { LoginOutline, UserOutline } from '@ant-design/icons-angular/icons';
import { RegisterComponent } from './auth/components/register/register.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { LoginComponent } from './auth/components/login/login.component';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzCardModule } from 'ng-zorro-antd/card';
//import { NzInputGroupModule } from 'ng-zorro-antd/input';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    DemoNgZorroAntdModule,
    ReactiveFormsModule,
    NzIconModule,
    NzLayoutModule,
    RegisterComponent,
    LoginComponent,
    NzInputModule,
    NzButtonModule,
    NzAvatarModule,
    NzCardModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  
  providers: [
    //provideClientHydration(),
    { provide: NZ_I18N, useValue: en_US },
   //provideAnimationsAsync(),
    provideHttpClient(),
    {
      provide: NZ_ICONS,
      useValue: [LoginOutline, UserOutline],  // Add icons you want to use
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
