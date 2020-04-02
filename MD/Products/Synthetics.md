|<img src="/MD/IMG/logo.png" alt="{MyCompany}" width="50%"> |[Home](/MD/readme.md)	| [Product Summary](/MD/product-summary.md) |[Account General](/MD/Account/Account.md)	| [Users & Roles](/MD/Account/UsersAndRoles.md) | [Programmability](/MD/Account/Programmability.md)	|  [Automation](/MD/Account/Automation.md) | [APM Lambda](/MD/Products/APMLambda.md) |
|:---:	|:---:	|:---:	|:---:	|:---:	|:---:	|:---:	|:---:	|
|Products	|[APM](/MD/Products/APM.md) |[Browser](/MD/Products/Browser.md)| [Synthetics](/MD/Products/Synthetics.md) |[Insights](/MD/Products/Insights.md) |[Alerts](/MD/Products/Alerts.md) | [Infrastructure](/MD/Products/Infrastructure.md) | [Logs](/MD/Products/Logs.md) |

# New Relic Handbook

# New Relic Synthetics Best Practices

## Match Your Monitor Type With Your Needs
With Synthetics there are two types of monitors.

**Free (Synthetics Ping)**
This is the most basic type of Synthetics monitor. It's FREE to all accounts, if you do not subscribe to New Relic Synthetics license, you can create a maximum of 50 PING Monitors for free. If you are a licensed user of Synthetics, Ping Monitors are theoretically unlimited.

If you purely need to monitor if a URL is up and responding, a Synthetics Ping monitor may be enough for that specific task. It will make a request to the assigned URL at the agreed frequency and only upon failure to get a response trigger an issue. 

**Premium (Synthetics Simple Browser, Scripted Browser and API Test)**
Each of these premium monitors serves a specific functionality to solve for specific use cases.

*Simple Browser* - This is a elevated monitor when compared with PING. It simulates a full chrome browser, loads the page fully and tracks and times all elements and assets on the page from the locations you asked it to check from (We have 18 locations worldwide). This lets you check from a highly available machine (no open tabs or other applications slowing the browser down) and a highly connected location (strong network connection for every minion check) how your website loads. If it's slow for Synthetics it's pretty much guaranteed to be slow for end users in a less optimal scenario.

*Scripted Browser* - Scripted Browser adds functionality on to the Simple Browser, it too simulates a full chrome browser, but allows you to create a script based largely on Selenium to simulate a user action to navigate through or take actions or tests on your site. If they do not function as intended, alert the correct person.

*API Test* - API Test is the inverse of Simple and Scripted. It allows you to script an interaction with an API. No browser is spun up, all communication is via network calls and you can simulate a sent data load and capture and parse the response for validation.

