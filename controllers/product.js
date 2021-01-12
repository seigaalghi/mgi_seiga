const produk = [
  {
    id_produk: 1,
    nama_produk: "Huawei P30 Pro",
  },
  {
    id_produk: 2,
    nama_produk: "Huawei Nova 5T",
  },
];

const stok_produk = [
  {
    id_produk: 1,
    qty: 15,
  },
  {
    id_produk: 1,
    qty: 6,
  },
  {
    id_produk: 2,
    qty: 4,
  },
  {
    id_produk: 2,
    qty: 18,
  },
];

exports.getProduct = async (req, res) => {
  try {
    const product = produk.map((prod) => {
      const response = {
        nama_produk: prod.nama_produk,
        qty: 0,
      };
      stok_produk.map((stok) => {
        if (stok.id_produk == prod.id_produk) response.qty += stok.qty;
      });
      return response;
    });
    return res.status(200).json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
};
