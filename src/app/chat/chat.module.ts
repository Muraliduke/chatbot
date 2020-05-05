import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatDialogComponent } from './chat-dialog/chat-dialog.component';

import { FormsModule} from '@angular/forms';
import {ChatService} from './chat.service';
import { NbChatModule , NbAccordionModule, NbAlertModule, NbCardModule} from '@nebular/theme';
import {MatChipsModule} from '@angular/material/chips';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { StatsComponent } from './chat-dialog/components/stats/stats.component';
import { ContactComponent } from './chat-dialog/components/contact/contact.component';
import { CovidComponent } from './chat-dialog/components/covid/covid.component';
import { CountrywiseComponent } from './chat-dialog/components/countrywise/countrywise.component';

const NebularModules = [NbChatModule , NbAccordionModule, NbAlertModule, NbCardModule, MatSnackBarModule];
const AngularMatModules = [MatChipsModule, MatTableModule, MatCardModule];

@NgModule({
  declarations: [ChatDialogComponent, StatsComponent, ContactComponent, CovidComponent, CountrywiseComponent],
  imports: [
    CommonModule,
    FormsModule,
    ...NebularModules,
    ...AngularMatModules
  ],
  exports: [ ChatDialogComponent],
  providers: [ChatService]
})
export class ChatModule { }
