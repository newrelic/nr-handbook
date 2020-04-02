|<img src="/MD/IMG/logo.png" alt="{MyCompany}" width="50%"> |[Home](/MD/readme.md)	| [Product Summary](/MD/product-summary.md) |[Account General](/MD/Account/Account.md)	| [Users & Roles](/MD/Account/UsersAndRoles.md) | [Programmability](/MD/Account/Programmability.md)	|  [Automation](/MD/Account/Automation.md) | [APM Lambda](/MD/Products/APMLambda.md) |
|:---:	|:---:	|:---:	|:---:	|:---:	|:---:	|:---:	|:---:	|
|Products	|[APM](/MD/Products/APM.md) |[Browser](/MD/Products/Browser.md)| [Synthetics](/MD/Products/Synthetics.md) |[Insights](/MD/Products/Insights.md) |[Alerts](/MD/Products/Alerts.md) | [Infrastructure](/MD/Products/Infrastructure.md) | [Logs](/MD/Products/Logs.md) |

# New Relic Handbook

# New Relic Users and Roles Best Practices

## Account Naming and User Access:
Reach out to the _@hero_ in the Slack Channel: _#new-relic-admins_ for help setting up your New Relic Account. We'll need the following info.

* Account Name following the format: {MyCompany} - YourTeamName
* List users who should be on your account in a CSV file formatted like below:

|  Email | Name  |  Base Role |  Add-On Roles
|---|---|---|---
|  user@{MyCompany} |  First Last | User  |  apm_admin, browser_admin 


With this information we will create the account you requested as a sub-account of CompanyName - Master Account. If you request an account - you will be made Admin of that account. It is your responsibility to manage user access beyond initial creation. With that said - please note that all users must be assigned the New Relic application in Okta. Reach out to the New Relic Admins team if any user cannot access New Relic.

## User Permissions
The _#new-relic-admins_ team manages user permissions. Reach out with details on the Users you'd like to change or add, along with the permissions they need. Similarly a CSV file formatted as above will help.

Note - Admin permissions are restricted to the _#new-relic-admins_ team. You can request access to any [Add-On role](https://docs.newrelic.com/docs/accounts/accounts/roles-permissions/add-roles-permissions).


## User Cascading Permissions
It is good to know as any user of New Relic, that in a large account structure with master and sub-accounts, that a users permissions will persist downward.

This means that any user named on a master account, will automatically have permission and priveleges on the master account and all sub-accounts. A user who is purely added to sub-account-1 - will only be able to view and make the permissions grants to sub-account-1. As such if a user needs to see data in sub-account-2, they should be added to that account separately. 

## Security Considerations
_**{MyCompany}**_ does not utilise [High Security Mode (HSM)](https://docs.newrelic.com/docs/agents/manage-apm-agents/configuration/high-security-mode) at this time. Though we do recommend you exercise caution when sending custom data to New Relic. Review the effects of HSM at the link above, and avoid sending the data that HSM disallows.

---

|<img src="/MD/IMG/logo.png" alt="{MyCompany}" width="50%"> |[Home](/MD/readme.md)	| [Product Summary](/MD/product-summary.md) |[Account General](/MD/Account/Account.md)	| [Users & Roles](/MD/Account/UsersAndRoles.md) | [Programmability](/MD/Account/Programmability.md)	|  [Automation](/MD/Account/Automation.md) | [APM Lambda](/MD/Products/APMLambda.md) |
|:---:	|:---:	|:---:	|:---:	|:---:	|:---:	|:---:	|:---:	|
|Products	|[APM](/MD/Products/APM.md) |[Browser](/MD/Products/Browser.md)| [Synthetics](/MD/Products/Synthetics.md) |[Insights](/MD/Products/Insights.md) |[Alerts](/MD/Products/Alerts.md) | [Infrastructure](/MD/Products/Infrastructure.md) | [Logs](/MD/Products/Logs.md) |

