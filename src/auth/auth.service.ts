import { PrismaService } from './../prisma/prisma.service';
import { Injectable, Post, Req } from '@nestjs/common';
import { User, Bookmark } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  signup() {
    return { status: true };
  }
  signin() {
    return ' I have sign in';
  }
}
