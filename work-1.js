// * 이 파일은 기본 함수 연습 파일입니다.
// * 목적은 함수를 조금 더 이해하려고 합니다.
// * 매개변수가 객체인 경우가 아래에 작성될 예정입니다.

function workOne(a,b){
//* logic : 매개변수 두개를 받은 다음
//* logic : return은 객체였음 좋겠다.
  let localVariable = {};
  // localVariable[a] = a //객체 조회하는방법.
  // localVariable[b] = b //객체 조회하는방법.
  
  localVariable[arguments[0]]=arguments[0]
  localVariable[arguments[1]]=arguments[1]
  return localVariable;
}
console.log(workOne("hi","hello"));