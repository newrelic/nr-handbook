|<img src="/MD/IMG/logo.png" alt="{MyCompany}" width="50%"> |[Home](/MD/readme.md)	| [Product Summary](/MD/product-summary.md) |[Account General](/MD/Account/Account.md)	| [Users & Roles](/MD/Account/UsersAndRoles.md) | [Programmability](/MD/Account/Programmability.md)	|  [Automation](/MD/Account/Automation.md) | [APM Lambda](/MD/Products/APMLambda.md) |
|:---:	|:---:	|:---:	|:---:	|:---:	|:---:	|:---:	|:---:	|
|Products	|[APM](/MD/Products/APM.md) |[Browser](/MD/Products/Browser.md)| [Synthetics](/MD/Products/Synthetics.md) |[Insights](/MD/Products/Insights.md) |[Alerts](/MD/Products/Alerts.md) | [Infrastructure](/MD/Products/Infrastructure.md) | [Logs](/MD/Products/Logs.md) |

# New Relic Handbook

# New Relic Logs Best Practices

## Logs Best Practices
New Relic launched logging as a new product in Autumn 2019. It's a scalable logging solution that is powered by the biggest Observability database NRDB, which powers New Relic Insights. 

It scales without management as it doesn't require management or creation of indexes. The UI feels familiar and easy to use. It allows you to tie logs together in context of the application producing them and quickly jump from your monitoring windows to logs and see what was happening at the time of the issue you were investigating. Just from traces and errors and kubernetes pods data to logs in one click.

It's an almost instant search results, returns queries in milliseconds and is entirely cloud native. You can alert on your log data with the same powerful alerting tools you're familiar with for your APM/Browser/Infrastructure data.

## How Do I Get Log Data Into New Relic
With a full set of plugins for all of the major open source log shippers, including Logstash, FluentD, and Fluent Bit, onboarding and deployment are simple. Leverage this feature to use open source log filters.

New Relic Logs also integrates with the large cloud providers well, with plugins for AWS Cloudwatch, Firelens and Kubernetes. Send log data simply, to the platforms you already use. 

Fluentd is our recommended option if you have not already implemented an open source tool although we have plugins for Fluent Bit and Logstash aswell if you have a preference.

