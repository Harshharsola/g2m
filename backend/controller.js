const model = require('./models');

function addUserToDatabase(user) {
    let type = user.type;
    model.User.create({
        values: {
            userID: user.userID,
            password: user.password,
            profilePicture: user.profilePicture,
            address: user.address,
            name: user.name,
            phone_no: user.phone_no,
            gst_no: user.gst_no,
            type: type
        
        }
    })
    switch (type) {

        case "Consumer": {
            model.Consumer.create({
                values: {
                    userID: user.userID
                }
            })
            break;
        }

        case "Vendor": {
            model.Vendor.create({
                values: {
                    userID: user.userID,
                    productIDList: JSON.stringify(user.productIDList)
                }
            })
            break;
        }

        case "Logistics": {
            model.Logistics.create({
                values: { userID: user.userID }
            })
            break;
        }

    }
}

function addNewRequirement(user, requirement) {
    model.Requirements.create({
        values: {
            userID: user.userID,
            requirementID: requirement.requirementID,
            requirementsList: JSON.stringify(requirement.requirementsList)
        }
    })
}

function addBidToRequirement(user, bid) {
    model.Bids.create({
        values: {
            quotation: bid.quotation,
            finalPrice: bid.finalPrice,
            bidID: bid.bidID,
            requirementID: bid.requirementID,
            userID: user.userID
        }
    })
}

function addReview(user, review) {
    model.Reviews.create({
        values: {
            reviewID: review.reviewID,
            rating: review.rating,
            content: review.content,
            productID: review.productID,
            userID: user.userID
        }
    })
}

function addProduct(user, product) {
    model.Vendor.findOne({
        where: { userID: user.userID }
    }).then((vendor) => {
        model.Vendor.update({
            where: {
                userID: user.userID
            },
            values: {
                ...vendor,
                productIDList: JSON.stringify(JSON.parse(vendor.productIDList).push(product.productID))
            }

        })
    })

    model.Product.create({
        values: {
            productID: product.productID,
            price: product.price,
            features: JSON.stringify(product.features)
        }
    })
}

//Add order



module.exports = {
    addUserToDatabase,
    addNewRequirement,
    addBidToRequirement,
    addReview,
    addProduct
}