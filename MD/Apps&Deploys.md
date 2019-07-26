<img src="IMG/logo.png" alt="YourLogo" width="15%">


# Your Company - New Relic Handbook

## Application Naming Schema
We will occasionally audit New Relic accounts. This audit will check for, among other things, account structures and application naming.

Please ensure your applications are named appropriately. Your application names should include the service being monitored, the environment being monitored, and any additional detail, such as region/etc.. This blog post explains the use of great App Names. The format Your Company follows is:

> _Service Name - Environment - AdditionalDetail_

For example:

> _Login Service - Production - APAC_

### Labels -
Labels add an additional layer of searchability within New Relic. Ensure you utilise appropriate labels for your applications, specifically with regard to Region, and Environment. Examples below.

> _Environment:Production_

> _Region:EU_

With labels like this, you can both filter to the applications that matter to you in the index page, and you can also bulk target alerts by label, to capture your entire environment with the same conditions.

---

## Agent Configuration
Please ensure the following attibutes are set appropriately in your agent configuration file. NOTE: The Syntax below is accurate for the Java APM agent, please be sure to follow the [appropriate syntax](https://docs.newrelic.com/docs/agents/manage-apm-agents/configuration/configure-agent#agent-config) if you utilise a different language agent.

* `app_name = My Application`
* `license_key = 'xxxxxxxxxxxx'`
* `high_security: false`
* `enable_auto_transaction_naming: true`
* `record_sql: obfuscated`

You can get your license key from your account settings page: https://rpm.newrelic.com/accounts/{your_account_id}

---

## Keep your applications up to date
Please keep your application agents up to date. New Relic regularly releases new features and bug fixes through new agent versions. You can verify your APM agent versions with this NRQL query:

```sql
SELECT apmAppName, apmAppId, apmLanguage, apmAgentVersion FROM NrDailyUsage WHERE productLine = 'APM' AND usageType = 'Application' SINCE 1 day AGO
```

---

## Deployment Markers
Deployment Markers are crucial to understanding the performance impact your deployments have. You are required to include a detailed Changelog/Decription

* [New Relic Docs for Recording Deployments.](https://docs.newrelic.com/docs/apm/new-relic-apm/maintenance/record-deployments)

---

## Key Transactions
Basic New Relic APM Monitoring is great, however if you need to track the performance of individual transactions, utilising Key Transactions is the best way. It is recommended that you use Key Transactions to track your slowest transactions while you perform changes to boost the performance of these transactions. You should ensure you are alerting on these transactions, and have an appropriate Apdex Threshold configured for these.

* [New Relic Docs for Key Transactions](https://docs.newrelic.com/docs/apm/transactions/key-transactions/introduction-key-transactions)

---

|[Home](readme.md)	|[Users & Roles](UsersAndRoles.md)	|[Apps & Deploys](Apps%26Deploys.md)	|[Recommended Alerts](Alerts.md)	|[Custom Data & Dashboards](DashboardEvents.md)	|  [Support](support.md) |
|:---:	|:---:	|:---:	|:---:	|:---:	|:---:	|
