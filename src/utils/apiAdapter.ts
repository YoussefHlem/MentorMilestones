// apiAdapter.ts
import { notification } from "@/models/notifications";
import axios, { AxiosResponse } from "axios";

const apiClient = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1/",
});

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
}

export interface ApiRequest {
  endpoint: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  payload?: any;
}

export async function apiAdapter<T>({
  endpoint,
  method,
  payload,
}: ApiRequest): Promise<ApiResponse<T>> {
  try {
    let response: AxiosResponse<T>;

    switch (method) {
      case "GET":
        response = await apiClient.get(endpoint);
        break;
      case "POST":
        response = await apiClient.post(endpoint, payload);
        break;
      case "PUT":
        response = await apiClient.put(endpoint, payload);
        break;
      case "DELETE":
        response = await apiClient.delete(endpoint);
        break;
      default:
        throw new Error(`Unsupported request method: ${method}`);
    }

    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    console.error(`API request failed: ${error}`);

    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error occurred",
    };
  }
}