You also have the option of a HTTP input of logging if you prefer not to use a plugin. This allows you to send your monitored log data directly to New Relic Logs via the [Logging API](https://docs.newrelic.com/docs/introduction-new-relic-logs-api)

## I am an AWS Customer and have interest in Cloudwatch Logs or Firelens Container Logs
Good news we have integrations built for both AWS Firelens and the Cloudwatch Logs. 

https://docs.newrelic.com/docs/logs/new-relic-logs/enable-logs/enable-new-relic-logs-aws-firelens

https://docs.newrelic.com/docs/logs/new-relic-logs/enable-logs/enable-new-relic-logs-aws-cloudwatch

## I have Kubernetes Cluster log data I want to import
Using Fluent Bit we have an output plugin to connect your Kubernetes Cluster Log Data to New Relic Logs in just a few steps.

https://docs.newrelic.com/docs/logs/new-relic-logs/enable-logs/enable-new-relic-logs-kubernetes

## Fluentd Plugin Example
If you are already using FluentD, FluentBit or LogStash you may already have your tool pointed at the correct logs and purely need to use the output plugin to send the data to New Relic. Once the fluent-gem or td-agent-gem is installed you will amend the configuration file to use either your New Relic License Key or API Key to ensure permission of the data onto your account.

## How Can I Check For Log Data
Once data has been received it will be accessible via Insights like every event driven metric in New Relic. 

```sql

SELECT * FROM Log

```

## Application Logs In Context
When you application is generating its own logging, perhaps you're using a tool like DropWizard, Logback, Log4J, Serilog, NLog, Logrus or maybe you've baked your own. When using New Relic Logs you can correlate the logs to a trace quickly by using Logs in Context. Right now this is a BETA feature (November 2019) but once GA, each agent will have extensions for the logging tool or guides on adding Trace Context to your Application Logs. 

This will allow you to quickly view pertinent logs from a trace relevant to a specific error or Distributed Trace or request passing through a Kubernetes Cluster. 

## Parsing Logs
As the current tools to bring log data into New Relic are open source tools, this means typically there are a lot of examples both on the tools website and online through general technical hubs around parsing specific log files.

For custom logs you may need to write your own parser to capture the log into more useful segments. You can always just tail a log and output the full log message into New Relic Logs as `message` however Logs UI with search, filter option are more powerful when the parsing of the logs is broken out into its useful parts. 

https://fluentbit.io/documentation/0.12/parser/

### Grok Parse
One of the more popular parsing tools is the Grok parser. If you are using Fluent you can utilise the Grok Parser to help you more quickly create a parsing command for your logs. There is plenty of documentation online regarding Grok however the key items to know if you decide you want to use Grok are.

1. Fluentd Grok parser: https://github.com/fluent/fluent-plugin-grok-parser
2. Install the parser: td-agent-gem install fluent-plugin-grok-parser
3. Use the Heroku Grok debugger: https://grokdebug.herokuapp.com/https://grokdebug.herokuapp.com/ or perhaps https://grokconstructor.appspot.com/do/match

Some examples: https://github.com/newrelic/logstash-examples / https://github.com/newrelic/fluentd-examples  

# Questions And Answers

**Is Logging stored in the US only?**

No like your normal account data, if your account is US based, it will be stored in the US. If you have an EU based account, your data is stored in the EU.

**Can you build dashboards using the log data**

Yes, all your data is stored in Insights as an event Log as such you can create NRQL queries, widgets and dashboards as per any other event data type in New Relic.

**What the heck is Grok (or RegEx)?**
RegEx stands for Regular Expression, it is a way to search for patterns in text, and is used in logging to comprehend the individual parts of a log message. For example, pulling a timestamp, IP, and message from a line of text. This is the parsing step of log ingestion, and this is also how we can attach attributes to log data. (Insights!) 
Grok is a way of simplifying the use of RegEx to make pattern matching much more accessible and human readable. You would use a grok parsing plugin for fluentD, and create parsing rules in the fluentD config file. This also allows you to define something that shouldn't be sent (such as PII) which may have made it into your logs. 

**What if I didn't configure it to block specific matches PII and it's been sent to New Relic**
You can file a support ticket at support.newrelic.com if data is sensitive and requires deletion

New Relic is investigating options to parse and block data from being ingested from the UI as a future goal.

**Should we use this for security or compliance or auditing**
Maximum retention is 30 days. New Relic Logs is built for fast problem resolution in real time with your application data. This is unlikely to be an ideal option for New Relic Logs.

**How do I index my log data**
Due to the power of NRDB. Indexing is not neccessary.  NRDB is a multi-tenant map-reduce database that searches all of your logs for all occurrences of the thing you’re looking for.

**Is there a size limit on the log**
Each attribute sent up has a 4000 character limit. If you break your logs up using the parsing, you should hopefully not hit this limit with the exception of some stack traces.

**Can we use a proxy**
Proxy must be set for Fluentd or Logstash. This is not related to the New Relic exporter.

The environment variables for Fluentd are http_proxy and https_proxy.

```
export http_proxy=http://localhost:3128
```

JVM options can be added to the jvm.options file for Logstash as follows:

```
-Dhttp.proxyHost=http://fakeproxy.com
-Dhttp_proxyPort=8080
```





|<img src="/MD/IMG/logo.png" alt="{MyCompany}" width="50%"> |[Home](/MD/readme.md)	| [Product Summary](/MD/product-summary.md) |[Account General](/MD/Account/Account.md)	| [Users & Roles](/MD/Account/UsersAndRoles.md) | [Programmability](/MD/Account/Programmability.md)	|  [Automation](/MD/Account/Automation.md) | [APM Lambda](/MD/Products/APMLambda.md) |
|:---:	|:---:	|:---:	|:---:	|:---:	|:---:	|:---:	|:---:	|
|Products	|[APM](/MD/Products/APM.md) |[Browser](/MD/Products/Browser.md)| [Synthetics](/MD/Products/Synthetics.md) |[Insights](/MD/Products/Insights.md) |[Alerts](/MD/Products/Alerts.md) | [Infrastructure](/MD/Products/Infrastructure.md) | [Logs](/MD/Products/Logs.md) |