import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { RegisterDto } from 'src/shared/dtos/register.dto';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async register(dto: RegisterDto) {
    try {
      const user = await this.usersService.create(dto);
      return user;
    } catch (error) {
      throw new InternalServerErrorException('internal server error');
    }
  }

  private generateToken(user: User) {}
}
