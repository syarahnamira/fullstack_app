const express = require("express");
const { calculateDiscount, calculatePoint } = require("./utils/utils");
const app = express();
const port = 3000;

app.use(express.json());

app.post("/checkout", async (req, res) => {
  try {
    const { hargaBarang, gunakanVoucher } = req.body;

    let hargaSetelahDiskon = hargaBarang;
    let poin = 0;

    if (gunakanVoucher) {
      hargaSetelahDiskon = await calculateDiscount(hargaBarang);
      poin = await calculatePoint(hargaSetelahDiskon);
    }

    res.json({
      hargaAsli: hargaBarang,
      hargaSetelahDiskon: hargaSetelahDiskon,
      poinDiperoleh: poin,
    });
  } catch (error) {
    res.status(500).send("Error during checkout process");
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
