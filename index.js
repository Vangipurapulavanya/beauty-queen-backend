const express = require("express");
const app =express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/products");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/orders");

dotenv.config();

mongoose.connect('mongodb://0.0.0.0:27017/local')
.then(()=> console.log("Db connection successful!"))
.catch((err)=> console.log(err));

app.use(express.json());
app.use("/api/user", userRoute);
app.use("/api/auth",authRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);



app.listen(process.env.PORT || 5000, ()=>
{
    console.log("Backened server is running");
});

