import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { UserImgComponent } from './components/users/user-img/user-img.component';
import { UserInfoComponent } from './components/users/user-info/user-info.component';
import { HighlightDirective } from './directives/highlight.directive';
import { UntilDirective } from './directives/until.directive';
import { PipeDemoComponent } from './components/pipe-demo/pipe-demo.component';
import { FilterPipe } from './pipes/filter.pipe';
import { ObservableDemoComponent } from './components/observable-demo/observable-demo.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';
import { LoggerInterceptor } from './services/logger.interceptor';
import { ResponseInterceptor } from './services/response.interceptor';
import { CounterComponent } from './components/counter/counter.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store/reducers/counter.reducer';
import { resultReducer } from './store/reducers/result.reducer';
@NgModule({
  declarations: [         // Components, Directives, Pipes
    AppComponent, UsersComponent, UserImgComponent, UserInfoComponent, HighlightDirective, UntilDirective, PipeDemoComponent, FilterPipe, ObservableDemoComponent, HeaderComponent, CounterComponent
  ],
  imports: [              // Modules - built-in and Custom
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES),
    StoreModule.forRoot({ctr : counterReducer, res : resultReducer})
  ],
  providers: [{
    provide : HTTP_INTERCEPTORS,
    // useValue : [new LoggerInterceptor(), new ResponseInterceptor()],
    useClass : LoggerInterceptor,
    multi : true
  },{
    provide : HTTP_INTERCEPTORS,
    useClass : ResponseInterceptor,
    multi : true
  }],          // Services
  bootstrap: [AppComponent]
})
export class AppModule { }
