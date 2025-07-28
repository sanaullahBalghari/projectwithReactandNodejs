import mongoose,{Schema} from "mongoose";

const productSchema = new Schema(

   {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    stock: {
      type: Number,
      default: 0,
    },
    images: {
      type: [String],
      default: [],
    },
  },

{timestamps: true})

export const Product=mongoose.model("Product", productSchema)