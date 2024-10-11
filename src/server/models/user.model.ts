import mongoose from "mongoose";
import bcrypt from "bcrypt";

export interface IUserScheme extends mongoose.Document {
  name: string;
  email: string;
  password: string;
  isPasswordVerified(password: string): Promise<boolean>;
  role: "admin" | "superadmin" | "content-writer";
}

export interface UserStatics {
  isEmailTaken(email: string): Promise<boolean>;
}

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    trim: true,
    required: true,
    private: true,
    minLength: 8,
    validate(value: string) {
      if (!value.match(/\d/) || !value.match(/[a-zA-Z]/)) {
        throw new Error(
          "Password must contain at least one letter and one number"
        );
      }
    },
  },
  role: {
    type: String,
    enum: ["admin", "superadmin", "content-writer"],
    required: true,
  },
}, { timestamps: true });

UserSchema.statics.isEmailTaken = async function (
  email: string
): Promise<boolean> {
  const user = await this.findOne({ email });
  return !!user;
};

UserSchema.methods.isPasswordVerified = async function (
  password: string
): Promise<boolean> {
  return await bcrypt.compare(password, this.password);
};

UserSchema.pre("save", async function (next: mongoose.CallbackWithoutResultAndOptionalError) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 8);
  }

  next();
});

export default mongoose.models.User ||
  (mongoose.model(
    "User",
    UserSchema
  ) as unknown as mongoose.Model<IUserScheme> & UserStatics);
