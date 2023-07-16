import query_string from "query-string";
import { typeRegister, ResourceString, ResourceType } from "types";
import { httpClient, HttpError } from "../utils";
import { TypeGuard } from "../utils";

const apiUrl = process.env.BACKEND_URL;

export interface GetListParams<T> {
  range?: number[];
  sort?: { [K in keyof T]?: "ASC" | "DESC" };
  filter?: Partial<T>;
}

export interface GetOneParams {
  id: number;
}

export interface UpdateParams<T> {
  id: string | number;
  data: Partial<T>;
}

export interface UpdateManyParams<T> {
  ids: (string | number)[];
  data: Partial<T>;
}

export interface CreateParams<T> {
  data: Partial<T>;
}

export interface DeleteParams {
  id: string | number;
}

export interface DeleteManyParams {
  ids: (string | number)[];
}

interface SimpleRequestOptions {
  method?: "POST" | "GET" | "DELETE";
  body?: any;
  json?: boolean;
}

const tGS = new TypeGuard(typeRegister);

export const dataProvider = {
  getList: async <R extends ResourceString>(
    resource: ResourceString,
    params: GetListParams<ResourceType<R>> = {}
  ) => {
    const { sort, filter, range } = params;

    const query = {
      sort: JSON.stringify(sort),
      range: JSON.stringify(range),
      filter: JSON.stringify(filter),
    };

    const url = `${apiUrl}/${resource}?${query_string.stringify(query)}`;

    const resp = await httpClient(url);

    if (!tGS.hasCount(resp) || !tGS.hasData(resp)) {
      throw Error("Unexpected response");
    }

    const { data, count } = resp;

    if (!tGS.isGenericArray<R>(data, resource)) {
      throw Error("Unexpected response");
    }
    return { data, count };
  },

  getOne: async <R extends ResourceString>(
    resource: ResourceString,
    params: GetOneParams
  ) => {
    const url = `${apiUrl}/${resource}/${params.id}`;
    const resp = await httpClient(url);
    if (!tGS.hasData(resp)) {
      throw Error("Unexpected response object");
    }

    const data = resp.data;

    if (!tGS.isGeneric<R>(data, resource)) {
      throw Error("Unexpected response object");
    }
    return { data };
  },

  update: async <R extends ResourceString>(
    resource: ResourceString,
    params: UpdateParams<ResourceType<R>>
  ) => {
    const url = `${apiUrl}/${resource}/${params.id}`;
    const resp = await httpClient(url, {
      method: "PUT",
      body: JSON.stringify(params.data),
    });

    if (!tGS.hasData(resp)) {
      throw Error("Unexpected response object");
    }

    const data = resp.data;

    if (!tGS.isGeneric<R>(data, resource)) {
      throw Error("Unexpected response object");
    }

    return { data };
  },

  create: async <R extends ResourceString>(
    resource: string,
    params: CreateParams<ResourceType<R>>
  ) => {
    const url = `${apiUrl}/${resource}`;
    const resp = await httpClient(url, {
      method: "POST",
      body: JSON.stringify(params.data),
    });
    if (tGS.hasData(resp)) {
      return resp;
    }
    throw Error("Unexpected response object");
  },

  delete: (resource: string, params: DeleteParams) => {
    const url = `${apiUrl}/${resource}/${params.id}`;
    return httpClient(url, {
      method: "DELETE",
    });
  },

  deleteMany: async (resource: string, params: DeleteManyParams) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    const url = `${apiUrl}/${resource}?${query_string.stringify(query)}`;
    return httpClient(url, {
      method: "DELETE",
    });
  },

  simpleRequest: async (url: string, options: SimpleRequestOptions = {}) => {
    const { method = "GET", body, json = false } = options;

    const headers = new Headers();

    const accessToken = localStorage.getItem("access_token");
    if (accessToken) {
      headers.set("Authorization", `Bearer ${accessToken}`);
    }

    if (json) {
      headers.set("Content-Type", "application/json");
    }

    const resp = await fetch(url, {
      headers,
      method,
      body: body ? JSON.stringify(body) : undefined,
    });

    if (resp.ok) {
      return resp;
    }
    throw new HttpError(resp.status, await resp.text());
  },
};
