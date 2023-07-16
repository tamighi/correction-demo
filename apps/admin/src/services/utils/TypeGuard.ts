import { ResourceString, ResourceType } from "types";

type NestedTypeGuardRegister<T extends object | undefined> = { instance: T } & {
  [K in keyof T]?: T[K] extends object
    ? object | undefined
    : T[K] extends Array<object> | undefined
    ? T[K] | NestedTypeGuardRegister<T[K]>
    : never;
};

type TypeGuardObject<K extends ResourceString> =
  | ResourceType<K>
  | NestedTypeGuardRegister<ResourceType<K>>;

export type TypeGuardRegister = {
  [K in ResourceString]: TypeGuardObject<K>;
};

// TODO: Need to be possible to have an entity with instance in it !
// TODO: Clean this mess
export class TypeGuard {
  private readonly typeObjects: TypeGuardRegister;

  constructor(typeObjects: TypeGuardRegister) {
    this.typeObjects = typeObjects;
  }

  isGeneric<R extends ResourceString>(
    obj: unknown,
    resource: ResourceString
  ): obj is ResourceType<R> {
    const typeObject = this.typeObjects[resource];

    if ("instance" in typeObject) {
      //  Iterate over typeObject
      return Object.keys(typeObject).every((k) => {
        if (k === "instance") {
          return this.checkTypeSafety(obj, typeObject.instance);
        } else {
          const instance = (typeObject as any)[k];
          if (instance instanceof Array) {
            return this.checkArray((obj as any)[k], instance[0])
          } else {
            return this.checkTypeSafety((obj as any)[k], instance);
          }
        }
      });
    } else {
      return this.checkTypeSafety(obj, typeObject);
    }
  }

  isGenericArray<R extends ResourceString>(
    obj: unknown,
    resource: ResourceString
  ): obj is ResourceType<R>[] {
    if (!(obj instanceof Array)) {
      return false;
    }

    const typeObject = this.typeObjects[resource];

    if ("instance" in typeObject) {
      //  Iterate over typeObject
      return this.checkArray(obj, typeObject.instance);
    } else {
      return this.checkArray(obj, typeObject);
    }
  }

  hasCount = (obj: unknown): obj is { count: number } => {
    return (
      obj !== null &&
      typeof obj === "object" &&
      "count" in obj &&
      typeof obj.count === "number"
    );
  };

  hasData = (obj: unknown): obj is { data: object } => {
    return obj !== null && typeof obj === "object" && "data" in obj;
  };

  private checkArray(obj: unknown, instance: object): boolean {
    if (!(obj instanceof Array)) {
      return false;
    }

    if (obj.length === 0) {
      return true;
    }

    // check only one item
    return this.checkTypeSafety(obj[0], instance);
  }

  private checkTypeSafety(obj: unknown, generic: object): boolean {
    if (!obj) {
      return false;
    }
    const objKeys = Object.keys(obj);

    return Object.keys(generic).every((key) => {
      if (
        !objKeys.includes(key) ||
        typeof (obj as any)[key] !== typeof (generic as any)[key]
      ) {
        return false;
      }
      return true;
    });
  }
}
