exports.min = function min(array) {
    if (typeof  array === 'undefined' ||array.length == 0 ||  array.length == null)  {
        return 0;
    } else {
        let min = array[0];
        for (let i = 0; i < array.length; i++) {
            if (min > array[i]) min = array[i];
        }
        return min;
    }
};

exports.max = function max(array) {
    if (typeof array === 'undefined' ||array.length == 0 ||  array.length == null) {
        return 0;
    } else {
        let max = array[0];
        for (let i = 0; i < array.length; i++) {
            if (max < array[i]) max = array[i];
        }
        return max;
    }
};

exports.avg = function avg(array) {
    if (typeof array === 'undefined' ||array.length == 0 ||  array.length == null)  {
        return 0;
    } else {
        return array.reduce((a, b) => (a + b)) / array.length;
    }
}

