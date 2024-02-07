import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter name"],
    },
    // photo: {
    //   type: String,
    //   required: [true, "Please enter photo"],
    // },
    price: {
      type: Number,
      required: [true, "Please enter price"],
    },
    stock: {
      type: Number,
      required: [true, "Please enter stock"],
    },
    category: {
      type: String,
      required: [true, "Please enter category"],
      trim: true,
    },
    image: {
      type: Object,
      required: [true, "Please enter image"],
    },
  },
  { timestamps: true }
);

export const Product = mongoose.model("Product", schema);
