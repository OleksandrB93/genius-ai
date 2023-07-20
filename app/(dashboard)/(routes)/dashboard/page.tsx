import { UserButton } from "@clerk/nextjs";

const DashboardPage = () => {
  return (
    <p className="m-4">
      DashboardPage (Protected)
      <UserButton afterSignOutUrl="/" />
    </p>
  );
};

export default DashboardPage;
