import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { sampleData } from './data';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

// export class ListComponent implements OnInit {
//
//   constructor() { }
//
//   Invoiceheader: any;
//
//   ngOnInit(): void {
//
//     this.LoadInvoice();
//   }
//
//   LoadInvoice() {
//     this.Invoiceheader = sampleData;
//   }
//
//
//
//
//   isAllChecked(mainTaskIndex: number, fieldName: string): boolean {
//     for (const subtask of this.Invoiceheader[mainTaskIndex].subtasks) {
//       if (!subtask[fieldName]) {
//         return false;
//       }
//     }
//     return true;
//   }
//
//   toggleAll(event: any, mainTaskIndex: number, fieldName: string): void {
//     const checked = event.target.checked;
//     for (const subtask of this.Invoiceheader[mainTaskIndex].subtasks) {
//       subtask[fieldName] = checked;
//     }
//
//     let allChecked = true;
//     for (const subtask of this.Invoiceheader[mainTaskIndex].subtasks) {
//       if (!subtask[fieldName]) {
//         allChecked = false;
//         break;
//       }
//     }
//
//     const headerCheckbox = document.getElementById('headerCheckbox') as HTMLInputElement;
//     if (allChecked) {
//       headerCheckbox.checked = true;
//     } else {
//       headerCheckbox.checked = false;
//     }
//   }
//
//
//   isMainTaskSelected(mainTaskIndex: number): boolean {
//     const mainTask = this.Invoiceheader[mainTaskIndex];
//     return mainTask.subtasks.every((subtask: any) => subtask.View && subtask.Add && subtask.Edit && subtask.Active && subtask.Delete && subtask.Export);
//   }
//
//   toggleMainTask(event: any, mainTaskIndex: number): void {
//     const checked = event.target.checked;
//     for (const subtask of this.Invoiceheader[mainTaskIndex].subtasks) {
//       subtask.View = checked;
//       subtask.Add = checked;
//       subtask.Edit = checked;
//       subtask.Active = checked;
//       subtask.Delete = checked;
//       subtask.Export = checked;
//     }
//
//     // Check if all checkboxes in the main task are checked
//     let allChecked = true;
//     for (const subtask of this.Invoiceheader[mainTaskIndex].subtasks) {
//       if (!subtask.View || !subtask.Add || !subtask.Edit || !subtask.Active || !subtask.Delete || !subtask.Export) {
//         allChecked = false;
//         break;
//       }
//     }
//
//     // Update the header checkbox based on the status of checkboxes in the main task
//     const headerCheckbox = document.getElementById('headerCheckbox') as HTMLInputElement;
//     headerCheckbox.checked = allChecked;
//   }
//
//
//   isAllSubtaskChecked(mainTaskIndex: number, subtaskIndex: number): boolean {
//     const subtask = this.Invoiceheader[mainTaskIndex].subtasks[subtaskIndex];
//     return subtask.View && subtask.Add && subtask.Edit && subtask.Active && subtask.Delete && subtask.Export;
//   }
//
//
//   updateParentTaskCheckbox(mainTaskIndex: number): void {
//     const mainTask = this.Invoiceheader[mainTaskIndex];
//     mainTask.View = mainTask.subtasks.every((subtask: any) => subtask.View);
//     mainTask.Add = mainTask.subtasks.every((subtask: any) => subtask.Add);
//     mainTask.Edit = mainTask.subtasks.every((subtask: any) => subtask.Edit);
//     mainTask.Active = mainTask.subtasks.every((subtask: any) => subtask.Active);
//     mainTask.Delete = mainTask.subtasks.every((subtask: any) => subtask.Delete);
//     mainTask.Export = mainTask.subtasks.every((subtask: any) => subtask.Export);
//   }
//
//   toggleSubtask(event: any, mainTaskIndex: number, subtaskIndex: number): void {
//     const checked = event.target.checked;
//     const subtask = this.Invoiceheader[mainTaskIndex].subtasks[subtaskIndex];
//     subtask.View = checked;
//     subtask.Add = checked;
//     subtask.Edit = checked;
//     subtask.Active = checked;
//     subtask.Delete = checked;
//     subtask.Export = checked;
//
//     const mainTask = this.Invoiceheader[mainTaskIndex];
//     if (!checked) {
//       mainTask.View = false;
//       mainTask.Add = false;
//       mainTask.Edit = false;
//       mainTask.Active = false;
//       mainTask.Delete = false;
//       mainTask.Export = false;
//     } else {
//       mainTask.View = mainTask.subtasks.every((subtask: any) => subtask.View);
//       mainTask.Add = mainTask.subtasks.every((subtask: any) => subtask.Add);
//       mainTask.Edit = mainTask.subtasks.every((subtask: any) => subtask.Edit);
//       mainTask.Active = mainTask.subtasks.every((subtask: any) => subtask.Active);
//       mainTask.Delete = mainTask.subtasks.every((subtask: any) => subtask.Delete);
//       mainTask.Export = mainTask.subtasks.every((subtask: any) => subtask.Export);
//     }
//   }
//
//   toggleCheckbox(event: any, mainTaskIndex: number, subtaskIndex: number, fieldName: string): void {
//     const checked = event.target.checked;
//     this.Invoiceheader[mainTaskIndex].subtasks[subtaskIndex][fieldName] = checked;
//
//     let allChecked = true;
//     for (const item of this.Invoiceheader) {
//       for (const subtask of item.subtasks) {
//         if (!subtask[fieldName]) {
//           allChecked = false;
//           break;
//         }
//       }
//       if (!allChecked) {
//         break;
//       }
//     }
//
//     const headerCheckbox = document.getElementById('headerCheckbox') as HTMLInputElement;
//     if (allChecked) {
//       headerCheckbox.checked = true;
//     } else {
//       headerCheckbox.checked = false;
//     }
//   }
//
//
//
//   toggleAllCheckboxes(event: any): void {
//     const checked = event.target.checked;
//     for (const item of this.Invoiceheader) {
//       for (const subtask of item.subtasks) {
//         subtask.View = checked;
//         subtask.Add = checked;
//         subtask.Edit = checked;
//         subtask.Active = checked;
//         subtask.Delete = checked;
//         subtask.Export = checked;
//       }
//       item.View = checked;
//       item.Add = checked;
//       item.Edit = checked;
//       item.Active = checked;
//       item.Delete = checked;
//       item.Export = checked;
//     }
//   }
//
//
//
// }
//


