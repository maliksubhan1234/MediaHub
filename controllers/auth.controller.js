import express from "express";
import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import multer from "multer";
import { accessToken } from "../utils/generateAccessToken.js";
import { refreshToken } from "../utils/generateRefreshToken.js";

export const register = async (req, res) => {
  try {
    const { username, email, password} = req.body;
    const exsistingUser = await User.findOne({ email });
    if (exsistingUser) {
      return res
        .status(400)
        .json({ success: false, message: "User Already Exsists" });
    }
    let avtarPath = "";
    if (req.file) {
      avtarPath = req.file.path;
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      username: username,
      email: email,
      password: hashPassword,
      role: "user",
      avtar: avtarPath,
    });
    const safeUser = await User.findById(newUser._id).select(
      "-password -refreshToken",
    );
    return res.status(201).json({
      success: true,
      message: "User Created Successfully",
      data: safeUser,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: err.message,
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid Email or Password" });
    }
    const isPassword = await bcrypt.compare(password, user.password);
    if (!isPassword) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid Email or Password" });
    }
    const payload = {
      id: user._id,
      role: user.role,
      email: user.email,
    };
    const access = accessToken(payload);
    const refresh = refreshToken(payload);
    user.refreshToken = refresh;
    await user.save();
    const safeUser = await User.findOne({ email }).select(
      "-password -refreshToken",
    );
    return res.status(200).json({
      success: true,
      message: "Login Successful",
      accessToken: access,
      refreshToken: refresh,
      user: safeUser,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: err.message,
    });
  }
};
