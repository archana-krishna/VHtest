import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';


@Component({
  selector: 'app-pageone',
  templateUrl: './pageone.component.html',
  styleUrls: ['./pageone.component.css']
})
export class PageoneComponent implements OnInit {

  constructor(private game:GameService) { }

  ngOnInit(): void {
    this.game.getData().subscribe((Data)=>{
      console.log(Data);
    })
  }

}
