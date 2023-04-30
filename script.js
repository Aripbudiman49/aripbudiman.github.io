function hitung() {  
    var harga= parseFloat(document.hitungdiskon.harga.value);  
    if (isNaN(harga)) {harga=0;}  
    var diskon=parseFloat(document.hitungdiskon.diskon.value);  
    if (isNaN(diskon)) {diskon=0;}  var hargadiskon= harga * diskon / 100 ; 
    var pajak=parseFloat(document.hitungdiskon.pajak.value);
    if (isNaN(pajak)) {pajak=0;} var hargaPajak= harga * pajak / 100 ;
    var totalbayar = harga - hargadiskon + hargaPajak; 
    var totalhemat = harga - totalbayar;
    
    document.hitungdiskon.hasildiskondanpajak.value= totalbayar;   
    document.hitungdiskon.hasilhemat.value= totalhemat;  
}