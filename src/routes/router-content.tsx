import { useAtom } from "jotai";
import AuthLayout from "../layouts/AuthLayout";
import AuthRoutes from "./auth.routes";
import PrivateRoutes from "./routes";
import { authorizationAtom } from "../store/autorization-atom";
import DashboardLayout from "../layouts/DashboardLayout";
import { useEffect } from "react";
import { useLanguage } from "../contexts/language.context";

export default function RouterContent() {
  const [isAuth] = useAtom(authorizationAtom);

  const { cultureCode } = useLanguage();

  useEffect(() => {
    document.body.dir = cultureCode === 0 ? "ltr" : "rtl";
  }, [cultureCode]);
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
