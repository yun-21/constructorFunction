class MakeCoffee{
  constructor(been, water, sugar, milk){
    this.been = been;
    this.water = water;
    this.sugar = sugar;
    this.milk = milk;
  }
}

const cofee = new MakeCoffee("과테말라", 150, false, true);
console.log(cofee);