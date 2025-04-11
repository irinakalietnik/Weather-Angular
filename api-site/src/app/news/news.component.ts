import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NowDate } from '../my-Date';

@Component({
  selector: 'app-news',
  standalone: false,
  templateUrl: './news.component.html',
  styleUrl: './news.component.css',
})
export class NewsComponent implements OnInit {
  dataNews: any[] = [];
  SportNews: any[] = [];
  date = new NowDate().date;
  constructor(private dataservice: DataService) {}
  ngOnInit(): void {
    this.dataservice.getNews().subscribe(
      (data) => {
        this.dataNews = data.results;
      },
      (error) => {
        console.error('Error: ', error);
      }
    );
    this.dataservice.getSportNews().subscribe(
      (dataSport) => {
        this.SportNews = dataSport.results;
      
      },
      (error) => {
        console.error('Error: ', error);
      }
    );
  }
}
