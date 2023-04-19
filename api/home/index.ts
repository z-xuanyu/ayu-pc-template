import request from "@/utils/http";

export function getHomeData(params: any) {
  return request.get("/report", params);
}

// 获取详细信息
export function getDetail(id: string) {
  return request.get(`/report/${id}`);
}
