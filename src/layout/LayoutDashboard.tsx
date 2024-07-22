import { DashboardSidebar, DashboardTopbar } from "../modules/dashboard";

interface Props {
  children: React.ReactNode;
}

const LayoutDashboard = ({ children }: Props) => {
  return (
    <div>
      <DashboardTopbar />
      <div>
        <DashboardSidebar />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default LayoutDashboard;
