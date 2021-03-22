import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SegmentServiceService {

  segmentData:Array<any>=[];
  tableData:Array<any>=[];
  constructor() { }
  saveSegment(list:any){

    this.segmentData.push(list);
  }
  saveTable(list:any){
    
    this.tableData.push(list);
  }
}
