import { Component, OnInit } from '@angular/core';
// import {SegmentModel} from './segmet-model';
import{SegmentServiceService} from '../segment-service.service';

@Component({
  selector: 'app-add-segment',
  templateUrl: './add-segment.component.html',
  styleUrls: ['./add-segment.component.css']
})
export class AddSegmentComponent implements OnInit {

  // name:string="";
  // emoji:any="";
  // description:string="";
  segment={name:"",emoji:"",description:""}
  segmentList:Array<any>=[];
  constructor(private service:SegmentServiceService) { }

  ngOnInit(): void {
  }
  selectedEmoji(event:any){
    console.log(event.emoji.native)
    let value=<HTMLElement>document.getElementById("emoji-id");
    value.style.display="none";
    let valueF=<HTMLElement>document.getElementById("emoji");
   // valueF.setAttribute("value",event.emoji.native );
    this.segment.emoji=event.emoji.native
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
  addSegment(){
    this.segmentList.push(this.segment);
    console.log(this.segmentList)
    this.service.saveSegment(this.segment);
    
  }

  segmentValues(){
    return this.segmentList;
  }
}
