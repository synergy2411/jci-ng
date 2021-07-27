import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { UserImgComponent } from './components/users/user-img/user-img.component';
import { UserInfoComponent } from './components/users/user-info/user-info.component';
import { HighlightDirective } from './directives/highlight.directive';
import { UntilDirective } from './directives/until.directive';
import { PipeDemoComponent } from './components/pipe-demo/pipe-demo.component';
import { FilterPipe } from './pipes/filter.pipe';
import { ObservableDemoComponent } from './components/observable-demo/observable-demo.component';

@NgModule({
  declarations: [         // Components, Directives, Pipes
    AppComponent, UsersComponent, UserImgComponent, UserInfoComponent, HighlightDirective, UntilDirective, PipeDemoComponent, FilterPipe, ObservableDemoComponent
  ],
  imports: [              // Modules - built-in and Custom
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],          // Services
  bootstrap: [AppComponent]
})
export class AppModule { }
