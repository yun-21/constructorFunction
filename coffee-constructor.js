class MakeCoffee{
  constructor(been, water, sugar, milk){
    this.been = been;
    this.water = water;
    this.sugar = sugar;
    this.milk = milk;
  }
  //************************규격만들기*********
  set been(value){
    if(typeof(value)==='string'){
      this._been = value; //_ : 새로운 키에 넣는 개념 (무언가 세팅을 통과한 값)
    }else{
      console.error("been는 문자열이 아닙니다.");
    }
  }
  set water(value){
    if(typeof(value)==='number'){
      this._water=value;
    }else{
      console.error("water는 숫자형이 아닙니다.");
    }
  }
  set sugar(value){
    if(typeof(value)==="boolean"){
      this._sugar=value;
    }else{
      console.error("sugar는 boolean이 아닙니다.");
    }
  }
  
  get been(){
    return this._been+"산";
  }
  get water(){
    return this._water+"mL";
  }
  get sugar(){
    if(this._sugar === false){
      return "쓴맛"
    }else if(this._sugar === true){
      return "단맛"
    }
  }
}
const cofee = new MakeCoffee("과테말라", 150, false, true);
console.log(cofee);
console.log(cofee.been);
console.log(cofee.water);
console.log(cofee.sugar);
