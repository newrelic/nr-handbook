|<img src="/MD/IMG/logo.png" alt="{MyCompany}" width="50%"> |[Home](/MD/readme.md)	| [Product Summary](/MD/product-summary.md) |[Account General](/MD/Account/Account.md)	| [Users & Roles](/MD/Account/UsersAndRoles.md) | [Programmability](/MD/Account/Programmability.md)	|  [Automation](/MD/Account/Automation.md) | [APM Lambda](/MD/Products/APMLambda.md) |
|:---:	|:---:	|:---:	|:---:	|:---:	|:---:	|:---:	|:---:	|
|Products	|[APM](/MD/Products/APM.md) |[Browser](/MD/Products/Browser.md)| [Synthetics](/MD/Products/Synthetics.md) |[Insights](/MD/Products/Insights.md) |[Alerts](/MD/Products/Alerts.md) | [Infrastructure](/MD/Products/Infrastructure.md) | [Logs](/MD/Products/Logs.md) |

# New Relic Handbook

# New Relic Alerts Best Practices

## Policy Focus

Creation of Alert Policies should always be orchestrated around WHO will be notified. Each policy has a defined set of notification channels. If you want alerts to personally notify you, a new / separate policy should be configured.

Typically we advocate for creation of policies around the teams who need to be notified about groups of services. Inside that policy, conditions for different types of metrics related to the apps they are responsible for are defined,  at levels which they would take an action on.

A naming convention for alert policies should also be employed so it's clear what each policy is for.

* Team A - Frontend Services
* Team A - Backend Services
* Team B - Uptime Monitoring

## Recommended Alerts
Your monitoring requirements are different to others, that said, to ensure you get started successfully - it is recommended you have some basic alert conditions configured.

