class ItsMe {
  constructor(name, age, address, emailId, emailAddress, like, hate) {
    this.name = name;
    this.age = age;
    this.address = address;
    this.emailId = emailId;
    this.emailAddress = emailAddress;
    this.like = like;
    this.hate = hate;
  }

  set name(value){
    if(typeof(value)==='string'){
      this._name=value;
    }else{
      console.error("이름이 문자열이 아닙니다.")
    }
  }

  set age(value){
    if(typeof(value)==='number'){
      this._age=value;
    }else{
      console.error("나이가 숫자형이 아닙니다.")
    }
  }

  set address(value){
    if(typeof(value)==='string'){
      this._address=value;
    }else{
      console.error("주소가 문자열이 아닙니다.")
    }
  }

  set emailId(value){
    if(typeof(value)==='string'){
      this._emailId=value;
    }else{
      console.error("이메일 아이디가 문자열이 아닙니다.")
    }
  }

  set emailAddress(value){
    if(typeof(value)==='string'){
      this._emailAddress=value;
    }else{
      console.error("이메일 주소가 문자열이 아닙니다.")
    }
  }
  
  set like(value){
    if(typeof(value)==='boolean'){
      this._like=value
    }else{
      console.error("boolean값이 아닙니다.")
    }
  }

  set hate(value){
    if(typeof(value)==='boolean'){
      this._hate=value;
    }else{
      console.error("boolean값이 아닙니다.")
    }
  }

  get age(){
    if(this._age<=20){
    return this._age+"살 이고 싶어요.."
    }
    else if(this._age>=26){
      return this._age+"살은 쫌.."
    }
    else if(this._age>=21 && this._age<=25){
      return this._age+"살로 잘 보셨네요^^"
    }
  }

  get emailAddress(){
    if(this._emailAddress === 'naver.com'){
      return this._emailId +"@"+this._emailAddress;
    }
    else if(this._emailAddress === 'gmail.com'){
      return this._emailId +"@"+this._emailAddress;
    }
    else if(this._emailAddress === 'hanmail.net'){
      return this._emailId +"@"+this._emailAddress;
    }
    else{
      return "이메일 성립 불가"
    }
  }
  
  get like(){
    if(this._like === true){
      return "네일아트 좋아해요"
    }
    else if(this._like === false){
      return "좋아하는게 하나도 없는게 말이 안돼"
    }
    else{
      return "ture 또는 false로 써주세요"
    }
  }
  
  get hate(){
    if(this._hate === true){
      return "바퀴벌레 너무 싫어"
    }
    else if(this._hate === false){
      return "오.. 싫어하는게 없다니.. 굿~"
    }
    else{
      return "ture 또는 false로 써주세요"
    }
  }
}

const medir = new ItsMe("신지윤", 25, "대전 중구", "sinjiyun290","gmail.com", true, true);
console.log(medir);
console.log(medir.age);
console.log(medir.emailAddress);
console.log(medir.like);
console.log(medir.hate);
