const router = require('express').Router();

const { Product } = require('./Product');

const getProduct = async (req, res) => {
    const proid = req.params.id;
    const products = await Product.findByPk(proid);
    res.json(products);
};

const getAllProducts = async (req, res) => {
    const products = await Product.findAll({});
    res.json(products);
};

const saveProducts = async (req, res) => {
    const data = req.body;
    const newProduct = await Product.create(data);
    res.json(newProduct);
    console.log("successfull",data);
};

router.get('/products', getAllProducts);
router.get('/products/:id', getProduct);
router.post('/products', saveProducts);

module.exports = router;