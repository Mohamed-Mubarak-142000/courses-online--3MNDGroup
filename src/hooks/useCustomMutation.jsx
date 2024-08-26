import { useMutation } from "react-query";
import { useContext } from "react";
import axios from "axios";
import { ApiContext } from "../store/ApiContext";

export default function useCustomMutation({ title, endPoint }) {
  const { getUrl } = useContext(ApiContext);

  const mutationFn = async (data) => {
    const response = await axios.post(getUrl(endPoint), data);
    return response.data; // Return the user data
  };

  return useMutation({
    mutationKey: [title],
    mutationFn,
  });
}
