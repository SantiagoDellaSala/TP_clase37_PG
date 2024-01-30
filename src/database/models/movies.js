module.exports = (sequelize,  dataTypes) => {
    const tableMoviesName = "Movies";
    const tableMoviesCols = {
        id : {
            type : dataTypes.INTEGER.UNSIGNED,
            primaryKey : true,
            allowNull : false,
            autoIncrement : true,
        },
        title : {
            type : dataTypes.STRING(500),
            allowNull : false,

        },
        rating : {
            type : dataTypes.DECIMAL(3, 1).UNSIGNED,
            allowNull : false,
        },
        awards : {
            type : dataTypes.INTEGER(10).UNSIGNED,
            allowNull : false,
            defaultValue : 0,
        },
        release_date : {
            type : dataTypes.DATETIME,
            allowNull : false,
        },
        lenght : {
            
        }
    }
    const tableMoviesConfig = {
        tableName : "movies",
        timestamps : true,
    }

    const Movie = sequelize.define(tableMoviesName, tableMoviesCols, tableMoviesConfig)

    return Movie
}