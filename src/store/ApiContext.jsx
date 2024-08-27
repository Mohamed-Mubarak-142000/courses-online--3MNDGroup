import React, { createContext, useEffect, useState } from "react";

export const ApiContext = createContext();

export default function ApiContextProvider({ children }) {
  const [baseUrl] = useState("http://localhost:4000/");
  const [user, setUser] = useState(null);
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);

  const getUrl = (endpoint) => {
    return `${baseUrl}${endpoint}`;
  };

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist"));
    if (storedWishlist) {
      setWishlist(storedWishlist);
    }
  }, []);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    if (storedCart) {
      setCart(storedCart);
    }
  }, []);

  const userLogin = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  };

  const userLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("wishlist");
    localStorage.removeItem("cart");
    setWishlist([]);
    setCart([]);
    setUser(null);
  };

  // Add to wishlist logic
  const addToWishlist = (course) => {
    if (!user) {
      console.log("Please login to add to wishlist");
      return;
    }
    const isCourseInWishlist = wishlist.some((item) => item.id === course.id);
    if (isCourseInWishlist) {
      const updatedWishlist = wishlist.filter((item) => item.id !== course.id);
      setWishlist(updatedWishlist);
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      console.log("Removed from wishlist:", course);
    } else {
      const updatedWishlist = [...wishlist, course];
      setWishlist(updatedWishlist);
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      console.log("Added to wishlist:", course);
    }
  };

  // Add to cart logic
  const addToCart = (course) => {
    if (!user) {
      console.log("Please login to add to cart");
      return;
    }
    const isCourseInCart = cart.some((item) => item.id === course.id);
    if (isCourseInCart) {
      console.log("Course already in cart:", course);
    } else {
      const updatedCart = [...cart, course];
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      console.log("Added to cart:", course);
    }
  };

  // Remove from cart logic
  const removeFromCart = (courseId) => {
    const updatedCart = cart.filter((item) => item.id !== courseId);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    console.log("Removed from cart:", courseId);
  };

  return (
    <ApiContext.Provider
      value={{
        baseUrl,
        getUrl,
        user,
        userLogin,
        userLogout,
        addToWishlist,
        wishlist,
        addToCart,
        removeFromCart,
        cart,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
}