export class ListComponent implements OnInit {

  constructor() { }

  Invoiceheader: any;
  isFilterOpen: boolean = false;

  ngOnInit(): void {
    this.loadInvoice();
  }

  loadInvoice() {
    this.Invoiceheader = sampleData.map(item => ({ ...item, visible: true }));
  }

  toggleFilter(): void {
    this.isFilterOpen = !this.isFilterOpen;
  }

  toggleAllCheckboxes(event: any): void {
    const checked = event.target.checked;
    for (const item of this.Invoiceheader) {
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

  toggleMainTask(event: any, mainTaskIndex: number): void {
    const checked = event.target.checked;
    for (const subtask of this.Invoiceheader[mainTaskIndex].subtasks) {
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
    this.Invoiceheader[mainTaskIndex].subtasks[subtaskIndex][fieldName] = checked;
    this.updateHeaderCheckbox();
  }

  updateHeaderCheckbox(): void {
    let allChecked = true;
    for (const item of this.Invoiceheader) {
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

  isAllChecked(mainTaskIndex: number, fieldName: string): boolean {
    for (const subtask of this.Invoiceheader[mainTaskIndex].subtasks) {
      if (!subtask[fieldName]) {
        return false;
      }
    }
    return true;
  }

  isMainTaskSelected(mainTaskIndex: number): boolean {
    const mainTask = this.Invoiceheader[mainTaskIndex];
    return mainTask.subtasks.every((subtask: any) => subtask.View && subtask.Add && subtask.Edit && subtask.Active && subtask.Delete && subtask.Export);
  }

  isAllSubtaskChecked(mainTaskIndex: number, subtaskIndex: number): boolean {
    const subtask = this.Invoiceheader[mainTaskIndex].subtasks[subtaskIndex];
    return subtask.View && subtask.Add && subtask.Edit && subtask.Active && subtask.Delete && subtask.Export;
  }

  toggleSubtask(event: any, mainTaskIndex: number, subtaskIndex: number): void {
    const checked = event.target.checked;
    const subtask = this.Invoiceheader[mainTaskIndex].subtasks[subtaskIndex];
    subtask.View = checked;
    subtask.Add = checked;
    subtask.Edit = checked;
    subtask.Active = checked;
    subtask.Delete = checked;
    subtask.Export = checked;
    const allUnchecked = this.Invoiceheader[mainTaskIndex].subtasks.every((sub:any) =>
      !sub.View && !sub.Add && !sub.Edit && !sub.Active && !sub.Delete && !sub.Export
    );
    if (allUnchecked) {
      const headerCheckbox = document.getElementById('headerCheckbox') as HTMLInputElement;
      headerCheckbox.checked = false;
    }
  }

  applyFilter(): void {
    this.toggleFilter();
    console.log('Filtered data:', this.Invoiceheader.filter((item: any) => item.visible));
  }

}
