
module.exports = function (sequelize,dataTypes) {
    let alias = 'Notas';
    let cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        titulo: {
            type: dataTypes.STRING(45),
            notNull: true,
            
        },
        texto: {
            type: dataTypes.STRING,
            notNull: true,
        },
        created_at: {
            type: dataTypes.DATE,
            notNull: true,
        },
        updated_at: {
            type: dataTypes.DATE,
            notNull: true,
        },
        deleted_at: {
            type: dataTypes.DATE,
            notNull: true,
        }

    }
    
    let config = {
        tableName: 'notas',
        timestamps: true,
        underscored: true, 
        paranoid: true,

    }
    const Notas = sequelize.define(alias,cols,config)

    return Notas
} 