|<img src="/MD/IMG/logo.png" alt="{MyCompany}" width="50%"> |[Home](/MD/readme.md)	| [Product Summary](/MD/product-summary.md) |[Account General](/MD/Account/Account.md)	| [Users & Roles](/MD/Account/UsersAndRoles.md) | [Programmability](/MD/Account/Programmability.md)	|  [Automation](/MD/Account/Automation.md) | [APM Lambda](/MD/Products/APMLambda.md) |
|:---:	|:---:	|:---:	|:---:	|:---:	|:---:	|:---:	|:---:	|
|Products	|[APM](/MD/Products/APM.md) |[Browser](/MD/Products/Browser.md)| [Synthetics](/MD/Products/Synthetics.md) |[Insights](/MD/Products/Insights.md) |[Alerts](/MD/Products/Alerts.md) | [Infrastructure](/MD/Products/Infrastructure.md) | [Logs](/MD/Products/Logs.md) |

# New Relic Handbook

# New Relic Automation Best Practices

## Deployment Markers
If you have a deployment tool or service in use like Jenkins or DeployHQ or similar, you can utilise the post--successful-deploy hook to trigger an action. Deployment Markers are a key feature of New Relic APM and configuring your deployment tool to trigger this case is a set once and forget about it, yielding the benefit going forward.

