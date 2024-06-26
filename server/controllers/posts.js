import Post from "../models/Post.js";
import User from "../models/User.js";

/* CREATE */
export const createPost = async (req, res) => {
  try {
    const { userId, description } = req.body;
    // const user = await User.findById(userId);
    const images = [];
    req.files.map(({path,size}) => {images.push({path,size})})
    
    const newPost = new Post({
      userId,
      description,
      images,
      likes: [],
      comments: [],
    });
    await newPost.save();
    res.status(201).json(newPost);
    // const post = await Post.find();
    // res.status(201).json(post);
    
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

/* READ */
export const getFeedPosts = async (req, res) => {
  try {
    const post = await Post.find().populate({
      path : 'userId', 
      select :['firstName', 'lastName', 'profilePicture', 'location']
    });
    res.status(200).json(post);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getUserPosts = async (req, res) => {
  try {
    const { userId } = req.params;
    const post = await Post.find({ userId }).populate({
      path : 'userId', 
      select :['firstName', 'lastName', 'profilePicture', 'location']
    });
    res.status(200).json(post);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

/* UPDATE */
export const likePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.body;
    const post = await Post.findById(id);
    const isLiked = post.likes.get(userId);

    if (isLiked) {
      post.likes.delete(userId);
    } else {
      post.likes.set(userId, true);
    }

    const updatedPost = await Post.findByIdAndUpdate(
      id,
      { likes: post.likes },
      { new: true }
    );

    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
