module.exports = (sequelize, DataTypes) => {
    const Movie = sequelize.define("Movie", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: { type: DataTypes.STRING, allowNull: false, },
        description: { type: DataTypes.STRING, allowNull: false, },
        poster: { type: DataTypes.STRING, allowNull: false, },
        watched: { type: DataTypes.BOOLEAN, allowNull: false, },
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
    }, {
        timestamps: false,
    })

    return Movie;
}