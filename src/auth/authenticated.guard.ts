import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
} from '@nestjs/common';

@Injectable()
export class AuthenticatedGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean | Promise<boolean> {
    const httpContext = context.switchToHttp();
    const request = httpContext.getRequest();
    const isAuthenticatedUser = request.isAuthenticated();

    if (!isAuthenticatedUser) throw new ForbiddenException('Доступ запрещён');

    return isAuthenticatedUser;
  }
}
