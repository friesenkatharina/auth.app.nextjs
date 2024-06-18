import mongoose, { Schema, models } from "mongoose";

// Erstelle das Schema für den Benutzer
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Modell erstellen, falls es noch nicht existiert
const User = models.User || mongoose.model("User", userSchema);

export default User;
