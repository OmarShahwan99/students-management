import { useAtom } from "jotai";
import AuthLayout from "../layouts/AuthLayout";
import AuthRoutes from "./auth.routes";
import PrivateRoutes from "./routes";
import { authorizationAtom } from "../store/autorization-atom";
import DashboardLayout from "../layouts/DashboardLayout";

export default function RouterContent() {
  const [isAuth] = useAtom(authorizationAtom);
  return (
    <>
      {isAuth && (
        <DashboardLayout>
          <PrivateRoutes />
        </DashboardLayout>
      )}
      {!isAuth && (
        <AuthLayout>
          <AuthRoutes />
        </AuthLayout>
      )}
    </>
  );
}
