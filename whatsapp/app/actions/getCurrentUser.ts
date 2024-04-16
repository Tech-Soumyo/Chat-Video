import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs";
import {User as ClerkUSer} from "@clerk/nextjs/server"
import {User as PrismaUser} from "@prisma/client"
import { NextResponse } from "next/server";

interface CurrentUser{
    currentUSerPrisma: PrismaUser & {
        following: PrismaUser[]
    }
}