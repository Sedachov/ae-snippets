function Permute(n, order) {
    var indexes= [];
    switch(order) {
        case 'abc':
            for(var i = 1; i <= n; i++)
                indexes[indexes.length] = i;
            break;
        case 'bca':
            for(var i = n; i >= 1; i--)
                indexes[indexes.length] = i;
            break;
        default:
            var tmp = [];
            for(var i = 1; i <= n; i++)
                tmp[tmp.length] = i;
            var count = n;
            for(var i = 1; i <= n; i++){
                var ri = Math.floor(Math.random() * count) ;
                indexes[indexes.length] = tmp[ri];
                tmp.splice (ri, 1);
                count--;
            }
    }
    return indexes;
}

$.writeln(Permute(100,'random'));
