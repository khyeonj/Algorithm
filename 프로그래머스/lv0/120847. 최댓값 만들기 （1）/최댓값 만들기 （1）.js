function solution(numbers) {
    const [first, second, ...array] = numbers.sort((a, b) => b - a);
    //sort:정렬. 지금은 내림차순 정렬함
    return first * second;
}