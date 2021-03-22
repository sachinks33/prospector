import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog'
import { AddSegmentComponent } from '../add-segment/add-segment.component';
import {PickerModule} from '@ctrl/ngx-emoji-mart';
import{SegmentServiceService} from '../segment-service.service'
import { AddTableComponent } from '../add-table/add-table.component';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.component.html',
  styleUrls: ['./segment.component.css']
})
export class SegmentComponent implements OnInit {
  segmentList:any;
  tableList:any;
  constructor(public dialog:MatDialog, public service:SegmentServiceService) { }

  ngOnInit(): void {
    this.segmentList=this.service.segmentData;
  }

  
  addSegment(){
    this.dialog.open(AddSegmentComponent);
    this.segmentList=this.service.segmentData;
    console.log(this.segmentList);
  }
  addTable()
  {
    this.dialog.open(AddTableComponent);
    this.tableList=this.service.tableData;
    console.log(this.tableList);

  }

}
