import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule } from '@angular/material';
import {MatListModule} from '@angular/material/list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule, MatSnackBar} from '@angular/material/snack-bar';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MatButtonModule,
        MatListModule,
        MatInputModule,
        MatCardModule,
        MatProgressSpinnerModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatSidenavModule,
        MatSnackBarModule,
    ],
    exports: [
        MatButtonModule,
        MatListModule,
        MatInputModule,
        MatCardModule,
        MatProgressSpinnerModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatSidenavModule,
        MatSnackBarModule
    ],
    providers: [MatSnackBar],
})
export class MaterialModule {}
