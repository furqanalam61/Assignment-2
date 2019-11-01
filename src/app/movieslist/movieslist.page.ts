import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovielistService } from '../movielist.service';

@Component({
  selector: 'app-movieslist',
  templateUrl: './movieslist.page.html',
  styleUrls: ['./movieslist.page.scss'],
})
export class MovieslistPage implements OnInit {

  constructor(
    private router: Router,
    private movielistservice: MovielistService
  ) { }

  movies = [];

  ngOnInit() {
   // this.movies = this.movielistservice.getAllMovies();
  }

  changeUrl(user){
    const id = user.id;
    const url = `movieslist/${id}`;
    this.router.navigateByUrl(url);
  }

  ionViewDidEnter() {
    console.log('view enter');
    this.movies = this.movielistservice.getAllMovies();
  }

}
