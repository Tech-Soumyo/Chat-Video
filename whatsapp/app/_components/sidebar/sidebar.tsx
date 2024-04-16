import DesktopSidebar from "./DesktopSidebarHeader";

const Sidebar = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full w-screen flex">
      <aside className="h-full min-w-[300px] bg-zinc-400">
        <DesktopSidebar />
      </aside>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
