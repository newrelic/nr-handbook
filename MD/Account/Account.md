|<img src="/MD/IMG/logo.png" alt="{MyCompany}" width="50%"> |[Home](/MD/readme.md)	| [Product Summary](/MD/product-summary.md) |[Account General](/MD/Account/Account.md)	| [Users & Roles](/MD/Account/UsersAndRoles.md) | [Programmability](/MD/Account/Programmability.md)	|  [Automation](/MD/Account/Automation.md) | [APM Lambda](/MD/Products/APMLambda.md) |
|:---:	|:---:	|:---:	|:---:	|:---:	|:---:	|:---:	|:---:	|
|Products	|[APM](/MD/Products/APM.md) |[Browser](/MD/Products/Browser.md)| [Synthetics](/MD/Products/Synthetics.md) |[Insights](/MD/Products/Insights.md) |[Alerts](/MD/Products/Alerts.md) | [Infrastructure](/MD/Products/Infrastructure.md) | [Logs](/MD/Products/Logs.md) |

# New Relic Handbook

# New Relic Accounts Best Practices

## Data Storage Location
{PrimaryAccount} is a Master Account within New Relic. It is based in New Relic's {DataCenter}.

There are two options in terms of data storage in New Relic, US Data Center in Chicago or New Relic's EMEA Data Center in Germany. Most New Relic customers are stored in Chicago as our primary data centre. When creating a new account in New Relic, you now get a choice on the signup page about where you would prefer your account to be stored and held. EU or US. 

Typically data collected is nothing more than performance metrics and events and would not contain any information considered sensitive which would require a specific data centre, however some customers have had a preference for storing their data in our EU Data centre. If your account is based in the US or EU and you would like to move to a different data center, this would require a fresh start on a clean account, involving adjusting the license key in your New Relic agents from the old account to the new account in the correct data center. If this is something you wish to pursue, please advise your account representative.

## Sub Accounts
In the Accounts Setting page it is easy to create sub-accounts. This allows you to break out accounts into teams or regions or Production vs Testing vs Development. 

Any sub account inherits the licensing permissions of the master account and it's usage contributed to the overall license usage in New Relic. A user named on a master account will have permission to see all sub accounts. A user named on a sub-account only, will only be able to see that sub accounts data. 

## API Keys
Each account has it's own API Keys. 

There is one global read only API Key which will function for interacting with the API's read options. 
There is also an Admin API key which is required for any higher privelege functions like create, update and delete.

There are account level API's and allow you to interact with your account information, alert information, application entity data, Synthetics information and more.

Insights has it's own API key system, in Insights there is a **Manage Data** section. In this section there are multiple tabs, one of which is API Keys. Here you can generate read only, or INSERT key's for use with Insights API endpoints. If you want to send external data to insights, the INSERT API Key is a requirement.

## Weekly summary emails 
New Relic provides a weekly summary email about the application performance and recent events. 

https://rpm.newrelic.com/accounts/1432838/sample_email?email=weekly_report

## Time Zone
All Dashboards are time zone based and not UTC. The default time zone in the user preferences is EST and has to be changed in almost every case.

You can adjust your timezone by choosing
 -> Top Right Account Dropdown
 -> User Preferences
 -> Time Zone Dropdown Option
 -> Save

## Support
By now you have probably set up your New Relic account, and you may even have data reporting already, which is awesome! If not, or if you run into any issues along the way, that's OK too. Below are some available resources for you to get help.

1. Reach out in _#new-relic-admins_ if you have questions about anything in this handbook.
2. For continuous learning with New Relic, sign up for an account & some courses in the [New Relic University](https://learn.newrelic.com/)
3. Search your question in the [New Relic Explorers Hub](https://discuss.newrelic.com/), or the [New Relic Documentation portal](https://docs.newrelic.com/).
4. If you cannot find an answer with the above resources, post your question to the [Explorers Hub](https://discuss.newrelic.com/) where other New Relic users, along with New Relic staff can help.

## New Relic Support

**How To File A Support Ticket**
* Go to [https://support.newrelic.com/](https://support.newrelic.com/)
* Login with your account
* Click on "Create Ticket" (Found between View Ticket and View Community Links)
* Select the corresponding account to file the ticket against
* Choose your topic or assistance required
* Choose a descriptive subject
* Add a full robust description of the issue you are encountering

    - Key Information around the account, the product you need help with. 
    
    - Technical information around the issue. Steps you have already attempted. Any documentation you may have already referenced, logs if possible. Screenshots if UI based 
    
    - Providing the above information will help support narrow down potential issues quicker and get better answers back to you.
    
* Respond in timely manner if there are questions from the support

* Close the ticket if the support case is solved

---

|<img src="/MD/IMG/logo.png" alt="{MyCompany}" width="50%"> |[Home](/MD/readme.md)	| [Product Summary](/MD/product-summary.md) |[Account General](/MD/Account/Account.md)	| [Users & Roles](/MD/Account/UsersAndRoles.md) | [Programmability](/MD/Account/Programmability.md)	|  [Automation](/MD/Account/Automation.md) | [APM Lambda](/MD/Products/APMLambda.md) |
|:---:	|:---:	|:---:	|:---:	|:---:	|:---:	|:---:	|:---:	|
|Products	|[APM](/MD/Products/APM.md) |[Browser](/MD/Products/Browser.md)| [Synthetics](/MD/Products/Synthetics.md) |[Insights](/MD/Products/Insights.md) |[Alerts](/MD/Products/Alerts.md) | [Infrastructure](/MD/Products/Infrastructure.md) | [Logs](/MD/Products/Logs.md) |

