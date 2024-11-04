import jwt from "jsonwebtoken";

// Function to generate a JWT and set it as a cookie in the response
const generateToken = (res, userId) => {
  // Generate a JWT token with a payload containing the user's ID
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "30d", // Token expiration set to 30 days
  });

  // Set the token as an HTTP-only cookie with secure options
  res.cookie("jwt", token, {
    httpOnly: true, // Prevents client-side JavaScript access to the cookie
    secure: process.env.NODE_ENV === "Production", // Only send over HTTPS in production
    sameSite: "strict", // Only send the cookie for same-site requests
    maxAge: 30 * 24 * 60 * 60 * 1000, // Cookie expiration: 30 days in milliseconds
  });

  return token; // Return the generated token (useful for testing or logging if needed)
};

export default generateToken;
