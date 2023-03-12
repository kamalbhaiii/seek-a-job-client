import moment from "moment";
import DateDiff from "date-diff";

export const convertTime = (time, format) => {
  return moment(time).format(format);
};

export const convertTimeFromNow = (time, format) => {
  return moment(time, format).fromNow();
};

export const dateDiffMonths = (time1, time2) => {
  let diff = new DateDiff(time2 ? time2 : new Date(), time1);
  return Math.ceil(diff.months());
};

export const dateDiffYears = (time1, time2) => {
  let diff = new DateDiff(time2 ? time2 : new Date(), time1);
  return diff.years();
};