[https://docs.newrelic.com/docs/apm/new-relic-apm/maintenance/record-monitor-deployments](https://docs.newrelic.com/docs/apm/new-relic-apm/maintenance/record-monitor-deployments)

Another good idea is potentially utilising another call to Insights API to insert a Custom Event of deployment information. You could utilise this on success and failure and sent this data to Insights to easily dashboard and alert on. Ensuring you can quickly see in one place the issues encountered when deploying and allowing you to create simple alerts if multiple failures may require manual intervention.

## Custom Attributes
We always suggest our customers use Deployment Markers to define a moment in time when a deploy was pushed. However for something like Canary deploys, phased rollouts or blue-green it may not be an ideal solution in all scenarios. As such we recommend that using custom attributes to define the version of an app. 

In New Relic, our deploy system injects the version number into the application as an environment variable and then in the code we use that environment variable to tag the version to the transaction data recorded by New Relic's agents. This makes it simple and easy to create insights dashboards that plot performance of the newly deployed parts of the application and the old application against each other before pushing again to a 100% deploy to all servers.

## Infrastructure

Setting up a New Relic Infrastructure agent on a single host is a pretty painless task. But doing that for 1,000 hosts? Less so. New Relic Infrastructure was designed to help enterprise customers monitor their large and dynamically changing environments at scale. That's why New Relic integrates with popular config management tools like **Chef**, **Puppet**, and **Ansible**.

You can also quickly deploy the agent on individual Windows or Linux hosts.

[Install New Relic Infrastructure using Config Management Tools](https://docs.newrelic.com/docs/infrastructure/new-relic-infrastructure/config-management-tools)

[Manual Infrastructure Install Linux](https://docs.newrelic.com/docs/infrastructure/new-relic-infrastructure/installation/install-infrastructure-windows-server)

[Manual Infrastructure Install Windows](https://docs.newrelic.com/docs/infrastructure/new-relic-infrastructure/installation/install-infrastructure-linux)

## api.newrelic.com 

Manually managing hundreds of alerts, dashboards, Synthetic monitors, cloud integrations, and more resources can be daunting. Thankfully, you can use APIs to help manage your New Relic entities, including basic CRUD operations.

[api.newrelic.com](https://api.newrelic.com)

## NerdGraph
NerdGraph, our GraphQL API, gives you the power to request the exact data you need without over-fetching or under-fetching. While typical REST APIs require loading from multiple URLs, NerdGraph calls get all the data you need in a single request.

[Nerdgraph - GraphQL](https://developer.newrelic.com/technology/graphql)
[Nerdgraph - GraphiQL Explorer](https://api.newrelic.com/graphiql)

## Automate Alert Response
One example of this may be when your system goes down and alerts fire, you can use webhooks to automate your issue response and remediation services.

Webhooks can be configured to point to any URL and even perform basic authentication and custom payload posting. To set up and manage webhooks, add them as a notification channel from New Relic Alerts. Webhooks are a useful way to utilise trigger event from New Relic alert tool to set a payload to a known tool or service which in turn can parse and take an action based on this. 

## CLI
One of New Relic's customers IBM, open sourced a CLI they built and made it available via their [GitHub](https://github.com/IBM/newrelic-cli) - Using this CLI you can Create/Edit/Delete Synthetics Monitors, Backup and Restore Synthetics Monitors, Create Edit and Delete Alert Conditions / Alert Policies / Notification Channels and Backup and Restore Alert Policies and Conditions. You can also Get Dashboard, Back Up Dashboard and Restore them. Finally you can list Users on your account.

https://blog.newrelic.com/engineering/new-relic-cli-ibm/

With New Relic's Programmability platform, you also have a NR1 CLI. This CLI is primarily for creating and publishing an App on New Relic's platform, however you can also execute NRQL Query from that CLI for quick questions from your laptop without a browser.

## Labels
Labels are increasingl powerful and with New Relic One will be something you can use to tag every entity with to create seamless correlation. One thing worth doing is trying to automate some of the identification elements around a application and script a solution to add the tagging for us. 

A basic example is production / staging / dev type applications. We may have multiple in each platform and all report to the same account. We should tag all these entities with the correct tag, but we often forget. Using a script to parse the appName you can check for common name schema's (if you already name your applications consistently this will be an obvious win) and  then apply the relevant tag. 

For example the below script iterates through all appNames and checks for those with `prod` in the name. Then it applies a tag of `Environment:Production` to that entity. This is a simple script but you could easily expand upon this to break out common naming convention and add to this script to make it automate your labelling.

```

var request = require("request");
 
var adminKey = "YOUR_ADMIN_KEY_HERE";
 
var headers = {
     "Content-Type": "json/application",
     "X-Api-Key": adminKey
};
 
var options = {
      url: "https://api.newrelic.com/v2/applications.json",
      method: 'GET',
      headers: headers
};
 
request(options,
   function(error, response, body) {
       if (error) return onErr(error);
       if (!error && response.statusCode == 200) {
       var result = JSON.parse(body);
       console.log('Number of applications found:'+result["applications"].length);
       for (var i = 0; i < result["applications"].length; ++i) {
       var application = result["applications"][i]
       var appName  = application["name"];
       var lowerCaseName = appName.toLowerCase();
 
       if (lowerCaseName.indexOf('prod')==-1) {
            console.log ('application name: '+application["name"]+' does not contain prod');
       }
       else{
            console.log('application name: '+application["name"]+' contains prod');
            addLabel(application);
       }
 
       }
       }
    });
 
function addLabel(application){
 
console.log ('application name: '+application["name"]+ ' application ID '+application["id"]);
  var request = require("request");
 
  var options = { method: 'PUT',
      url: 'https://api.newrelic.com/v2/labels.json',
      headers:
      {
      'X-Api-Key': adminKey,
      'Content-Type': 'application/json' },
      body:
      { label:
      { category: 'Environment',
            name: 'Production',
            links: { applications: [ application["id"] ] } } },
      json: true };
 
  request(options, function (error, response, body) {
     if (error) throw new Error(error);
 
    console.log(body);
  });
}
 
function onErr(err) {
     console.log(err);
     return 1;
}

```


## Apdex
Apdex is quite an interesting element in New Relic, it might seem very simple and just a number you may keep an eye on, but it adds additional power if set correctly. You're very unlikely to ever need a trace level detail for every single request, typically just the slow ones. New Relic uses Apdex in most default configurations to define what "Slow" is. 

If a transaction is 4 times it's applications Apdex T setting (or if it's marked as a Key Transactions, the level of the Apdex T of the Key Transaction) we attempt to capture a Transaction Trace. However if you badly set this Apdex setting you may get traces for transactions which are performing just fine, or potentially not capture trace data at all as the Apdex was too high.

This is why periodic checking of your Apdex is important and that actually is something that can be scripted. If we typically are looking for an Apdex score of 0.9 then a mathematical study showed that you need to know what the 80th percentile response time for your application is and set your Apdex T to that. The link below has a table that shows the correlated target and percentile to use.

https://blog.newrelic.com/engineering/api-auto-labeling-apdex-threshold/

Below is the script example. You could run this as a Synthetics Script or as a Node application on a cronjob. Running this at an agreed time at which reviewing the recent data makes sense will ensure your Apdex T setting doesn't fall behind. Some may run it every 24 hours. Others maybe once a week or month depending on how much your application performance moves over these time periods. If your application performance improves as you've used New Relic to find bottleneck, then the Apdex T may be now out of date and need updating.


```

var request = require("request");
 
var adminKey = "YOUR_ADMIN_KEY";
var ACCOUNT_ID = "YOUR_ACCOUNT_ID"
var QUERY_KEY = "YOUR_QUERY_KEY"
var desiredPercentile = “YOUR_VALUE”;
var headers = {
    "Content-Type": "json/application",
    "X-Api-Key": adminKey
};
 
var options = {
     url: "https://api.newrelic.com/v2/applications.json",
     method: 'GET',
     headers: headers
};
 
request(options,
   function(error, response, body) {
     if (error) return onErr(error);
     if (!error && response.statusCode == 200) {
       var result = JSON.parse(body);
       console.log('Number of applications found:'+result["applications"].length);
       for (var i = 0; i < result["applications"].length; ++i) {
       var application = result["applications"][i];
       console.log("App Settings: "+JSON.stringify(application["settings"]["end_user_apdex_threshold"]));
       var appName  = application["name"];
       var appId = application["id"];
       var browserApdexT = application["settings"]["end_user_apdex_threshold"];
       var RUMEnabled = application["settings"]["enable_real_user_monitoring"];
       console.log("RUM Enabled: "+RUMEnabled);
       var QUERY ='SELECT percentile(duration,'+desiredPercentile+') FROM Transaction WHERE appId =' +application["id"]+' SINCE 1 DAY AGO'
       console.log('QUERY is: '+QUERY);
       getResponseTime(QUERY,appId, appName, browserApdexT, RUMEnabled);
       }
     }
   });
 
function getResponseTime(QUERY, appId, appName,browserApdexT,RUMEnabled) {
 
     request({
     uri: `https://insights-api.newrelic.com/v1/accounts/${ACCOUNT_ID}/query?nrql=${QUERY}`,
     json: true,
     headers: {
       'X-Query-Key': QUERY_KEY
    }
   }, (error, response, body) => {
     if (error) {
       isError = true
       lastError = error.toString()
       isRunning = false
       return console.log(error)
     }
     if (response.statusCode !== 200) {
       isError = true
       lastError = JSON.stringify(body)
       isRunning = false
       return console.log(body, response.statusCode)
     }
     var result = JSON.stringify(body["results"]);
     console.log('Result:'+result);
     var duration = result.slice(result.lastIndexOf(":"),result.indexOf("}"));
     duration = duration.replace( /^\D+/g, ''); // replace all leading non-digits with nothing
     if(duration < 0.01){
       //duration = 0.01;
     }
     console.log('Duration:'+duration);
     setApdexT(duration,appId,appName,browserApdexT,RUMEnabled);
   });
}
 
function setApdexT(duration,appId,appName,browserApdexT,RUMEnabled){
  console.log("DURATION PASSED: "+duration);
 
var ApdexT = duration;
console.log("DURATION ROUNDED: "+ApdexT);
var EUApdexT = parseFloat(browserApdexT);
 
var data = JSON.stringify( {
   application:
         { name: appName,
           settings: {
             "app_apdex_threshold": ApdexT,
             "end_user_apdex_threshold": EUApdexT,
             "enable_real_user_monitoring": RUMEnabled
          }
        }
      });
 
console.log("+++***Settings Payload***+++: "+data);
 var options = { method: 'PUT',
    url: 'https://api.newrelic.com/v2/applications/'+appId+'.json',
    headers:
   {
     'X-Api-Key': adminKey,
     'Content-Type': 'application/json' },
     body: data
   };
 
 
  request(options,
  function(error, response, body) {
    if (error) return onErr(error);
    if (!error) {
      var result = JSON.parse(body);
      console.log("ERROR: "+response.statusCode+ " Message: "+response.body);
      }
    });
}
 
function onErr(err) {
    console.log(err);
    return 1;
}

```

---

|<img src="/MD/IMG/logo.png" alt="{MyCompany}" width="50%"> |[Home](/MD/readme.md)	| [Product Summary](/MD/product-summary.md) |[Account General](/MD/Account/Account.md)	| [Users & Roles](/MD/Account/UsersAndRoles.md) | [Programmability](/MD/Account/Programmability.md)	|  [Automation](/MD/Account/Automation.md) | [APM Lambda](/MD/Products/APMLambda.md) |
|:---:	|:---:	|:---:	|:---:	|:---:	|:---:	|:---:	|:---:	|
|Products	|[APM](/MD/Products/APM.md) |[Browser](/MD/Products/Browser.md)| [Synthetics](/MD/Products/Synthetics.md) |[Insights](/MD/Products/Insights.md) |[Alerts](/MD/Products/Alerts.md) | [Infrastructure](/MD/Products/Infrastructure.md) | [Logs](/MD/Products/Logs.md) |

