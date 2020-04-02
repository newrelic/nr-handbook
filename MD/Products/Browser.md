|<img src="/MD/IMG/logo.png" alt="{MyCompany}" width="50%"> |[Home](/MD/readme.md)	| [Product Summary](/MD/product-summary.md) |[Account General](/MD/Account/Account.md)	| [Users & Roles](/MD/Account/UsersAndRoles.md) | [Programmability](/MD/Account/Programmability.md)	|  [Automation](/MD/Account/Automation.md) | [APM Lambda](/MD/Products/APMLambda.md) |
|:---:	|:---:	|:---:	|:---:	|:---:	|:---:	|:---:	|:---:	|
|Products	|[APM](/MD/Products/APM.md) |[Browser](/MD/Products/Browser.md)| [Synthetics](/MD/Products/Synthetics.md) |[Insights](/MD/Products/Insights.md) |[Alerts](/MD/Products/Alerts.md) | [Infrastructure](/MD/Products/Infrastructure.md) | [Logs](/MD/Products/Logs.md) |

# New Relic Handbook

# New Relic Browser Best Practices

## Ensure usage of PRO+SPA Agent

When creating a New Relic Browser application manually OR when a Browser application reports in due to automatic injection of the New Relic Javascript by an APM agent, there are 3 options in level of data reported from the Browser Agent

* **LITE**
  - This will report only high level performance data, no deep dive data
* **PRO**
  - This agent is an older version of New Relics agent which captures a lot of critical information including AJAX requests, JS Errors, Session Traces and more
* **PRO+SPA**
  - Designed to add Single Page Application monitoring on top of the PRO level agent, this agent also captures Browser Interaction data, Sends AJAX and JS Errors to Insights as event data, Records W3C timing events in BrowserInteraction event type. 
  
It is recommended to use PRO+SPA in all cases. Each agent is a slightly larger JS snippet that is injected. So these is a marginally larger overhead but it typically only an additional 2-3 KB.

## Choose APM Injection where possible

The APM Agents from New Relic are designed to automatically inject the New Relic Browser JS when an output is sent back to a browser. This means less work to instrument your applications frontend and also helps ensure the link between frontend and backend data.

## If using Copy/Paste Option - Link Browser To APM

If you are using the manual **Copy/Paste Javascript** code to implement New Relic Browser in an application (perhaps the automatic injection from APM is not possible) - Ensure that you link your application to a backend service which serves it up. 

* Choose Yes (for is your app monitoring by New Relic APM)
* Search for the related application
* Select Correct App

This will help create the link back from the Browser snippet to the related APM backend service.

## Customise Apdex

As you may be using Apdex as a metric to alert upon, just like with APM, you should determine typical or expected performance for your applications frontend and set an appropriate Apdex setting.

## Use Custom Attributes

New Relic Browser API provides the ability to deliver custom attributes per PageView to New Relic to be used in the Insights analytics and data exploration.

