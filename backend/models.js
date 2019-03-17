const Sequelize = require('sequelize');
const sequelize = new Sequelize('medtechdb', '', '', {
    dialect: 'sqlite',
    storage: 'medtechdb.db'
});

const User = sequelize.define('users', {
    userID: { type: Sequelize.STRING, primaryKey: true },
    password: Sequelize.STRING,
    profilePicture: Sequelize.STRING,
    address: Sequelize.STRING,
    name: Sequelize.STRING,
    phone_no: Sequelize.INTEGER,
    gst_no: Sequelize.STRING,
    type: Sequelize.STRING
})

const Consumer = sequelize.define('consumers', {
    userID: { type: Sequelize.STRING, primaryKey: true },

})

const Logistics = sequelize.define('logistics', {
    userID: { type: Sequelize.STRING, primaryKey: true },

})

const Vendor = sequelize.define('vendors', {
    userID: { type: Sequelize.STRING, primaryKey: true },
    productIDList: Sequelize.JSON,

});

const Product = sequelize.define('products', {
    productID: Sequelize.STRING,
    price: Sequelize.FLOAT,
    features: Sequelize.JSON

});


const Bids = sequelize.define('bids', {
    quotation: Sequelize.STRING,
    finalPrice: sequelize.FLOAT,
    bidID: sequelize.STRING,
    requirementID: sequelize.STRING,
    userID: sequelize.STRING
})

const Requirements = sequelize.define('requirements', {
    requirementID: sequelize.STRING,
    userID: sequelize.STRING,
    requirementsList: sequelize.JSON,

})

// const Features = sequelize.

    // Vendor.hasMany(Orders, { foreignKey: userID });

const Orders = sequelize.define('orders', {
    orderID: Sequelize.STRING,
    productIDList: Sequelize.JSON,
})

const Reviews = sequelize.define('reviews', {
    reviewID: Sequelize.STRING,
    rating: Sequelize.DECIMAL,
    content: Sequelize.STRING,
    productID: Sequelize.STRING,
    userID: sequelize.STRING
    

})

const hasOrdered = sequelize.define('hasOrdered', {
    date: Sequelize.DATE,
    time: Sequelize.TIME,
    vendorID: Sequelize.STRING,
    userID: Sequelize.STRING,
    orderID: Sequelize.STRING
})

// Orders.belongsToMany(Consumer, {through: hasOrdered, foreignKey: userID});
// Vendors.belongsToMany(Consumer, {through: hasOrdered, foreignKey: userID});

// const ordersHasProducts = sequelize.define('ordersHasProducts', {

// });

// Orders.belongsToMany(Products, {})

//Add multivalued attribute to orders

module.exports={
    sequelize, Product, Orders, Reviews, hasOrdered, User, Consumer, Logistics, Vendor, Bids, Requirements}
