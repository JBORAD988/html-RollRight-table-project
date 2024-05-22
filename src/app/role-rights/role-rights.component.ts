import {Component, OnInit, ViewChild} from '@angular/core';
import { sampleData, sampleData2 } from './data';
import { ActionEventArgs, RowDataBoundEventArgs } from '@syncfusion/ej2-grids';
import { GridComponent } from '@syncfusion/ej2-angular-grids';
import { TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';
@Component({
  selector: 'app-role-rights',
  templateUrl: './role-rights.component.html',
  styleUrls: ['./role-rights.component.scss']
})
export class RoleRightsComponent implements OnInit {

  fieldData: any;
  data!: any[];
  dynamicColumns: any[] = [];
  editSettings: any;
  toolbar!: String[];
   lines: any;



  @ViewChild('treegrid', { static: true }) treegrid!: TreeGridComponent;

  @ViewChild('grid', { static: false }) grid!: GridComponent;
  selectedColumnName: any;
  selectedColumnValue: any;
  constructor() { }


  ngOnInit(): void {
    this.lines = 'Vertical';
    this.data = sampleData
    this.fieldData = sampleData2
    this.data.forEach(item => {
      item.subtasksVisible = true;
    });

    this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' };
    this.toolbar = ['Update', 'Cancel'];


  }

  onCheckboxChange(event: any, data: any): void {
    const checked = event.target.checked;
    data.View = checked;
    this.toggleAllChildCheckboxes(data, checked);
    this.updateParentCheckboxState(data);
  }


  toggleAllChildCheckboxes(data: any, checked: boolean): void {
    debugger
    if (data.subtasks && data.subtasks.length > 0) {
      // Update state of all child checkboxes
      data.subtasks.forEach((child:any) => {
        child.View = checked;
        // Recursively toggle child checkboxes
        this.toggleAllChildCheckboxes(child, checked);
      });
    }
  }

  updateParentCheckboxState(data: any): void {
    if (data.subtasks && data.subtasks.length > 0) {
      // Check if all child checkboxes are checked
      const allChecked = data.subtasks.every((child:any) => child.View);
      // Update parent checkbox state
      data.View = allChecked;
    }
  }





  onActionComplete(args: ActionEventArgs): void {
    if (args.requestType === 'save') {
      console.log(args.data);
    }
  }

  onSubmit() {
    console.log('Ok');

  }




  headerText: { text: string }[] = [
    { text: "Feature Rights" },
    { text: "Field Rights" }
  ];


  isAllChecked(mainTaskIndex: number, fieldName: string): boolean {
    for (const subtask of this.data[mainTaskIndex].subtasks) {
      if (!subtask[fieldName]) {
        return false;
      }
    }
    return true;
  }

  toggleAll(event: any, mainTaskIndex: number, fieldName: string): void {
    const checked = event.target.checked;
    const mainTask = this.data[mainTaskIndex];

    for (const subtask of mainTask.subtasks) {
      subtask[fieldName] = checked;
    }

    const anyUnchecked = mainTask.subtasks.some((subtask: any) => !subtask[fieldName]);

    if (anyUnchecked) {
      const headerCheckbox = document.getElementById('headerCheckbox') as HTMLInputElement;
      headerCheckbox.checked = false;
    }

  }


  isMainTaskSelected(mainTaskIndex: number): boolean {
    const mainTask = this.data[mainTaskIndex];
    return mainTask.subtasks.every((subtask: any) => subtask.View && subtask.Add && subtask.Edit && subtask.Active && subtask.Delete && subtask.Export);
  }



  toggleMainTask(event: any, mainTaskIndex: number): void {
    const checked = event.target.checked;
    for (const subtask of this.data[mainTaskIndex].subtasks) {
      subtask.View = checked;
      subtask.Add = checked;
      subtask.Edit = checked;
      subtask.Active = checked;
      subtask.Delete = checked;
      subtask.Export = checked;
    }

    this.updateHeaderCheckbox();
  }

  toggleCheckbox(event: any, mainTaskIndex: number, subtaskIndex: number, fieldName: string): void {
    const checked = event.target.checked;
    this.data[mainTaskIndex].subtasks[subtaskIndex][fieldName] = checked;

    this.updateHeaderCheckbox();
  }

  updateHeaderCheckbox(): void {
    let allChecked = true;
    for (const item of this.data) {
      for (const subtask of item.subtasks) {
        if (!subtask.View || !subtask.Add || !subtask.Edit || !subtask.Active || !subtask.Delete || !subtask.Export) {
          allChecked = false;
          break;
        }
      }
      if (!allChecked) {
        break;
      }
    }

    const headerCheckbox = document.getElementById('headerCheckbox') as HTMLInputElement;
    headerCheckbox.checked = allChecked;
  }

  isAllSubtaskChecked(mainTaskIndex: number, subtaskIndex: number): boolean {
    const subtask = this.data[mainTaskIndex].subtasks[subtaskIndex];
    return subtask.View && subtask.Add && subtask.Edit && subtask.Active && subtask.Delete && subtask.Export;
  }



  updateParentTaskCheckbox(mainTaskIndex: number): void {
    const mainTask = this.data[mainTaskIndex];
    mainTask.View = mainTask.subtasks.every((subtask: any) => subtask.View);
    mainTask.Add = mainTask.subtasks.every((subtask: any) => subtask.Add);
    mainTask.Edit = mainTask.subtasks.every((subtask: any) => subtask.Edit);
    mainTask.Active = mainTask.subtasks.every((subtask: any) => subtask.Active);
    mainTask.Delete = mainTask.subtasks.every((subtask: any) => subtask.Delete);
    mainTask.Export = mainTask.subtasks.every((subtask: any) => subtask.Export);
  }



  toggleSubtask(event: any, mainTaskIndex: number, subtaskIndex: number): void {
    const checked = event.target.checked;
    const subtask = this.data[mainTaskIndex].subtasks[subtaskIndex];
    subtask.View = checked;
    subtask.Add = checked;
    subtask.Edit = checked;
    subtask.Active = checked;
    subtask.Delete = checked;
    subtask.Export = checked;


    const allUnchecked = this.data[mainTaskIndex].subtasks.every((sub: any) =>
      !sub.View && !sub.Add && !sub.Edit && !sub.Active && !sub.Delete && !sub.Export
    );

    if (allUnchecked) {
      const headerCheckbox = document.getElementById('headerCheckbox') as HTMLInputElement;
      headerCheckbox.checked = false;
    } else {
      // const allChecked = this.data[mainTaskIndex].subtasks.every((sub: any) =>
      //   sub.View && sub.Add && sub.Edit && sub.Active && sub.Delete && sub.Export
      // );
      // const headerCheckbox = document.getElementById('headerCheckbox') as HTMLInputElement;
      // headerCheckbox.checked = allChecked;
    }
  }



  toggleAllCheckboxes(event: any): void {
    const checked = event.target.checked;
    for (const item of this.data) {
      for (const subtask of item.subtasks) {
        subtask.View = checked;
        subtask.Add = checked;
        subtask.Edit = checked;
        subtask.Active = checked;
        subtask.Delete = checked;
        subtask.Export = checked;
      }
      item.View = checked;
      item.Add = checked;
      item.Edit = checked;
      item.Active = checked;
      item.Delete = checked;
      item.Export = checked;
    }
  }

  toggleMainItemSubtasksVisibility(item: any): void {
    item.subtasksVisible = !item.subtasksVisible;
  }






}
