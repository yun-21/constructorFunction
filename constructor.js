// 분류규격 라면볶음면 {
//   재료들(라면종류, 라면물, 추가재료){
//     라면종류 : 라면종류;
//     라면물 : 라면물;
//     추가재료 : 추가재료;
//   }
// }

class HyeonRamen{
  constructor(ramenName, ranmenWater, addFood) {
    this.ramenName = ramenName,
    this.ranmenWater = ranmenWater,
    this.addFood = addFood
  }

  set ramenName(ramenName){
    if(ramenName !== '진라면'){
      console.error('진라면이 아니라서 안합니다.')
    }
  }
}
let test = new HyeonRamen("신라면","500ml","계란, 파송송");
console.log(test);