|[APM](https://docs.newrelic.com/docs/apm/new-relic-apm/guides/new-relic-apm-best-practices-guide#alerts)	|[Browser](https://docs.newrelic.com/docs/browser/new-relic-browser/guides/new-relic-browser-best-practices-guide#alerts-policies)	|[Synthetics](https://docs.newrelic.com/docs/synthetics/new-relic-synthetics/using-monitors/alerting-synthetics)	|[Mobile](https://docs.newrelic.com/docs/mobile-monitoring/new-relic-mobile/getting-started/alert-information-new-relic-mobile)	|[Infrastructure](https://docs.newrelic.com/docs/infrastructure/new-relic-infrastructure/infrastructure-alert-conditions/infrastructure-alerts-add-edit-or-view-host-alert-information)	|
|:---:	|:---:	|:---:	|:---:	|:---:	|
|  Low Apdex  | Low Apdex | Business critical monitor failures | Interaction load times  	| Host/process not reporting  	|
| High Response times  	|   High JS Error Rates	|   NRQL (Multi Location failure) _[NRQL below]_	|   Crash Rate	|  Used Storage 	|
|   Low Throughput	| High Page Load Times  | 	| Network Errors   	| CPU Usage  |

_NRQL Query for Synthetics - Alerting on multiple location failures:_

```sql
SELECT uniqueCount(locationLabel) FROM SyntheticCheck WHERE monitorName = 'myMonitor' AND result = 'FAILED'
```

> **NOTE: This alert must be configured as: SUM of Values goes above X in X minutes.**

## Notification Channels -
Notification channels are crucial to alerting. Please ensure you have set up appropriate channels, and you monitor those channels for alerts. 

If you need any service Webhook URL, please contact the @hero in #ask-it with your purpose, and requirements, IT will work with you to get the data you need.

> NOTE: Mobile push notifications are available - you'll need to install and log into the New Relic mobile applications (iOS / Android)

## Incident Preference -
Incident preference is crucial to your Alerts set up. There are 3 Incident Preference options, each with differing levels of notification verbosity.

_By Policy_
- Any violation, of any condition in a policy, is rolled up into 1 incident.

_By Condition_
- Violations of individual conditions roll up into 1 incident per condition.

_By Condition and Entity_
- Violations are rolled up into individual incidents per target entity.

Read more on Incident Preference, and ensure you are set up correctly here: [Incident Preference: The key to consistent alert notifications](https://discuss.newrelic.com/t/relic-solution-alert-incident-preferences-are-the-key-to-consistent-alert-notifications/40867), along with here: [Specify when New Relic creates incidents](https://docs.newrelic.com/docs/alerts/new-relic-alerts/configuring-alert-policies/specify-when-new-relic-creates-incidents)

## Warning and Critical Levels
There are two levels of alerts in New Relic, Warning and Critical.

A **warning level** alert is informational, the UI is painted with yellow on the graphs at the time where such a threshold is exceeded. No alert notifications are fired.

A **critical level** alert is at a level where action is neccessary. As such should be set at a level where if above, you would take an action on the notification.

Any level can be defined to only alert if Above/Below/Equal to the required level for X period of time. If you would only take action if the issue is persisting, make use of the X period of time to ensure you're only notified if the metric is violating the threshold for longer than the allowable period of time.

## Regular Review
Reviewing your Alert Policies and Conditions should become a habit. If you are notified about an alert which is not something with you would take an action on immediately, this alert condition likely requires updating.

KPIs and performance of applications change over time. A valid KPI or performance level for alert today, may not be true in 30 days time. Therefore as part of any review process for your application, meaningful checks on the levels currently set for alerts is prudent and will help to avoid alert fatigue.

## Runbooks
Possibly the simplest concept in alerting but also probably the most powerful. Each service or team should maintain a runbook for their service. This should serve as a simple point of information for an on-call member to understand things they should do, actions they should take.

If someone is paged for an issue at 3am, they may be tired, groggy and not at 100% operational speed. Downtime and issues cost companies millions of dollars each year, by having a defined Runbook regardless of state of mind, the expected actions and steps and quick links to troubleshooting apps, dashboard, guides on application architecture, on-call managers and escalation processes mean that memory and ambiguity are taken away and simplicity of action remains.

New Relic strongly recommends Runbooks. They can be defined in Google Docs, or internal blogs/wiki's and links to in the condition so each alert notification has the link for someone answering the call to quickly review.

## Defined SLA Metrics
Based on the metrics you are alerting on, it is recommended that you set your own standards. We suggest using the following metrics to define basic SLAs, which you can create an Insights dashboard to view

**Uptime** 

* Monitored by Synthetics. We strive for 99% uptime. The below insights query can show you yours based on a Synthetics Monitor
```sql
SELECT percentage(count(*), WHERE result = 'SUCCESS') FROM SyntheticCheck WHERE monitorName = 'myMonitor' SINCE 1 DAY AGO
```

**Response Time**

 * Monitored by APM. The below Insights Query can also help with average Transaction response times for a given app.
 ```sql
SELECT average(duration)FROM Transaction WHERE appName = 'myAppName' SINCE 1 DAY AGO
```

**Error Rate**
* Monitored by APM & Browser
```sql
SELECT filter(count(*), WHERE `error.message` IS NOT null)*100 / filter(count(*), WHERE duration IS NOT null) FROM Transaction, TransactionError WHERE appNameId = {your_app_name}
```

These are the basic defaults {MyCompany} recommends you use. That said, we recommend you add more metrics depending on the applications you are monitoring. For example, Storefront applications should send attributes mapping to revenue generation & potential for lost revenue.

For example, errors occurring on purchase pages can represent potential lost revenue. You should also utilise funnel queries to view cases where the shopping cart page was abandoned prior to purchase.



---

|<img src="/MD/IMG/logo.png" alt="{MyCompany}" width="50%"> |[Home](/MD/readme.md)	| [Product Summary](/MD/product-summary.md) |[Account General](/MD/Account/Account.md)	| [Users & Roles](/MD/Account/UsersAndRoles.md) | [Programmability](/MD/Account/Programmability.md)	|  [Automation](/MD/Account/Automation.md) | [APM Lambda](/MD/Products/APMLambda.md) |
|:---:	|:---:	|:---:	|:---:	|:---:	|:---:	|:---:	|:---:	|
|Products	|[APM](/MD/Products/APM.md) |[Browser](/MD/Products/Browser.md)| [Synthetics](/MD/Products/Synthetics.md) |[Insights](/MD/Products/Insights.md) |[Alerts](/MD/Products/Alerts.md) | [Infrastructure](/MD/Products/Infrastructure.md) | [Logs](/MD/Products/Logs.md) |
