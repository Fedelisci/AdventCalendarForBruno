import { Component, OnInit } from '@angular/core';
import { Day } from '../day';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  public days: Day[] = [
    {date: 17, note: 'Questo era un motivo per farmi odiare un pochino ieri....', icon: 'bi-heart-fill', img: '../../assets/chat.JPG' }, 
    {date: 18, note: 'Questo probabilmente lo conosci, però mi ha fatto ridere!', icon: 'bi bi-emoji-laughing', img: ''}, 
    {date: 19, note: 'Molte cose Bruno che esistono: Giordano Bruno (filosofo), Bruno è un colore, Bruno è un comune italiano ed esistono anche un film Bruno (2009) e Radio Bruno. AH, anche lui è un Bruno', icon: 'bi bi-emoji-dizzy', img: '' }, 
    {date: 20, note: 'Puoi aprire il pacchetto numero uno, buon Lunedì ', icon: 'bi bi-stars', img: '../../assets/scimm.JPG' }, 
    {date: 21, note: 'Questa sono io con le facoltà cognitive di un mattone per la puzza di acetone mentre non so che mettere nella casella...', icon: '', img: '../../assets/feffy1.JPG' },  
    {date: 22, note: 'Questo è uno dei video che guardavo in loop da giovine, sto tipo di Cagliari si è perso in un bosco a Londra', icon: 'bi bi-emoji-dizzy', img: '' }, 
    {date: 23, note: 'A Milano non possiamo avere cani, tò ti regalo un orso! Oggi dovrebbe arrivarti una mail del WWF con le info', icon: 'bi bi-emoji-smile', img: '../../assets/unnamed.png' },
    {date: 24, note: 'Vedi di aspettare la mezzanotte per il pacchetto ', icon: 'bi bi-emoji-angry', img: '../../assets/feffy2.JPG' }, 
    {date: 25, note: 'Buon Natalo testolina, il regalo poi è una cazzata eh (spero ti piaccia almeno un pochiiiino), alla fine tutte le cose che ti piacciono erano sold-out o non arrivavano per tempo e quindi il progetto di farti compagnia veniva meno. Vorrei il teletrasporto per venire a darti almeno un abbraccio. Volevo comunque ringraziarti per queste settimane passate insieme, ti voglio molto bene anche se ci conosciamo da poco...un bacetto!', icon: 'bi bi-emoji-heart-eyes', img: '' }, 
    {date: 26, note: 'E oggi non ho un cazzo da dire, spero di non starti troppo addosso, volendo potrei lamentarmi delle poche emoji, but...', icon: 'bi bi-eye', img: '../../assets/26.png' }, 
    {date: 27, note: 'E  questo è un altro dei video che guardavo in loop', icon: 'bi bi-emoji-laughing', img: '' }, 
    {date: 28, note: 'Ovviamente il minutaggio non è casuale', icon: 'bi bi-emoji-wink', img: '' }, 
    {date: 29, note: 'Una dose di gatti galattici prima che arrivo!', icon: 'bi-emoji-smile', img: '' }, 
    {date: 30, note: 'Io che con pazienza provavo a dire in un video che sto tornando a romperti i coglioni, in basso le prove...', icon: '', img: '../../assets/prove.JPG' }
  ];

  public currentDate: number = 0;
  public classStyle: string = '';
  public day: any = null;
  public currentDay: number = 0;

  constructor() { }

  ngOnInit(){
    let date = new Date; 
    this.currentDate = date.getDate();
  }

  public menageDate(day: number){
    if(day == this.currentDate){
      this.classStyle = 'enabled';
    }else if(day < this.currentDate){
      this.classStyle = 'clicked'
    }else{
      this.classStyle = 'blocked'
    }
    return this.classStyle
  }

  openModal(){
    //open(ModalComponent)
  }

  showModal(val: any){
    this.day = val;

    this.currentDay = val.date
  }
}
