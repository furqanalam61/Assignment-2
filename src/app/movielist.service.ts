import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovielistService {

  Movies = [
    {id: '1', name:'Avengers'},
    {id: '2', name:'Boss Baby'},
    {id: '3', name:'The Intoucables'},
    {id: '4', name:'Up'},
    {id: '5', name:'Iron Man'},
    {id: '6', name:'Frozen'},
    {id: '7', name:'Minions'},
    {id: '8', name:'Spider Man'},
    {id: '9', name:'Big Hero'},
    {id: '10', name:'Moana'},
    {id: '11', name:'Super Man'},
    {id: '12', name:'Hop'},
    {id: '13', name:'Times'},
    {id: '14', name:'X Men'},
  ]
  
  constructor() { }

  get getMovie() {
    return this.Movies;
  }

  getAllMovies() {
    return this.Movies;
  }

  deleteMovie(id) {
    this.Movies = this.Movies.filter(e => {
      return e.id !== id;
    });
  }

  saveMovie(id, name) {
    this.Movies.push({id:id,name:name});
  }
}