[Browser Agent API - setCustomAttribute](https://docs.newrelic.com/docs/browser/new-relic-browser/browser-agent-spa-api/set-custom-attribute)

```javascript
  const service = 'carcontrol';
  // set it as a custom attribute delivered to New Relic
  newrelic.setCustomAttribute('service', service);
```

## Create and evaluate alert policies

As with APM. New Relic provides an alerting product which can create alerts based on any metric or event reporting from any of New Relic's products. We recommend setting up alerts to monitor your Apdex score, along with these sample alerts to get you started:

* Apdex score: - Alert if score is below 0.8 for 5 minutes. (If the Apdex score is below 0.8, that means 20% or more of your users are not “satisfied” with their experience on your website.)
* Page load time: - Alert if median page load time is above 10 seconds for 5 minutes. (If the median page load time begins to spike, that suggest that something may be wrong with your web page causing it to significantly slow down. This complements alerting on your Apdex score.)
* JS errors: - Alert if error rate is above 5% for 5 minutes. (If your frontend error rate starts spiking, particularly after a deployment, you may have introduced bad JavaScript into your frontend that should be fixed.)

## Control URL Grouping

Different websites have different URL architectures, which can vary depending on content structure, technology framework, or SEO strategy. For example:
website.com/product/widget-name . 
website.com/gallery?product=109832 . 
website.com/gallery/housewares/lamps/widget-name . 
website.com/product#widget-name . 

URL structure possibilities are endless, and New Relic Browser provides an automatic grouping algorithm to set categories for that data into different URL groups. While we have automatic grouping it may not always be perfect or ideal as the permutations of URLs are almost endless. In the event of your PageView sections or AJAX sections being grouped too much (you will see lots of segments rolled up to a `*` ), we provide you with a Whitelist Segments section to tell New Relic segments you don't want grouped.

* Go to rpm.newrelic.com/browser  > (select an app) > Settings > Segment whitelists.
* In the Whitelisted segments, select the plus  icon.
* Type the segments you want to appear in groupings on the Page views and AJAX pages.
* Enter domain segments (elements of the domain between dots) or path segments (elements of the URL path between slashes).

Example domain 
www.domain.com/section/12345/product/54321

In this example segments are `www`, `domain`, `com`, `section`, `12345`, `product` and `54321`
However since the url contains what appears to be unique IDs or account numbers. You will want to ignore them. As such you may enter `www`, `domain`, `com`, `section`, `product` as your segments into the Whitelist area.

## Make sure you get data only from the right sources - Domain Conditions

As is possible online, sometimes your frontend code may be stolen, or perhaps just fully cached by an external service (perhaps cache.google.com). In this case, the performance of the page may not be of interest as you didn't serve the content. 

Domain Conditions in New Relic allows you to define domains which ARE allowed to report to New Relic Browser or those which ARE NOT. Whichever is lesser is the ideal candidate to defining. 

* In New Relic Browser, select Settings > Domain conditions.
* If there are no domain conditions in place, select Enable domain conditions. If conditions exist, select Next, Choose your setting.
* Select Deny only or Allow only to identify the data you want collected from the domains you want monitored. Then select Next, Create conditions.
* Enter the domain string conditions that you want to deny or allow data collection (maximum 10 conditions).
* Review and confirm your domain condition settings.

# Browser Q&A

## Is it possible to determine the type of network connection?

For Browser, Network information is not particularly exposed as something that can be collected. As such we do not have this information in New Relic Browser by default. 

Some Browsers are working towards building a new API to support collection of Network Information. If this ever becomes cross browser, it definitely is something which could be a future metric for the product. 

https://www.afasterweb.com/2018/01/26/network-api/

https://developer.mozilla.org/en-US/docs/Web/API/Network_Information_API

http://wicg.github.io/netinfo/

If a Browser you monitor builds this into their latest versions, you do not need to wait for New Relic to implement as a feature. You could add a small snippet of Javascript that queries navigator.connection (based on the spec of the provided link above) and tag this data to New Relic using custom attributes. This is true of all runtime data the browser makes available to you.

---

|<img src="/MD/IMG/logo.png" alt="{MyCompany}" width="50%"> |[Home](/MD/readme.md)	| [Product Summary](/MD/product-summary.md) |[Account General](/MD/Account/Account.md)	| [Users & Roles](/MD/Account/UsersAndRoles.md) | [Programmability](/MD/Account/Programmability.md)	|  [Automation](/MD/Account/Automation.md) | [APM Lambda](/MD/Products/APMLambda.md) |
|:---:	|:---:	|:---:	|:---:	|:---:	|:---:	|:---:	|:---:	|
|Products	|[APM](/MD/Products/APM.md) |[Browser](/MD/Products/Browser.md)| [Synthetics](/MD/Products/Synthetics.md) |[Insights](/MD/Products/Insights.md) |[Alerts](/MD/Products/Alerts.md) | [Infrastructure](/MD/Products/Infrastructure.md) | [Logs](/MD/Products/Logs.md) |