const express = require("express");
const { products } = require("./data");

//invoke express
const app = express();

// setup static and middleware
app.use(express.static("./public"));

app.get("/api/v1/test", (req, res) => {
  res.json({ message: "It worked!" });
});

app.get("/api/v1/products", (req, res) => {
  res.json(products);
});

app.get("/api/v1/products/:productID", (req, res) => {
  const idToFind = parseInt(req.params.productID);
  const product = products.find((p) => p.id === idToFind);

  if (!product) {
    return res.status(404).send({ message: "That product was not found." });
  }

  return res.json(product);
});
//search 
app.get('/api/v1/query', (req, res) => {
  const { search, limit, regex, price } = req.query;
  let filteredProducts = [...products];

  if (regex) {
    const searchByRegex = new RegExp(regex, "i");
    filteredProducts = filteredProducts.filter((product) =>
      searchByRegex.test(product.name)
    );
  } else if (search) {
    filteredProducts = filteredProducts.filter((product) => {
      return product.name.toLowerCase().startsWith(search.toLowerCase());
    });
  }

  if (limit) {
    filteredProducts = filteredProducts.slice(0, Number(limit));
  }
  if (price) {
    filteredProducts = filteredProducts.filter(
      (product) => product.price >= price
    );
  }
  if (filteredProducts.length < 1) {
    return res.status(200).json({ success: true, data: [] });
  }
  res.status(200).json({
    success: true,
    data: filteredProducts,
  });
});

//handle page not found conditions
app.all("*", (req, res) => {
  res.status(404).send("resource not found");
});

app.listen(3000, () => {
  console.log("server is listening on port 3000....");
});
