function divideAndConquerSum(a) {
    return divideAndSum(x, 0, x.length);
}

function divideAndSum(x, lo, hi)
{ 
    if(hi-lo < 1)
    {
        return 0;
    }
    
    if((hi - lo) === 1)
    {
        return x[0];
    }

    let mid1 = lo + Math.floor((hi - lo) / 3);
    let mid2 = lo + 2 * Math.floor((hi - lo) / 3) + 1;
    
    let part1 = x.slice(0, mid1 + 1);
    let part2 = x.slice(mid1 + 1, mid2);
    let part3 = x.slice(mid2, hi);
    
    return divideAndSum(part1, 0, part1.length) + divideAndSum(part2, 0, part2.length) + divideAndSum(part3, 0, part3.length);
}
