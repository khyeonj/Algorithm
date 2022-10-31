function solution(my_string) {
    var answer = 0;
    let num = my_string.split("");
    for(let i = 0; i < num.length; i++){
        //split하면 배열로 만들어짐
        //잘린 요소가 number인 것을 모아서 더함
        if(Number(num[i])) answer += Number(num[i])
      }
    return answer;
}