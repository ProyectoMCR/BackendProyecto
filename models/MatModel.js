//importa la conexion a la db
import db from "../database/db.js";
//Importar Sequelize
import { DataTypes } from "sequelize";


const MatModel = db.define('materias', {
    ident: { type: DataTypes.INTEGER , primaryKey: true},
    id_materia: { type: DataTypes.INTEGER },
    nomb_materia: { type: DataTypes.STRING}
},{
    timestamps: false
})

export default MatModel