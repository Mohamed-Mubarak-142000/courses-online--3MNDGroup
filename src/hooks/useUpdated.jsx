import { useMutation } from "react-query";
import { useContext } from "react";
import axios from "axios";
import { ApiContext } from "../store/ApiContext";

export default function useUpdated({ title, endPoint }) {
  const { getUrl } = useContext(ApiContext);

  const mutationFn = async (data) => {
    const response = await axios.put(getUrl(endPoint), data);
    return response.data;
  };

  return useMutation({
    mutationKey: [title],
    mutationFn,
  });
}
