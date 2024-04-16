import Sidebar from "@/app/_components/sidebar/sidebar";

const conversationLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Sidebar>
      <div className="h-screen w-full flex justify-center  bg-zinc-200">
        Empty Desk
      </div>
    </Sidebar>
  );
};

export default conversationLayout;
