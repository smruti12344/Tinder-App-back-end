import mongoose from "mongoose";

// Connection URL
const connectionUrl = "mongodb+srv://smrutiranjan1582:JdBgfn1kGVUzhUiI@cluster0.vldo7rp.mongodb.net/tinderdb?retrywrites=true&w=majority";

// Connect
const connectToDatabase = async () => {
    try {
        await mongoose.connect(connectionUrl, {
            useNewUrlParser: true,
            autoIndex: true, // Use autoIndex instead of useCreateIndex
            useUnifiedTopology: true
        });
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};

// Call the connectToDatabase function to initiate the connection
connectToDatabase();

export default mongoose;
