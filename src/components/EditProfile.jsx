import React, { useCallback, useContext, useEffect, useState } from "react";
import { EditNote } from "@mui/icons-material";
import TextInput from "../common/TextInput";
import { ApiContext } from "../store/ApiContext";
import { Button } from "@mui/material";
import useUpdated from "../hooks/useUpdated";

const EditProfile = () => {
  const [showEdit, setShowEdit] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const { user, setUser } = useContext(ApiContext);
  const { mutate, isLoading } = useUpdated({
    title: "updated info",
    endPoint: `users/${user?.id}`,
  });

  // Initialize state with user data
  useEffect(() => {
    if (user) {
      setUsername(user.username || "");
      setEmail(user.email || "");
      setPhone(user.phone || "");
      setAddress(user.address || "");
      setPassword(user.password || "");
    }
  }, [user]);

  // Handlers for input fields
  const handleChange = useCallback(
    (setter) => (event) => {
      setter(event.target.value);
    },
    []
  );

  const handleToggle = () => {
    setShowEdit((prev) => !prev);
  };

  const handleSaved = (e) => {
    e.preventDefault();
    const updatedUser = {
      ...user,
      username: username || user.username,
      email: email || user.email,
      phone: phone || user.phone,
      address: address || user.address,
      password: password || user.password,
    };

    mutate(updatedUser, {
      onSuccess: () => {
        setUser(updatedUser);
        localStorage.setItem("user", JSON.stringify(updatedUser));
        alert("Change processed successfully!");
      },
      onError: (error) => {
        console.error("Error updating user:", error);
        alert("Failed to process changed information. Please try again.");
      },
    });
  };

  return (
    <section className="lg:w-[25%] lg:sticky lg:top-[100px] bg-secondary rounded shadow-lg p-2">
      <div className="capitalize font-bold text-white flex items-center justify-between px-2 my-2">
        <p>Personal Information</p>
        <EditNote onClick={handleToggle} />
      </div>

      <TextInput
        label="UserName"
        type="text"
        name="username"
        value={username}
        onChange={handleChange(setUsername)}
        reading={!showEdit}
      />

      <TextInput
        label="Email"
        type="email"
        name="email"
        value={email}
        onChange={handleChange(setEmail)}
        reading={!showEdit}
      />

      <TextInput
        label="Address"
        type="text"
        name="address"
        value={address}
        onChange={handleChange(setAddress)}
        reading={!showEdit}
      />

      <TextInput
        label="Phone"
        type="text"
        name="phone"
        value={phone}
        onChange={handleChange(setPhone)}
        reading={!showEdit}
      />

      <TextInput
        label="Password"
        type="text"
        name="password"
        value={password}
        onChange={handleChange(setPassword)}
        reading={!showEdit}
      />

      {showEdit && (
        <Button
          onClick={handleSaved}
          variant="contained"
          sx={{
            p: 1,
            width: "100%",
            color: "black",
            textTransform: "capitalize",
            fontSize: "16px",
          }}
        >
          {isLoading ? "Loading save.." : "Save"}
        </Button>
      )}
    </section>
  );
};

export default EditProfile;
