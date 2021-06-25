

// ============================== acesso à coleção do mongoDB ==============================
const mongoose = require('./database');
const Schema = mongoose.Schema;

// ============================== criação do esquema ============================== 
let ProgramadorSchema = new Schema({
    nome: { type: String, required: true },
    sobrenome:{type:String, required: true},
    data_de_nascimento: { type: Date, required: true, default: 0 },
    salario: { type: Number, required: true, default: 0 },
    trabalhos: { type: String, required: true},

    //Endereço
    cidade: { type: String, required: true },
    bairro: { type: String, required: true },
    rua: { type: String, required: true },
    numero: { type: Number, required: true },
    
});

// ============================== exportação do modelo ============================== 
module.exports = mongoose.model('Programador', ProgramadorSchema, 'programador');

