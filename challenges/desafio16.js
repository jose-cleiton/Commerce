db.produtos.updateOne({ nome: "Big Mac" }, { $set: { ultimaModificacao: true } });
db.produtos.find({ ultimaModificacao: { $exists: 1 } }, { _id: false, nome: true }); 