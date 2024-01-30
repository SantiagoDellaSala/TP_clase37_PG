module.exports = (sequelize,  dataTypes) => {
    const tableGenresName = "Genres";
    const tableGenresCols = {
        id : {
            type : dataTypes.INTEGER,
            primaryKey : true,
            allowNull : false,
            autoIncrement : true,
        },
        name : {
            type : dataTypes.STRING(100),
            allowNull : false,
        },
        ranking : {
            type : dataTypes.INTEGER(10),
            allowNull : false,
            uniqueIndex : false,
            unsignedDataType : false,
        },
        active : {
            type : dataTypes.TINYINT(1),
            allowNull : false,
            defaultValue : 1,
        },
    }
    const tableGenresConfig = {
        tableName : "genres",
        timestamps : true,
    }

    const Genre = sequelize.define(tableGenresName, tableGenresCols, tableGenresConfig)

    return Genre
}