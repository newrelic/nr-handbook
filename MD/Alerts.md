<img src="https://newrelic.com/assets/newrelic/source/NewRelic-logo-square.png" alt="New Relic" width="100px">


# New Relic - Acme Corp Handbook.

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

### Notification Channels -
Notification channels are crucial to alerting. Please ensure you have set up appropriate channels, and you monitor those channels for alerts. 

If you need any service Webhook URL, please contact the @hero in #ask-it with your purpose, and requirements, IT will work with you to get the data you need.

> NOTE: Mobile push notifications are available - you'll need to install and log into the New Relic mobile applications (iOS / Android)

### Incident Preference -
Incident preference is crucial to your Alerts set up. There are 3 Incident Preference options, each with differing levels of notification verbosity.

_By Policy_
- Any violation, of any condition in a policy, is rolled up into 1 incident.

_By Condition_
- Violations of individual conditions roll up into 1 incident per condition.

_By Condition and Entity_
- Violations are rolled up into individual incidents per target entity.

Read more on Incident Preference, and ensure you are set up correctly here: [Incident Preference: The key to consistent alert notifications](https://discuss.newrelic.com/t/relic-solution-alert-incident-preferences-are-the-key-to-consistent-alert-notifications/40867), along with here: [Specify when New Relic creates incidents](https://docs.newrelic.com/docs/alerts/new-relic-alerts/configuring-alert-policies/specify-when-new-relic-creates-incidents)

---

## Defined SLA Metrics
Based on the metrics you are alerting on, it is recommended that you set your own standards. Acme Corporation uses the following metrics to define our SLAs, which you can create an Insights dashboard to view

**Uptime** 

* Monitored by Synthetics. We strive for 99% uptime. The below insights query can show you yours based on a Synthetics Monitor
```sql
SELECT percentage(count(*), WHERE result = 'SUCCESS') FROM SyntheticCheck WHERE monitorName = 'myMonitor'SINCE 1 DAY AGO
```

**Response Time**

 * Monitored by APM. The below Insights Query can also help with average Transaction response times for a given app.
 ```sql
SELECT average(duration)FROM Transaction WHERE appName = 'myAppName'SINCE 1 DAY AGO
```

**Error Rate**
* Monitored by APM & Browser

These are the basic defaults Acme Corp recommends you use. That said, we recommend you add more metrics depending on the applications you are monitoring. For example, Storefront applications should send attributes mapping to revenue generation & potential for lost revenue.

For example, errors occuring on purchase pages can represent potential lost revenue. You should also utilise funnel queries to view cases where the shopping cart page was abandoned prior to purchase.

---

|[Home](https://source.datanerd.us/rveitch/handbook/MD/home.md)	|[Users & Roles](UsersAndRoles.md)	|[Apps & Deploys](Apps%26Deploys.md)	|[Recommended Alerts](Alerts.md)	|[Custom Data & Dashboards](DashboardEvents.md)	|  [Support](support.md) |
|:---:	|:---:	|:---:	|:---:	|:---:	|:---:	|
