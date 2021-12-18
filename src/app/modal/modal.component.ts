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
  public image: string = '';
  
  constructor() {
   }

  ngOnInit(){
    let date = new Date; 
    this.currentDate = date.getDate();
    this.image = this.day.img;
  }

  public close(){
    this.closeModal.emit(false);
  }

}
