/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Session as PrismaSession,
  Mentor as PrismaMentor,
  Student as PrismaStudent,
} from "@prisma/client";

import { SessionDto } from "../SessionDto";

export class SessionServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.SessionCountArgs, "select">): Promise<number> {
    return this.prisma.session.count(args);
  }

  async sessions(args: Prisma.SessionFindManyArgs): Promise<PrismaSession[]> {
    return this.prisma.session.findMany(args);
  }
  async session(
    args: Prisma.SessionFindUniqueArgs
  ): Promise<PrismaSession | null> {
    return this.prisma.session.findUnique(args);
  }
  async createSession(args: Prisma.SessionCreateArgs): Promise<PrismaSession> {
    return this.prisma.session.create(args);
  }
  async updateSession(args: Prisma.SessionUpdateArgs): Promise<PrismaSession> {
    return this.prisma.session.update(args);
  }
  async deleteSession(args: Prisma.SessionDeleteArgs): Promise<PrismaSession> {
    return this.prisma.session.delete(args);
  }

  async getMentor(parentId: string): Promise<PrismaMentor | null> {
    return this.prisma.session
      .findUnique({
        where: { id: parentId },
      })
      .mentor();
  }

  async getStudent(parentId: string): Promise<PrismaStudent | null> {
    return this.prisma.session
      .findUnique({
        where: { id: parentId },
      })
      .student();
  }
  async AddSession(args: SessionDto): Promise<SessionDto> {
    throw new Error("Not implemented");
  }
  async GetSessions(args: string): Promise<SessionDto[]> {
    throw new Error("Not implemented");
  }
}