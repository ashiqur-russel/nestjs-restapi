import { Injectable, Post } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signup() {
    return { status: true, user: 'Ashiqur' };
  }
  signin() {
    return ' I have sign in';
  }
}
