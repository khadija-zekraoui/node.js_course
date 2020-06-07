var obj = { name: "khadija" };
console.log(Object.entries(obj).length == 0);

!appState.reportingData.policy ||
Object.entries(appState.reportingData.policy).length == 0
  ? (policy_id = "No policy provided")
  : (policy_id = appState.reportingData.policy.id);
