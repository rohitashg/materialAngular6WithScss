import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatNativeDateModule} from '@angular/material';




@NgModule({    
    imports: [MatNativeDateModule,MatGridListModule,MatSnackBarModule,MatDialogModule,MatProgressBarModule,MatProgressSpinnerModule,MatIconModule,MatButtonToggleModule,MatButtonModule,MatSidenavModule,MatMenuModule,MatSlideToggleModule,MatSliderModule,MatSelectModule,MatRadioModule,MatDatepickerModule,MatInputModule,MatToolbarModule,MatFormFieldModule,MatCheckboxModule],
    exports: [MatNativeDateModule,MatGridListModule,MatSnackBarModule,MatDialogModule,MatProgressBarModule,MatProgressSpinnerModule,MatIconModule,MatButtonToggleModule,MatButtonModule,MatSidenavModule,MatMenuModule,MatSlideToggleModule,MatSliderModule,MatSelectModule,MatRadioModule,MatDatepickerModule,MatInputModule,MatToolbarModule,MatFormFieldModule,MatCheckboxModule]
})
export class MaterialModule{

}