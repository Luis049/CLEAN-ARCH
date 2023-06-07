
import { modifyUser } from "@/redux/slices/user.slice";
import { useDispatch } from "react-redux";


const ModifyHomeButton = () => {
    const dispatch = useDispatch();

    const dispatchAction = () => {
    dispatch(modifyUser({ name: 'Gentleman'}));
  };


  return <button onClick={dispatchAction}>Dispatch modify action</button>
}

export default ModifyHomeButton;