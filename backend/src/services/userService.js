import User from '../models/User.js';

export const findUserById = async (id) => {
  return await User.findById(id).select('-password');
};

export const updateUser = async (id, data) => {
  return await User.findByIdAndUpdate(id, data, { new: true }).select('-password');
};
