var tb_1 = 170;
var tb_2 = 172;
var tb_3 = 168;

var hasil = [];

if(tb_1 > tb_2){
    if(tb_1 > tb_3){
        hasil.push(tb_1);
        if(tb_2 > tb_3){
            hasil.push(tb_2);
            hasil.push(tb_3);
        }else{
            hasil.push(tb_3);
            hasil.push(tb_2);
        }
    }else if(tb_1 < tb_3){
        hasil.push(tb_3);
        if(tb_1 > tb_2){
            hasil.push(tb_1);
            hasil.push(tb_2);
        }else{
            hasil.push(tb_2);
            hasil.push(tb_1);
        }
    }
}else {
    if(tb_2 > tb_3){
        hasil.push(tb_2);
        if(tb_1 > tb_3){
            hasil.push(tb_1);
            hasil.push(tb_3);
        }else{
            hasil.push(tb_3);
            hasil.push(tb_1);
        }
    }else if(tb_2 < tb_3){
        hasil.push(tb_3);
        if(tb_1 > tb_2){
            hasil.push(tb_1);
            hasil.push(tb_2);
        }else{
            hasil.push(tb_2);
            hasil.push(tb_1);
        }
    }
}

console.log(hasil);