import {Temp} from './temp';

export class Names {
  // temp: Temp = new Temp();
  temp:Temp;
  constructor(temp:Temp){
    this.temp = temp;
  }

  setTemp(temp:Temp){
    this.temp = temp;
  }
  public printName(){
    console.log(this.temp.name);
  }
}
