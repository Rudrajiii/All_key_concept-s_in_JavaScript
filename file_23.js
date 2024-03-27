export const exportableFunc = (arr , t) =>{
    let LP = 0;
    let RP = arr.length - 1;
    while(LP <= RP){
        let MI = Math.floor((LP+RP) / 2);
        if(arr[MI] === t)return MI;
        if(arr[MI] < t){
            LP = MI + 1;
        }else{
            RP = MI - 1;
        }
    }
    return -1;
}
//  {exportableFunc}
