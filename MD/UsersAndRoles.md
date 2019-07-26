<img src="https://newrelic.com/assets/newrelic/source/NewRelic-logo-square.png" alt="New Relic" width="100px">


# New Relic - Acme Corp Handbook.

## Account Naming and User Access:
Reach out to the _@hero_ in the Slack Channel: _#new-relic-admins_ for help setting up your New Relic Account. We'll need the following info.

* Account Name following the format: Acme Corp - YourTeamName
* List users who should be on your account in a CSV file formatted like below:

|  Email | Name  |  Base Role |  Add-On Roles
|---|---|---|---
|  user@acmecorp.com |  First Last | User  |  apm_admin, browser_admin 


With this information we will create the account you requested as a sub-account of CompanyName - Master Account. If you request an account - you will be made Admin of that account. It is your responsibility to manage user access beyond initial creation. With that said - please note that all users must be assigned the New Relic application in Okta. Reach out to the New Relic Admins team if any user cannot access New Relic.

---

## User Permissions
The _#new-relic-admins_ team manages user permissions. Reach out with details on the Users you'd like to change or add, along with the permissions they need. Similarly a CSV file formatted as above will help.

Note - Admin permissions are restricted to the _#new-relic-admins_ team. You can request access to any [Add-On role](https://docs.newrelic.com/docs/accounts/accounts/roles-permissions/add-roles-permissions).

---

## Security Considerations
_**CompanyName**_ does not utilise [High Security Mode (HSM)](https://docs.newrelic.com/docs/agents/manage-apm-agents/configuration/high-security-mode). Though we do recommend you exercise caution when sending custom data to New Relic. Review the effects of HSM at the link above, and avoid sending the data that HSM disallows.

We utilise SSO through [Okta](https://okta.com) to New Relic. When you request an account, you must supply the users who need access to that account. They must get assigned access to New Relic in Okta.

Every user must login via Okta with their regular Okta credentials. If you encounter any problems with that, message in _#new-relic-admins_. SSO is configured at the _**CompanyName - Master Account**_ level, and will be inherited by your account. You do not need to configure SSO in your account.

---



|[Home](https://source.datanerd.us/rveitch/handbook/MD/home.md)	|[Users & Roles](UsersAndRoles.md)	|[Apps & Deploys](Apps%26Deploys.md)	|[Recommended Alerts](Alerts.md)	|[Custom Data & Dashboards](DashboardEvents.md)	|  [Support](support.md) |
|:---:	|:---:	|:---:	|:---:	|:---:	|:---:	|
