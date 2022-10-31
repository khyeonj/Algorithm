function solution(sides) {
    var answer = 0;
    let long = Math.max(...sides);
    if(long<sides.reduce((acc, cur)=>acc+cur,0)-long){
        return 1;
    }else{
        return 2;
    }
}