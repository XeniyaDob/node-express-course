const { products } = require("../data");

const getProducts = (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(newProducts);
};

const getProductById = (req, res) => {
  const idToFind = parseInt(req.params.productID);
  const product = products.find((p) => p.id === idToFind);

  if (!product) {
    return res.status(404).send({ message: "That product was not found." });
  }
  return res.status(200).json(product);
};

const getByQuery = (req, res) => {
  const { search, limit, regex, price } = req.query;
  let sortedProducts = [...products];

  if (regex) {
    const searchByRegex = new RegExp(regex, "i");
    sortedProducts = sortedProducts.filter((product) =>
      searchByRegex.test(product.name)
    );
  } else if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.toLowerCase().startsWith(search.toLowerCase());
    });
  }

  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }
  if (price) {
    sortedProducts = sortedProducts.filter((product) => product.price >= price);
  }
  if (sortedProducts.length < 1) {
    return res.status(200).json({ success: true, data: [] });
  }
  res.status(200).json(sortedProducts);
};

module.exports = {
  getProducts,
  getProductById,
  getByQuery,
};
