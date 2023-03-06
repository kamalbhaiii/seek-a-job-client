import moment from "moment";

export const convertTime = (time, format) => {
  return moment(time).format(format);
};

export const convertTimeFromNow = (time, format) => {
  return moment(time, format).fromNow();
};

export const differenceBetweenTime = (time1, time2) => {
  return moment(time1).from(time2);
};
