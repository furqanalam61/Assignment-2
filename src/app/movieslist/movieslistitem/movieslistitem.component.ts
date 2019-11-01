import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movieslistitem',
  templateUrl: './movieslistitem.component.html',
  styleUrls: ['./movieslistitem.component.scss'],
})
export class MovieslistitemComponent implements OnInit {

  constructor(private router: Router) {  }
  
  @Input() item;

  ngOnInit() {}

  changeUrl(user){
    const id = user.id;
    const url = `movieslist/${id}`;
    this.router.navigateByUrl(url);
  }
}
