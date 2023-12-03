import { PropsWithChildren } from "react";
import SessionProvider from "./_provider/SessionProvider";
import { getServerSession } from "next-auth";

const AdminOuterLayout = ({ children }: PropsWithChildren) => {
  const session = getServerSession();
  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  )
}

export default AdminOuterLayout