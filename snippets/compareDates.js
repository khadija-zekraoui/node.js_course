var moment = require("moment");
let date1 = new Date("2020-03-25");
let date2 = new Date("2020-02-25");
let date3 = new Date("2020-10-30");

console.log("IsBetween: ", moment(date1).isBetween(date2, date3));
moment(new Date(reportingDate)).isBetween(new Date(appState.reportingData.policy.initial_date), new Date(appState.reportingData.policy.expiration_date));
