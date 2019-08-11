
/**
 *
 * number to luoma
 *  */ 


function tran(n) {
    let res  = '';
    let units = ['M', 'D', 'C', 'L', 'X', 'V', 'I'];
    let scales = new Array(7).fill(0);
    scales = scales.map(v => {
        return {unit: '', count: 0, remainder: 0}
    });

    if (n<1 || n>3999) {
        return n;
    }

    if (n >= 1000) {
        
        scales[0].unit = 'M';
        scales[0].count = Math.floor(n / 1000);
        n = n % 1000;
        
    }
    if (n >= 500) {
        
        if (n >= 900) {
            scales[1].unit = 'M';
            scales[1].count = 'C';
            n = n - 900;
        } else {
            scales[1].unit = 'D';
            scales[1].count = Math.floor(n / 500);
            n = n % 500;
        }
        

    }
    if (n >= 100) {

        scales[2].unit = 'C';
        scales[2].count = Math.floor(n / 100);
        n = n % 100;

    }
    if (n >= 50) {

        if (n >= 90) {
            scales[3].unit = 'C';
            scales[3].count = 'X';
            n = n - 90;
        } else {
            scales[3].unit = 'L';
            scales[3].count = Math.floor(n / 50);
            n = n % 50;
        }
        

    }
    if (n >= 10) {

        scales[4].unit = 'X';
        scales[4].count = Math.floor(n / 10);
        n = n % 10;

    }
    if (n >= 5) {

        if (n+1 == 10) {
            scales[5].unit = 'X';
            scales[5].count = 'I';
            n = n - 9;
        } else {
            scales[5].unit = 'V';
            scales[5].count = Math.floor(n / 5);
            n = n % 5;
        }

    }
    if (n >= 1) {

        scales[6].unit = 'I';
        scales[6].count = n;

    }
    console.log(scales);
    scales.forEach((v,i,a) => {
        if (typeof v.count == 'string') {
            res = res + v.count + v.unit;
            
        } else if (v.count != 4){
            res = res + new Array(v.count).fill(v.unit).join('');

        } else if (v.count == 4) {

            res = res + v.unit + units[i-1];
        }
    });
    console.log(res);
    return res;
}

tran (1299);


function tran2 (num) {
    let values=[1000,900,500,400,100,90,50,40,10,9,5,4,1]; 
    let strs=["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
    let res = '';
    for(let i = 0; i < values.length; i++){
        while(num >= values[i]) {
            res += strs[i];
            num -= values[i];
        }
    }
    return res;
}
