import { db } from "@/lib/db";
import { getCurrentUser } from "./getCurrentUser";
import { list } from "postcss";
import conversation from "../conversation/page";

const getConversations = async () => {
  const { currentUserPrisma } = await getCurrentUser();

  if (!currentUserPrisma.id) return [];

  try {
    const converstions = await db.conversation.findMany({
      orderBy: {
        listMassage: "desc",
      },
      where: {
        userIDs: {
          has: currentUserPrisma.id,
        },
      },
      include: {
        users: true,
        massages: {
          include: {
            sender: true,
            seen: true,
          },
        },
      },
    });
    return converstions;
  } catch (error: any) {
    console.log(error);
    return [];
  }
};

export default getConversations;
