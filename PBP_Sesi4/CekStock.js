let Produk = {
    nama_produk : "Mouse Wireless",
    harga_produk : 150000,
    stock_produk : 3,
    diskon_produk : 0.5,

    infoProduk : function(){
        return (
            "nama_produk : " + this.nama_produk + "\n" +
            "harga_produk : " + this.harga_produk + "\n" +
            "stock_produk : " + this.stock_produk + "\n" +
            "diskon_produk : " + this.diskon_produk 
        )
    },
    hargaSetelahDiskon : function(){
        let hargaSetelahDiskon = this.harga_produk - (this.harga_produk * this.diskon_produk);
        return hargaSetelahDiskon;
    }, 
    beliProduk : function(jumlah){
        if (this.stock_produk<=0){
           return "Stock Produk Habis";
        }else if (jumlah>this.stock_produk){
            return "Stock Produk Tidak Mencukupi! stock produk tersisa : " + this.stock_produk;
        }else{
            this.stock_produk -= jumlah;
            return "Pembelian Berhasil! stock produk tersisa : " + jumlah + " produk, stock produk tersisa : " + this.stock_produk + "\n" + "Harga Produk Setelah Diskon : " + this.hargaSetelahDiskon();
        
        }    
    }
}
console.log(Produk.infoProduk());
console.log(Produk.beliProduk(1));
console.log(Produk.beliProduk(2));
console.log(Produk.beliProduk(1));

