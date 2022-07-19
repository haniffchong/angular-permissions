import { Injectable } from '@angular/core';
import { PermissionType } from './permission-type';
import { Role } from './role';
import { Resource } from './resource';
import { PermissionBase } from './permissions/base.permissions';
import { PermissionsFactory } from './permissions/factory.permissions';

@Injectable()
export class PermissionManagerService {
  private permissions: PermissionBase;

  constructor() {
    this.permissions = PermissionsFactory.getInstance();
  }

  isGranted(resource: Resource, permission: PermissionType) {
    for (const res of this.permissions.permissions) {
      if (resource == res.resource) {
        for (const perm of res.permissions) {
          if (perm == permission) {
            return true;
          }
        }
      }
    }
    return false;
  }

  authAs(role: Role) {
    localStorage.setItem('role', role === null ? Role.UNKNOWN : role);
    this.permissions = PermissionsFactory.getInstance();
  }
}
