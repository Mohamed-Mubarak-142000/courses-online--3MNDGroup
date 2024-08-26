import { useQuery } from "react-query";
import { useContext } from "react";
import axios from "axios";
import { ApiContext } from "../store/ApiContext";

export default function useFetching({ title, endPoint }) {
  const { getUrl } = useContext(ApiContext);
  const fetchData = async () => await axios.get(getUrl(endPoint));

  return useQuery({
    queryKey: [title],
    queryFn: fetchData,
    refetchOnWindowFocus: false,
  });
}
