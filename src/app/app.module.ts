import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { UserService } from './user.service';
import { FileUploadService } from './file-upload.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [UserService, FileUploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
