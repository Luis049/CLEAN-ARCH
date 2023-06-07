import { resetUser } from "@/redux/slices/user.slice";
import { useDispatch } from "react-redux";


const ResetHomeButton = () => {
    const dispatch = useDispatch();

    const dispatchAction = () => {
    dispatch(resetUser());
  };


  return <button onClick={dispatchAction}>Dispatch reset action</button>
}

export default ResetHomeButton;