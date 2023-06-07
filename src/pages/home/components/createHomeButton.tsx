import { createUser } from "@/redux/slices/user.slice";
import { useDispatch } from "react-redux";


const CreateHomeButton = () => {
    const dispatch = useDispatch();

    const dispatchAction = () => {
    dispatch(createUser({ name: 'Luis Ariza', id: 1}));
  };


  return <button onClick={dispatchAction}>Dispawwtch create action</button>
}

export default CreateHomeButton;