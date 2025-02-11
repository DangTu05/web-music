import mongoose from "mongoose";
import MongooseDelete from "mongoose-delete";
const topicSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: "inactive",
    },
    description: {
      type: String,
    },
    slug: {
      type: String,
      required: true,
    },
    deleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);
topicSchema.plugin(MongooseDelete, { deletedAt: true });
const Topic = mongoose.model("Topic", topicSchema);
export default Topic;
