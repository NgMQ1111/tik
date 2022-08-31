import * as httpRequest from "~/untils/httpRequest";

export const getFollowingAcc = async ({ page }) => {
    try {
      const res = await httpRequest.get("me/followings", {
        params: {
          page,
        },
      });
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };