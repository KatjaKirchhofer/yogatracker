import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule }  from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';


@NgModule({
    imports: [ MatButtonModule, 
        MatIconModule, 
        MatInputModule, 
        MatFormFieldModule, 
        MatDatepickerModule, 
        MatNativeDateModule, 
        MatCheckboxModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule
    ],

    exports: [ MatButtonModule, 
        MatIconModule, 
        MatInputModule, 
        MatFormFieldModule, 
        MatDatepickerModule, 
        MatNativeDateModule, 
        MatCheckboxModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule
    ]
})

export class MaterialModule {
 
}

