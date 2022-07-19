import { PermissionType } from '../permission-type';
import { Resource } from '../resource';
import { PermissionBase } from './base.permissions';
import { Permission } from '../permission';

export class SuperuserPermission extends PermissionBase {
  constructor() {
    super();
    this.permissions = [
      new Permission(Resource.BILL, [
        PermissionType.CREATE,
        PermissionType.READ,
        PermissionType.UPDATE,
        PermissionType.DELETE,
      ]),
      new Permission(Resource.PASTA, [
        PermissionType.CREATE,
        PermissionType.READ,
        PermissionType.UPDATE,
        PermissionType.DELETE,
        PermissionType.ORDER,
      ]),
      new Permission(Resource.PIZZA, [
        PermissionType.CREATE,
        PermissionType.READ,
        PermissionType.UPDATE,
        PermissionType.DELETE,
        PermissionType.ORDER,
      ]),
    ];
  }
}
