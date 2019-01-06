import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProblemService {

  constructor(private http: HttpClient) {
  }

  getProblemList() {
	return this.http.get("http://139.59.95.89:8080/api/listAllProblems");
  }

  getProblemDetaiById(id: any) {
  	return this.http.get("http://139.59.95.89:8080/api/problem/"+id);
  }
  
  getSolutionDetaiByProbId(id: any) {
  	return this.http.get("http://139.59.95.89:8080/api/solution/"+id);
  }

}
