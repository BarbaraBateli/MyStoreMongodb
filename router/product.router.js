const router = require("express").Router();

const ProductModel = require("../models/products.model");

router.post("/adicionar-produto", async (request, response) => {
  try {
    const formData = request.body;

    console.log(formData);

    const response = await ProductModel.create({
      product: formData,
    });
    return response.status(200).json(response);
  } catch (err) {
    console.log(err.response);
    return response.status(400).json({ msg: "O produto não foi criado" });
  }
});

router.post("/editar-produto", async (request, response) => {
  try {
    const formData = request.body;

    console.log(formData);

    const response = await ProductModel.updateOne({
      product: formData,
    });
    return response.status(200).json(response);
  } catch (err) {
    console.log(err.response);
    return response.status(400).json({ msg: "O produto não foi atualizado" });
  }
});
router.post("/deletar-produto", async (request, response) => {
  try {
    const formData = request.body;

    console.log(formData);

    const response = await ProductModel.delete({
      product: formData,
    });
    return response.status(200).json(response);
  } catch (err) {
    console.log(err.response);
    return response.status(400).json({ msg: "O produto não foi apagado!" });
  }
});

module.exports = router;
