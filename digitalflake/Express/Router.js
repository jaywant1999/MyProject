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

const saveProduct = async (req, res) => {
    const data = req.body;
    const newProduct = await Product.create(data);
    res.json(newProduct);
    console.log("Successfully save : ",data);
};

const deleteProduct = async (req, res) => {
    const id = req.params.id;
    const deletePro = await Product.destroy({
        where:{
        id:id
    }});
    res.json(deletePro);
};

const updateProduct = async (req, res) => {
    const data = req.body;
    const Id = req.body;
    const updateProduct = {...data};
    const updateCount = await Product.update(updateProduct, {
        where :{Id},
    });
    res.json(updateCount)
}

router.get('/products', getAllProducts);
router.get('/products/:id', getProduct);
router.post('/products', saveProduct);
router.put('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);


module.exports = router;