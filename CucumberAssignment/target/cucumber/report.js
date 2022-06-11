$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Login.feature");
formatter.feature({
  "line": 2,
  "name": "TechFios Billing Login Functionality validation",
  "description": "",
  "id": "techfios-billing-login-functionality-validation",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2829711800,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "1 User should be able to login with valid credentials",
  "description": "",
  "id": "techfios-billing-login-functionality-validation;1-user-should-be-able-to-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@logintag"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on the TechFios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters \"username\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters \"password\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User clicks signin button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User should land on the dashboard page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_the_TechFios_login_page()"
});
formatter.result({
  "duration": 67086700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "username",
      "offset": 13
    }
  ],
  "location": "LoginStepDefination.user_enters(String)"
});
formatter.result({
  "duration": 369220400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 13
    }
  ],
  "location": "LoginStepDefination.user_enters(String)"
});
formatter.result({
  "duration": 114835500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_signin_button()"
});
formatter.result({
  "duration": 1082774800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_should_land_on_the_dashboard_page()"
});
formatter.result({
  "duration": 59773500,
  "status": "passed"
});
formatter.after({
  "duration": 728515000,
  "status": "passed"
});
});