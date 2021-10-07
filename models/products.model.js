const { Schema, model } = require("mongoose");

const ProductSchema = new Schema({
  product: {
    categoria: { type: String, trim: true, required: true },
    subcategoria: { type: String, trim: true },
    modelo: { type: String, trim: true },
    cor: { type: String, trim: true },
    linha: { type: String, trim: true },
    fornecedor: { type: String, trim: true },
    quantidade: { type: Number, trim: true },
    preço: { type: Number, trim: true },
    entrada: { type: Date, default: Date.now, trim: true },
    imagem: { type: String, trim: true },
  },
});

module.exports = model("Product", ProductSchema);