[https://docs.newrelic.com/docs/synthetics/new-relic-synthetics/guides/new-relic-synthetics-best-practices-guide](https://docs.newrelic.com/docs/synthetics/new-relic-synthetics/guides/new-relic-synthetics-best-practices-guide)

## Save Time - Use A Recorder
New Relic has partnered with popular script recorder Katalon to help make building a Synthetics Script quicker and easier. The tool allows you to record a session where you take actions on a webpage within a Chrome or Firefox browser and based on what you do, type, click, navigate to. It will record and translate that into a script. 

New Relic has added a Synthetics Exporter to allow you to quickly translate from Katalon to Synthetics and get right to work.

https://discuss.newrelic.com/t/katalon-script-recorder-provides-option-to-export-to-synthetics/71903

## Private Locations
In the event you have a location in the world you wish to test from that New Relic does not support, or services behind a firewall not open to public access. There is the option to add Private Locations to your license. This will allow you to take a containerised version of the New Relic minion and place it somewhere useful. Whether that's on an internal network which you configure it to report externally via a proxy server, or situationed on a cloud provider in a region where you wish to test access from. Private Locations is a quick and simple scalable solution to achieve this. 

## Use Labels
If you have a lot of Synthetics Monitors, use labels to group and identify them more easily. By tagging then with customer, team, site, responsibility, region - You can quickly filter to the monitors you require.

## Use The Resource Timing Information
One thing that comes highly recommended is to identify some slow pages using New Relic Browser and point a Synthetics Simple Browser monitor at these slow pages.

This will help you see if they are slow for customers with good internet connections and powerful machines. If it is slower than anticipated, you can then utilise the full resource timing information to see each asset type and understand where the time was spent on each asset to help it load. This will help you quickly identify resources which require attention and solve for the problems that exist for customers regardless of their machine or network speed which it outside your control.

## Permissions
Permissions is an additional control over your users who may be creating, editing or deleting your Synthetics scripts. You can control permission to each monitor and create groups of users and decide which monitors they can see, which they can edit and delete. You also can decide for this group whether they can see private locations or create monitor downtime or use the secure credentials feature.

This makes control of access of Synthetics really simple and granular and ensures only people with accurate permissions could access your Scripted Browser scripts or create Secure Credentials.

## Secure Credentials
Secure Credentials is a feature which allows you to define a key/value pair which is saved securely and made available to you in your Synthetics Scripts for use. This allows you to pass API Keys, Passwords and other sensitive information to a script for use without having to store the sensitive value in a plain text script which is not encrypyted.

If using sensitive values in your scripts we highly recommend using Secure Credentials.

## Monitor Downtime 
If you have known downtime or maintenance, you may find notifications regarding the status of a checked endpoint or URL annoying and also find it to alter your uptime percentages as calculated by the monitor.

Monitor Downtime allows you to configure a window, during which the monitors will not run their checks, ensuring no false alerts and no impact on your data.

# Synthetics Questions And Answer

**How to handle timeout settings right?**

We’re using `$browser.waitForPendingRequests();` but seeing still sometime that
request timeout.

Request Timeout is set to 60 seconds for Ping/Simple monitors and 180 seconds
for Scripted/API monitors. This can currently not be customized. We are looking into
shipping a containerized version of the private minions that will allow more flexibility
(see information in our community [here](https://discuss.newrelic.com/t/feature-description-containerized-private-minions/54418)).

**How to provide Passwords / Secrets secure?**

A new feature called “Secure Credentials” is now Generally Available. This feature allows you to securely define Key/Value pairs for storage away from Synthetics Scripts which are unencrypted. 

As this feature is available it is Best Practice to ensure any API Keys, Password, Usernames or anything considered a security risk or PII to be stored as a Secure Credential and then refereced in the scripts when needed.

https://docs.newrelic.com/docs/synthetics/new-relic-synthetics/using-monitors/secure-credentials-store-credentials-information-scripted-browsers

**How to setup alerts with certain conditions e.g. failing twice?**
This could be achieved today using NRQL alerts. For example:

```SQL
SELECT count(*) FROM SyntheticCheck WHERE result != ‘SUCCESS’ AND
monitorName = ‘myMonitor’
```

Or perhaps multiple locations failing (Creating a NRQL alert where count > number of locations you want to alert if failures exist from.

```SQL
SELECT uniqueCount(locationLabel) FROM SyntheticCheck WHERE result != ‘SUCCESS’ AND
monitorName = ‘myMonitor’
```

**Is it possible to deploy own dependencies to the node scripts?**

Not possible with public locations but will be possible with the containerized minion.

**Is there a way to detail the reason why a monitor has failed, detailed notifications?**

As for Ping/Simple, this is not quite possible. The attribute “responseStatus” in
Insights (table SyntheticRequest) or the “error” attribute in SyntheticCheck might
provide a hint. For Scripted and API this could be as part of the script.

**Is SLA Monitoring reasonable through synthetics due to a lot measure points or better through
APM?**

Very reasonable to have SLA monitoring through Synthetics. Not only for your own
applications (with or without APM installed), but also maybe for external services.

---

|<img src="/MD/IMG/logo.png" alt="{MyCompany}" width="50%"> |[Home](/MD/readme.md)	| [Product Summary](/MD/product-summary.md) |[Account General](/MD/Account/Account.md)	| [Users & Roles](/MD/Account/UsersAndRoles.md) | [Programmability](/MD/Account/Programmability.md)	|  [Automation](/MD/Account/Automation.md) | [APM Lambda](/MD/Products/APMLambda.md) |
|:---:	|:---:	|:---:	|:---:	|:---:	|:---:	|:---:	|:---:	|
|Products	|[APM](/MD/Products/APM.md) |[Browser](/MD/Products/Browser.md)| [Synthetics](/MD/Products/Synthetics.md) |[Insights](/MD/Products/Insights.md) |[Alerts](/MD/Products/Alerts.md) | [Infrastructure](/MD/Products/Infrastructure.md) | [Logs](/MD/Products/Logs.md) |
