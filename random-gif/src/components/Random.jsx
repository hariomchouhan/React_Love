import React from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const Random = () => {
  // const API_KEY = "GuGByQCzWNU2yHIhKlAkQ3IiZ1zrS7Pb";

  // const [gif, setGif] = useState("");
  // const [loading, setLoading] = useState(false);

  // const fetchData = async () => {
  //   setLoading(true);
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  //   const { data } = await axios.get(url);
  //   const imageSource = data.data.images.downsized_large.url;
  //   setGif(imageSource);
  //   setLoading(false);
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const { gif, loading, fetchData } = useGif();

  return (
    <div className="w-11/12 lg:w-1/2 bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
      <h1 className="text-2xl underline uppercase font-bold mt-[15px]">
        A RANDOM GIFS
      </h1>

      {loading ? <Spinner /> : <img src={gif} alt="" width="450" />}

      <button
        onClick={() => fetchData()}
        className="font-bold mb-[20px] w-10/12 bg-yellow-500 text-lg py-2 rounded-lg"
      >
        Generate
      </button>
    </div>
  );
};

export default Random;
