import { Component, OnInit } from '@angular/core';
import { SegmentServiceService } from '../segment-service.service';

@Component({
  selector: 'app-add-table',
  templateUrl: './add-table.component.html',
  styleUrls: ['./add-table.component.css']
})
export class AddTableComponent implements OnInit {

  table={name:"",emoji:"",description:""}
  tableList:Array<any>=[];
  constructor(private service:SegmentServiceService) { }

  ngOnInit(): void {
  }
  selectedEmoji(event:any){
    console.log(event.emoji.native)
    let value=<HTMLElement>document.getElementById("emoji-id");
    value.style.display="none";
    let valueF=<HTMLElement>document.getElementById("emoji");
   // valueF.setAttribute("value",event.emoji.native );
    this.table.emoji=event.emoji.native
  }
  clickField(){
    let value=<HTMLElement>document.getElementById("emoji-id");
    if(value.style.display=="block")
    {
      value.style.display="none";
    }
    else
      value.style.display="block";
  }
  addtable(){
    this.tableList.push(this.table);
    console.log(this.tableList)
    this.service.saveSegment(this.table);
    
  }

}
