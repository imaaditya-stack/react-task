import cogoToast from "cogo-toast";

export const showToast = (type, msg) => {
  type === "success" && cogoToast.success(msg);
  type === "error" && cogoToast.error(msg);
};
