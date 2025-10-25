import mongoose, { Document, Schema } from "mongoose";

export interface ILoginLog extends Document {
  email: string;
  status: "success" | "failed";
  timestamp: Date;
}

const logSchema = new Schema<ILoginLog>({
  email: { type: String, required: true },
  status: { type: String, enum: ["success", "failed"], required: true },
  timestamp: { type: Date, default: Date.now },
});

export const LoginLog =
  mongoose.models.LoginLog || mongoose.model<ILoginLog>("LoginLog", logSchema);
