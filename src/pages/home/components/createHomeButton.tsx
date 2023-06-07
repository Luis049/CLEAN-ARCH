import { createUser } from "@/redux/slices/user.slice";
import { useDispatch } from "react-redux";
import { fetchMorty, rickAndMortyUrl } from "../service";
import { UserEmptyState } from "@/models";
import { useState, useEffect } from "react";




const CreateHomeButton = () => {
    const dispatch = useDispatch();
    const [morty, setMorty] = useState(UserEmptyState);
    const getMorty = async () => {
      const result = await fetchMorty(rickAndMortyUrl);
      setMorty(result);
    };

    useEffect(() => {
      getMorty();
    }, []);

    const dispatchAction = () => {
    dispatch(createUser(morty));
  };


  return <button onClick={dispatchAction}>Dispatch create action</button>
}

export default CreateHomeButton;