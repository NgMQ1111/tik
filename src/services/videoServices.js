import * as httpRequest from "~/untils/httpRequest";

export const getHomeVideo = async ({ type, page}) => {
  try {
    const res = await httpRequest.get("videos", {
      params: {
        type,
        page
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
