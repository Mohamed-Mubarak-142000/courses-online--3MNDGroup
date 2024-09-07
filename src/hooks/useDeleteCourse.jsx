import { useMutation } from "react-query";
import axios from "axios";
import { useContext } from "react";
import { ApiContext } from "../store/ApiContext";

export default function useDeleteCourse() {
  const { getUrl } = useContext(ApiContext);

  const mutationFn = async (courseId) => {
    const response = await axios.delete(getUrl(`courses/${courseId}`));
    return response.data;
  };

  return useMutation({
    mutationKey: ["deleteCourse"],
    mutationFn,
  });
}
