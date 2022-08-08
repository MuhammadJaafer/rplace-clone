import { useSinginWithGoogle } from "../hooks/useGoogleSignin";
import { useAppContext } from "../hooks/useAppContext";
export default function Popup() {
  const { signin } = useSinginWithGoogle();
  const { dispatch, user } = useAppContext();
  const handleClick = async () => {
    const user = await signin();
    dispatch({ type: "SIGN_IN", payload: user });
    console.log(user);
  };
  return (
    !user && (
      <div className="popup">
        <div>
          <h2>Sign in</h2>
          <p>Please sign in to continue </p>
        </div>
        <button onClick={handleClick}>Sign in with google</button>
      </div>
    )
  );
}
