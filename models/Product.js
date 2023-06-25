// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      alllowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_name: {
      type: DataTypes.STRING,
      alllowNull: false,
      
    },
    price: {
      type: DataTypes.INTEGER,
      alllowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "category",
        key: "id",
        unique: true
      }
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;

// [{
//   id: {
//     type: DataTypes.INTEGER
//    },
//    tag_name: {
//     type: DataTypes.STRING
//    },
//    product 
// }]