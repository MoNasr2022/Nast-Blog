import mongoose from "mongoose";

const { Schema } = mongoose;

// const userSchema = new Schema(
//   {
//     name: {
//       type: String,
//       unique: true,
//       required: true,
//     },
//     email: {
//       type: String,
//       unique: true,
//       required: true,
//     },
//     password: {
//       type: String,
//       required: true,
//     },
//   },
//   { timestamps: true }
// );

const userSchema = new Scheme({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    
  }
}
)

export default mongoose.model("User", userSchema);
