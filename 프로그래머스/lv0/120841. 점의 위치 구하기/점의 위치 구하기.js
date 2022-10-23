function solution(dot) {
    let [x,y] = dot;
    
    // if(x>0&&y>0) return 1;
    // if(x<0&&y>0) return 2;
    // if(x<0&&y<0) return 3;
    // if(x<0&&y>0) return 4;
    
    if(y>0){
        if(x>0){
            return 1
        }else{
            return 2
        }
    }else{
        if(x<0){
            return 3
        }else{
            return 4
        }
    }
}