import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Day } from '../day';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Output() closeModal = new EventEmitter;
  @Input() day: any = null;
  public currentDate: number = 0;
  
  constructor() {
   }

  ngOnInit(){
    let date = new Date; 
    this.currentDate = date.getDate();
  }

  public close(){
    this.closeModal.emit(false);
  }

}
