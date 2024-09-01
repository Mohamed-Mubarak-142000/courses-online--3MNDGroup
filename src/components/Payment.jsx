import React, { useContext, useState } from "react";
import { ApiContext } from "../store/ApiContext";
import useUpdated from "../hooks/useUpdated";
import { Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Payment = ({ totalPrice }) => {
  const { cart, user, setUser, setCart } = useContext(ApiContext);
  const navigate = useNavigate();
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardHolderName: "",
  });

  // update user
  const { mutate: updateUser, isLoading: isUpdatingUser } = useUpdated({
    title: "Update User",
    endPoint: `users/${user?.id}`,
  });

  // handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardDetails({ ...cardDetails, [name]: value });
  };

  // handle payment
  const handlePayment = () => {
    if (
      !cardDetails.cardNumber ||
      !cardDetails.expiryDate ||
      !cardDetails.cvv ||
      !cardDetails.cardHolderName
    ) {
      alert("Please fill in all credit card details.");
      return;
    }
    if (cardDetails.cardNumber.length < 16 || cardDetails.cvv.length < 3) {
      alert("Invalid card details.");
      return;
    }
    const updatedProducts = user.products ? [...user.products] : [];
    cart.forEach((course) => {
      if (!updatedProducts.find((product) => product.id === course.id)) {
        updatedProducts.push(course);
      }
    });
    const updatedUser = {
      ...user,
      products: updatedProducts,
      cardDetails: {
        cardNumber: cardDetails.cardNumber,
        expiryDate: cardDetails.expiryDate,
        cvv: cardDetails.cvv,
        cardHolderName: cardDetails.cardHolderName,
      },
    };

    updateUser(updatedUser, {
      onSuccess: () => {
        setUser(updatedUser);
        localStorage.setItem("user", JSON.stringify(updatedUser));
        console.log("Processing payment with details: ", cardDetails);
        setCardDetails({
          cardNumber: "",
          expiryDate: "",
          cvv: "",
          cardHolderName: "",
        });
        // clear cart
        localStorage.removeItem("cart");
        setCart([]);
        navigate("/courses");
        alert("Payment processed successfully!");
      },
      onError: (error) => {
        console.error("Error updating user:", error);
        alert("Failed to process payment. Please try again.");
      },
    });
  };
  return (
    <div className="w-[30%] p-4 lg:sticky lg:top-[100px] rounded-lg shadow-md bg-white">
      <h2 className="text-xl font-bold mb-4">Order Summary</h2>
      <Typography variant="h6" className="text-gray-500 my-2">
        Total Price:
      </Typography>
      <Typography variant="h5" className="font-bold text-text_grey my-2">
        ${totalPrice}
      </Typography>
      <TextField
        label="Card Number"
        variant="outlined"
        name="cardNumber"
        fullWidth
        margin="normal"
        value={cardDetails.cardNumber}
        onChange={handleInputChange}
      />
      <TextField
        label="Expiry Date"
        variant="outlined"
        name="expiryDate"
        fullWidth
        margin="normal"
        placeholder="MM/YY"
        value={cardDetails.expiryDate}
        onChange={handleInputChange}
      />
      <TextField
        label="CVV"
        variant="outlined"
        name="cvv"
        fullWidth
        margin="normal"
        type="password"
        value={cardDetails.cvv}
        onChange={handleInputChange}
      />
      <TextField
        label="Cardholder Name"
        variant="outlined"
        name="cardHolderName"
        fullWidth
        margin="normal"
        value={cardDetails.cardHolderName}
        onChange={handleInputChange}
      />
      <Button
        variant="contained"
        sx={{
          my: 1,
          p: 1.5,
          fontWeight: "bold",
          backgroundColor: "#FCD980",
          color: "#000",
          boxShadow: "none",
          "&:hover": {
            backgroundColor: "#e2ba53",
            boxShadow: "none",
          },
        }}
        fullWidth
        onClick={handlePayment}
        disabled={isUpdatingUser}
      >
        {isUpdatingUser ? "Processing..." : "Pay Now"}
      </Button>
    </div>
  );
};

export default Payment;
