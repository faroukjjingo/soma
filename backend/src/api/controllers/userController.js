import User from '../../models/User.js';

export const getProfile = async (req, res, next) => {
  const user = await User.findById(req.user.id).select('-password');
  res.json(user);
};

export const updateProfile = async (req, res, next) => {
  const { name, email } = req.body;
  const user = await User.findByIdAndUpdate(
    req.user.id,
    { name, email },
    { new: true }
  ).select('-password');
  res.json(user);
};
