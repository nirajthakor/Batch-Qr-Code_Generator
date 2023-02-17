import express from "express";
const router = express.Router();
import qrcode from "qrcode";
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index");
});

router.get("/form", (req, res) => {
  res.render("form");
});

router.post("/scan", (req, res) => {
  const {
    product_name,
    unique_code,
    batch_no,
    mfg_date,
    exp_date,
    drum_from,
    drum_to,
    tare_weight,
    net_weight,
    gross_weight,
    ssc_code,
    batch_size,
    dl_no,
    storage,
    company_name,
    address,
    addressLine,
    tel,
    email,
  } = req.body;
  // console.log(req.body);
  const data = `
  Product Name = ${product_name}
  Unique Code = ${unique_code}
  Batch No = ${batch_no}
  Mfg Date = ${mfg_date}
  Exp Date = ${exp_date}
  Tare Weight = ${tare_weight}
  Net Weight = ${net_weight}
  Gross Weight = ${gross_weight}
  Drum Number = ${drum_from}/${drum_to}
  Batch Size = ${batch_size}
  D.L. No = ${dl_no}
  Storage = ${storage}

  ${company_name}
  ${address}
  ${addressLine}
  Tel.     : ${tel}
  Email Id : ${email}
  `;
  // console.log(data);

  qrcode.toDataURL(data, function (err, url) {
    res.render("scan", {
      qr_code: url,
      product_name,
      unique_code,
      batch_no,
      mfg_date,
      exp_date,
      drum_from,
      drum_to,
      tare_weight,
      net_weight,
      gross_weight,
      ssc_code,
      batch_size,
      dl_no,
      storage,
      company_name,
      address,
      addressLine,
      tel,
      email,
    });
  });
});

router.get("/single-qr", function (req, res, next) {
  res.render("single-qr.ejs");
});

router.post("/single-scan", (req, res) => {
  const {
    product_name,
    unique_code,
    batch_no,
    mfg_date,
    exp_date,
    drum_from,
    tare_weight,
    net_weight,
    gross_weight,
    ssc_code,
    batch_size,
    dl_no,
    storage,
    company_name,
    address,
    addressLine,
    tel,
    email,
  } = req.body;
  // console.log(req.body);
  const data = `
  Product Name = ${product_name}
  Unique Code = ${unique_code}
  Batch No = ${batch_no}
  Mfg Date = ${mfg_date}
  Exp Date = ${exp_date}
  Drum No = ${drum_from}/${drum_from}
  Tare Weight = ${tare_weight}
  Net Weight = ${net_weight}
  Gross Weight = ${gross_weight}
  SSC Code = ${ssc_code}
  Batch Size = ${batch_size}
  D.L. No = ${dl_no}
  Storage = ${storage}

  ${company_name}
  ${address}
  ${addressLine}
  Tel.     : ${tel}
  Email Id : ${email}
  `;
  // console.log(data);

  qrcode.toDataURL(data, function (err, url) {
    res.render("single-scan", {
      qr_code: url,
      product_name,
      unique_code,
      batch_no,
      mfg_date,
      exp_date,
      drum_from,
      tare_weight,
      net_weight,
      gross_weight,
      ssc_code,
      batch_size,
      dl_no,
      storage,
      company_name,
      address,
      addressLine,
      tel,
      email,
    });
  });
});

router.get("/*", (req, res) => {
  res.render("not-found");
});

export default router;
