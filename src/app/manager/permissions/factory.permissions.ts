import { PermissionBase } from './base.permissions';
import { Role } from '../role';
import { SuperuserPermission } from './superuser.permissions';
import { AdminPermission } from './admin.permissions';
import { UserPermission } from './user.permissions';
import { UnknownPermission } from './unknown.permissions';

export class PermissionsFactory {
  public static instance: PermissionBase;
  private constructor() {}

  public static getInstance() {
    if (this.instance) {
      return this.instance;
    } else {
      const role = localStorage.getItem('role');
      switch (role) {
        case Role.SUPERUSER:
          this.instance = new SuperuserPermission();
          return this.instance;
        case Role.ADMIN:
          this.instance = new AdminPermission();
          return this.instance;
        case Role.USER:
          this.instance = new UserPermission();
          return this.instance;
        case Role.UNKNOWN:
          this.instance = new UnknownPermission();
          return this.instance;
        default:
          this.instance = new UnknownPermission();
          return this.instance;
      }
    }
  }
}
