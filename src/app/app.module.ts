import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RunrulesComponent } from './runrules/runrules.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { NgJsonEditorModule } from 'ang-jsoneditor' ;
import { ToastrModule } from 'ngx-toastr';
import { NgxUiLoaderModule } from "ngx-ui-loader";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RulesService } from './rules.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    RunrulesComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgJsonEditorModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    NgxUiLoaderModule,
    HttpClientModule,
  ],
  providers: [RulesService,
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
