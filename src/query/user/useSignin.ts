import { useMutation } from "@tanstack/react-query";
import { SignIn } from "../../services/user";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { userAtom } from "../../store/user-atom";
import { authorizationAtom } from "../../store/autorization-atom";
import { ROUTES } from "../../utils/routes";
import { useToken } from "../../utils/hooks/use-token";

export default function useSignin() {
  const [_, setAuth] = useAtom(authorizationAtom);
  const [__, setUser] = useAtom(userAtom);

  const { setToken } = useToken();

  const navigate = useNavigate();

  return useMutation({
    mutationFn: SignIn,
    onSuccess: (res) => {
      console.log("res", res);
      if (res.status === 200) {
        setUser({ user: res.data.userName });
        setAuth(true);
        setToken(res.data.token);
        navigate(ROUTES.students);
      }
    },
    onError: (error) => {
      console.log("error", error);
    },
  });
}
