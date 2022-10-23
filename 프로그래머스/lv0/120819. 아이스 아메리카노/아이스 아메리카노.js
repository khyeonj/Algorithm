function solution(money) {
    var answer = [Math.trunc(money/5500), money % 5500];
    return answer;
}