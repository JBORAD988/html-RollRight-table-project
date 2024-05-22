import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import * as DataTables from 'datatables.net';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RoleRightsComponent } from './role-rights/role-rights.component';
import {TreeGridAllModule, TreeGridModule} from "@syncfusion/ej2-angular-treegrid";
import {TabAllModule} from "@syncfusion/ej2-angular-navigations";
import {FilterService, GridAllModule, GroupService, PageService, SortService} from "@syncfusion/ej2-angular-grids";
import {ButtonAllModule, CheckBoxModule} from "@syncfusion/ej2-angular-buttons";
import {DropDownListAllModule} from "@syncfusion/ej2-angular-dropdowns";


function CategoryService() {

}

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    SidebarComponent,
    RoleRightsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TreeGridModule,
    TreeGridAllModule,
    GridAllModule,
    ButtonAllModule,
    CheckBoxModule,
    DropDownListAllModule,
    TabAllModule


  ],
  providers: [PageService, SortService, FilterService, GroupService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
