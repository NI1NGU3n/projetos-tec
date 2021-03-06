// ============================== acesso à coleção do mongoDB ==============================
const mongoose = require('./database');
const Schema = mongoose.Schema;

// ============================== criação do esquema ============================== 
let chefeSchema = new Schema({
    Nome: { type: String, required: true },
    Sobrenome:{type:String, required: true},
    data_de_nascimento: { type: Date, required: true, default: 0 },
    Salario: { type: Number, required: true, default: 0 },

    //endereço
    cidade: { type: String, required: true },
    bairro: { type: String, required: true },
    rua: { type: String, required: true },
    numero: { type: String, required: true }
});

// ============================== exportação do modelo ============================== 
module.exports = mongoose.model('Chefe', chefeSchema, 'chefe');