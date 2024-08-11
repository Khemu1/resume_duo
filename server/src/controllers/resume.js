import User from "../models/user.js";



export async function addResume(req, res) {
  try {
    const user = req.user;
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    const findUser = await User.findOne({
      username: user.username,
      password: user.password,
    });

    if (!findUser) {
      return res.status(404).json({ message: "Couldn't find account" });
    }

    const accessToken = jwt.sign(
      { username: user.username, userId: findUser._id },
      process.env.JWT_ACCESS_SECRET,
      { expiresIn: "1h" }
    );

    const refreshToken = jwt.sign(
      { username: user.username, userId: findUser._id },
      process.env.JWT_REFRESH_TOKEN,
      { expiresIn: "7d" }
    );

    res.cookie("refreshToken", refreshToken, refreshTokenCookieOptions);
    res.cookie("jwt", accessToken, accessTokenCookieOptions);
    return res.status(200).json({ username: findUser.username });
  } catch (error) {
    console.error(error);
    res.status(500).json("Unexpected Error");
  }
}
export async function addResume(req, res) {
  try {
    const user = req.user;
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    const findUser = await User.findOne({
      username: user.username,
      password: user.password,
    });

    if (!findUser) {
      return res.status(404).json({ message: "Couldn't find account" });
    }

    const accessToken = jwt.sign(
      { username: user.username, userId: findUser._id },
      process.env.JWT_ACCESS_SECRET,
      { expiresIn: "1h" }
    );

    const refreshToken = jwt.sign(
      { username: user.username, userId: findUser._id },
      process.env.JWT_REFRESH_TOKEN,
      { expiresIn: "7d" }
    );

    res.cookie("refreshToken", refreshToken, refreshTokenCookieOptions);
    res.cookie("jwt", accessToken, accessTokenCookieOptions);
    return res.status(200).json({ username: findUser.username });
  } catch (error) {
    console.error(error);
    res.status(500).json("Unexpected Error");
  }
}
export async function deleteResume(req, res) {
  try {
    const user = req.user;
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    const findUser = await User.findOne({
      username: user.username,
      password: user.password,
    });

    if (!findUser) {
      return res.status(404).json({ message: "Couldn't find account" });
    }

    const accessToken = jwt.sign(
      { username: user.username, userId: findUser._id },
      process.env.JWT_ACCESS_SECRET,
      { expiresIn: "1h" }
    );

    const refreshToken = jwt.sign(
      { username: user.username, userId: findUser._id },
      process.env.JWT_REFRESH_TOKEN,
      { expiresIn: "7d" }
    );

    res.cookie("refreshToken", refreshToken, refreshTokenCookieOptions);
    res.cookie("jwt", accessToken, accessTokenCookieOptions);
    return res.status(200).json({ username: findUser.username });
  } catch (error) {
    console.error(error);
    res.status(500).json("Unexpected Error");
  }
}

