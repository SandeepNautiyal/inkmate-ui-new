import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SolutionItemComponent } from '../solution-item/solution-item.component';
import { ProblemService } from '../problem.service';

@Component({
  selector: 'app-problem-detail',
  templateUrl: './problem-detail.component.html',
  styleUrls: ['./problem-detail.component.css']
})
export class ProblemDetailComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute,
              private problemService: ProblemService) { }

  problem: {};
  solutionList: any;
  ngOnInit() {
  	this.activeRoute.params.subscribe(routeParams => {
		this.problemService.getProblemDetaiById(routeParams.id)
	  	.subscribe(resp => {
	  		this.problem = resp["prob"];
	  		console.log(this.problem)
	  	},
	  	error => {
	  		console.debug("Unable to load problem details");
	  	});
	});

	this.activeRoute.params.subscribe(routeParams => {
		this.problemService.getSolutionDetaiByProbId(routeParams.id)
	  	.subscribe(resp => {
	  		this.solutionList = resp["solutions"];
	  		console.log(this.solutionList)
	  	},
	  	error => {
	  		console.debug("Unable to load solution list");
	  	});
	});
  	
  	//this.problem = {"prob":{"problemId":1,"title":"Insert Delete GetRandom O(1)","problemDescription":null,"tags":null,"category":null,"email":"Design a data structure that supports all following operations in average O(1) time.\n\ninsert(val): Inserts an item val to the set if not already present.\nremove(val): Removes an item val from the set if present.\ngetRandom: Returns a random element from current set of elements. Each element must have the same probability of being returned.","author":"sandeep.gbpec2007@gmail.com","difficultyLevel":"Sandeep Nautiyal","recordCreateTime":null,"recordUpdateTime":null,"examples":[]},"example":null,"solutions":null};
  	//this.solutionList = [{"solutionId":1,"problemId":1,"description":"This solution uses a combination of ArrayList and Map. Map ensures constant time get and put operation whereas Arraylist allows constant time index based get operation. \nInsert :- Insert operation insert values into Arraylist and puts value and its index in Map.\nRemove :- For remove we need to ensure the element is removed from both Map and ArrayList. In case the element to be removed is last element in the list it is simply removed from ArrayList and Map. In all other cases the element is removed from ArrayList based on the index retrieved from Map, the last element from ArrayList is moved to the index from where the element is removed so that the shifting of elements within ArrayList does not happen(As it will increase the complexity).\nGetRandom :- Get random gets random value from ArrayList based on index.","className":"ConstantTimeInsertUpdateAndDelete.java","langauge":"Java","email":"sandeep.gbpec2007@gmail.com","author":"Sandeep Nautiyal","recordCreateTime":null,"recordUpdateTime":null,"solutionReaction":null,"solutionContent":"class RandomizedSet {\n\n    /** Initialize your data structure here. */\n    Map<Integer, Integer> map = new HashMap<Integer, Integer>();\n    List<Integer> list = new ArrayList<Integer>();\n    \n    public RandomizedSet() {\n        \n    }\n    \n    /** Inserts a value to the set. Returns true if the set did not already contain the specified element. */\n    public boolean insert(int val) {\n        boolean result = map.containsKey(val);\n        if(!result){\n            list.add(val);\n            map.put(val, list.size()-1);\n        }\n        return !result;\n    }\n    \n    /** Removes a value from the set. Returns true if the set contained the specified element. */\n    public boolean remove(int val) {\n        boolean result = map.containsKey(val);\n        System.out.println(\"remove  = \"+val+\" \"+result);\n        if(result){\n            int index  = map.get(val);\n            if(index < list.size()-1){\n                int lastVal = list.get(list.size()-1);\n                list.set(list.size()-1, val);\n                list.set(index, lastVal);\n                map.put(val, list.size()-1);\n                map.put(lastVal, index);\n            }\n            list.remove(list.size()-1);\n            //System.out.println(\"index = \"+index+\" \"+list);\n            map.remove(val);\n        }\n        return result;\n    }\n    \n    /** Get a random element from the set. */\n    public int getRandom() {\n        Random rand = new Random();\n        int index = rand.nextInt(list.size());\n        //System.out.println(\"index = \"+index+\" \");\n        return list.get(index);\n    }\n}\n"}];
  }

}
