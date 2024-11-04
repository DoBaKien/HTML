import axios from "axios";

// Định nghĩa kiểu dữ liệu trả về của API
export interface TagType {
  id: number;
  name: string;
}

export const getTag = async (): Promise<TagType[]> => {
  try {
    const response = await axios.get<{ data: TagType[] }>("/tags");
    return response.data.data;
  } catch (error) {
    throw new Error("Error fetching data" + error);
  }
};
