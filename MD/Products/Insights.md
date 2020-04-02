|<img src="/MD/IMG/logo.png" alt="{MyCompany}" width="50%"> |[Home](/MD/readme.md)	| [Product Summary](/MD/product-summary.md) |[Account General](/MD/Account/Account.md)	| [Users & Roles](/MD/Account/UsersAndRoles.md) | [Programmability](/MD/Account/Programmability.md)	|  [Automation](/MD/Account/Automation.md) | [APM Lambda](/MD/Products/APMLambda.md) |
|:---:	|:---:	|:---:	|:---:	|:---:	|:---:	|:---:	|:---:	|
|Products	|[APM](/MD/Products/APM.md) |[Browser](/MD/Products/Browser.md)| [Synthetics](/MD/Products/Synthetics.md) |[Insights](/MD/Products/Insights.md) |[Alerts](/MD/Products/Alerts.md) | [Infrastructure](/MD/Products/Infrastructure.md) | [Logs](/MD/Products/Logs.md) |


# New Relic Handbook

# New Relic Insights Best Practices

[https://docs.newrelic.com/docs/insights/use-insights-ui/guides/new-relic-insights-best-practices-guide](https://docs.newrelic.com/docs/insights/use-insights-ui/guides/new-relic-insights-best-practices-guide)

## Explore your data

In Insights we give you a section called Data Explorer, it's often overlooked but it shouldn't be. This feature allows you to navigate through the data sets each products and custom events are sending in. 

To build good dashboards, we should know what we're working with and exploring is the best place to start. A blue dropdown guides you to a specific event type and you can see samples of the data, click into and group data by specific attributes. It event adapts and generates the NRQL query in the query area to help you see how you would return this data outside the explorer.

## Try out NRQL queries

NRQL is not something to be feared, it's actually quite simple. For anyone with any experience of SQL, it should be a walk in the park, as it doesn't have some of the more complex features of SQL. It's designed to answer a question with a simple answer and do it FAST.

You cannot break insights by trying to write a query and we would absolutely encourage you to try. If you click on the Query option on the left navbar you will see a Black Box where you can begin writing queries. If you need to learn a bit before that I would recommend

https://insights.newrelic.com/accounts/{AccountID}/query?hello=analyze

In the Analyse section you will see a BASIC and ADVANCED tab option. This is actually a learning tool in order to help show you what answering a question about your data looks like in NRQL and even lets you try the query to see the results. It walks you through all the key functions and all the key visualisations. It's a really great quick way to learn.

If you like to have a simple reference page for all the functions available in your NRQL query language, see the below document.

https://docs.newrelic.com/docs/query-data/nrql-new-relic-query-language/getting-started/nrql-syntax-components-functions

We also have a fantastic set of learning videos to be found at learn.newrelic.com

https://learn.newrelic.com/#product-23_insights


## Pin charts from other New Relic products

If you haven't seen it already. Any chart in the New Relic UI can be added to a Dashboard, it's super simple, select the 3 dots menu option top right of a graph and select Add To Insights Dashboards. 

## Create dashboard notes

Adding widgets, graphs, charting your data is the bread and butter of Insights. However did you know that you can add a note to give context to your graphs and intention of the dashboard. 

Top right of every dashboard is the option to add a dashboard note. Also in New Relic One, the enhanced Insights experience allows you to click to edit your dashboard -> Add A Widget -> Add Text / Images / Links -> This will give you a live Markdown editor to create a custom dashboard note and place it on the dashboard.

## Designate dashboards as favorites

We all have our favourites in everything in life and we all know that we have some specific Go To dashboard that help use improve our day to day and make life easier. Now you can make getting to your favourite dashboard easier. In the original New Relic Insights UI, a `STAR` near the dashboard title can be clicked to make it a favourite and it will then appear in the Insights UI navigation bar on the left.

In New Relic One, the favourite `STAR` is in a similar location and the on the one.newrelic.com and under the tiles should be your favourite entities and dashboards.

## Apply a filter to a dashboard

Insights Dashboards are most powerful when you utilise the filtering ability of the dashboards. When you have a common attribute to a source of data, a filter on Insights will drill down to give you a more custom view of your data. 

In New Relic One there is a filter bar across the top. This allows quick and easy filtering to a specific value. 

On both New Relic One and Original Insights Dashboards in widgets that group by an attribute, you have the option to make that widget a filter link. This makes the widget clickable and the filter gets directly applied and enables you to more quickly filter. It's also good 

Finally on Original Insights when you click edit, you can enable filters and choose attributes you wish to filter by. You will need to choose the event types these attributes are from and then select the relevant attributes. Once complete this will give you a search box beside the dashboard title which you can use to manually filter a dashboard utilising your selected attributes.


## Build a data app

Filtering is really great way of getting to the data you need to still. Drilling down and pivoting in interesting ways. Data Apps allow you to clone dashboards into a unique experience and then apply filters across multiple and if you have a large dataset even high the dashboard until a filter has been set.

This is being re-imagined for New Relic One and will likely take the form of tabbed dashboards instead of a separate area for data apps. Making the interface more intuitive.


## Automatically create/update dashboards
Use dashboard API to automatically create/update dashboards: useful for
making sure that for every new app/service there is a base set of dashboards
available as a starting point. More information [here](https://docs.newrelic.com/docs/insights/insights-api/manage-dashboards/insights-dashboard-api).

Insights has it's own API key system, in Insights there is a **Manage Data** section. In this section there are multiple tabs, one of which is API Keys. Here you can generate read only, or INSERT key's for use with Insights API endpoints. If you want to send external data to insights, the INSERT API Key is a requirement.

**create dashboards as entry point to drilldown insights**
Dashboards can be used to define entry points where you can easily navigate to the area of interest and or responsiblity.

See Dashboards section below for JSON you can import via our API to quickly get up and running with some sample dashboards.

## Custom Attribute and Formatting Best Practice
{MyCompany} encourages that you tag custom data in your applications to report to New Relic. This data can potentially be useful runtime data or business data which can then be dashboardedrequires that you follow some basic standards like below;

* Take note of [reserved words and attribute limitations.](https://docs.newrelic.com/docs/insights/insights-data-sources/custom-data/insights-custom-data-requirements-limits)
* Use [camelCase](https://simple.wikipedia.org/wiki/CamelCase) for your attribute names.
* Check out the [instructions for sending custom data](https://docs.newrelic.com/docs/insights/insights-data-sources/custom-data/send-custom-data-insights)

Data can be send attached to existing event data from APM, Browser, Infrastructure flowing to New Relic, or you can create and send custom data types to standalone and store data. 

### Custom Events

If you have a data set that is separate or unique from application event data. There is an option to store that information separate in it's own Event Table. This is called Custom Events. Every Agent has the ability to send Custom Event data and you can also utilise New Relic's REST API's to insert Custom Events as output via CURL calls.


---

## Dashboards

Below are some prebuilt dashboards - built and provided by New Relic. Feel free to create your own dashboards in your account with NRQL references below

**Dashboard: Availability and Uptime - SLA Overview [[SOURCE]](https://discuss.newrelic.com/t/relic-dashboard-availability-and-uptime-sla-overview/61561):**

<details>
<summary>
<i>Availability and Uptime</i>
</summary>

```json
{
  "dashboard": {
    "title": "Availability and Uptime - SLA Overview",
    "description": null,
    "icon": "bar-chart",
    "visibility": "all",
    "editable": "editable_by_all",
    "metadata": {
      "version": 1
    },
    "widgets": [
      {
        "visualization": "markdown",
        "layout": {
          "width": 1,
          "height": 1,
          "row": 1,
          "column": 2
        },
        "data": [
          {
            "source": "Visit [this forum post](https://discuss.newrelic.com/t/availability-and-uptime-sla-overview/61561) for more info!"
          }
        ],
        "presentation": {
          "title": "",
          "notes": null
        }
      },
      {
        "visualization": "markdown",
        "layout": {
          "width": 3,
          "height": 1,
          "row": 2,
          "column": 1
        },
        "data": [
          {
            "source": "# Synthetics"
          }
        ],
        "presentation": {
          "title": "",
          "notes": null
        }
      },
      {
        "visualization": "facet_table",
        "layout": {
          "width": 1,
          "height": 1,
          "row": 3,
          "column": 1
        },
        "data": [
          {
            "nrql": "SELECT percentage(count(*), WHERE result='SUCCESS') FROM SyntheticCheck WHERE monitorName LIKE '%Check%' SINCE 1 day ago FACET monitorName"
          }
        ],
        "presentation": {
          "title": "1 Day Uptime",
          "notes": "The percentage of successful synthetics checks made in the last day for a specific monitor.",
          "drilldown_dashboard_id": null
        }
      },
      {
        "visualization": "facet_table",
        "layout": {
          "width": 1,
          "height": 1,
          "row": 3,
          "column": 2
        },
        "data": [
          {
            "nrql": "SELECT percentage(count(*), WHERE result='SUCCESS') FROM SyntheticCheck WHERE monitorName LIKE '%Check%' SINCE 1 week ago FACET monitorName"
          }
        ],
        "presentation": {
          "title": "1 Week Uptime",
          "notes": "The percentage of successful synthetics checks made in the last week for a specific monitor.",
          "drilldown_dashboard_id": null
        }
      },
      {
        "visualization": "facet_table",
        "layout": {
          "width": 1,
          "height": 1,
          "row": 3,
          "column": 3
        },
        "data": [
          {
            "nrql": "SELECT percentage(count(*), WHERE result='SUCCESS') FROM SyntheticCheck WHERE monitorName LIKE '%Check%' SINCE 1 month ago FACET monitorName"
          }
        ],
        "presentation": {
          "title": "1 Month Uptime",
          "notes": "The percentage of successful synthetics checks made in the last month for a specific monitor.",
          "drilldown_dashboard_id": null
        }
      },
      {
        "visualization": "facet_table",
        "layout": {
          "width": 2,
          "height": 1,
          "row": 4,
          "column": 1
        },
        "data": [
          {
            "nrql": "SELECT count(*),average(duration), percentage(count(*), WHERE result='SUCCESS') as 'Uptime' FROM SyntheticCheck FACET monitorName SINCE 1 month ago"
          }
        ],
        "presentation": {
          "title": "Synthetics Full Details",
          "notes": "The number of, average duration (ms), and percentage of successful Synthetics checks made in the last month faceted by monitor name.",
          "drilldown_dashboard_id": null
        }
      },
      {
        "visualization": "faceted_line_chart",
        "layout": {
          "width": 1,
          "height": 1,
          "row": 4,
          "column": 3
        },
        "data": [
          {
            "nrql": "SELECT percentage(count(*), WHERE result='SUCCESS') FROM SyntheticCheck facet monitorName  SINCE 1 month ago TIMESERIES"
          }
        ],
        "presentation": {
          "title": "Uptime",
          "notes": "Timeseries chart of the percentage of successful Synthetics checks faceted by monitor name."
        }
      },
      {
        "visualization": "facet_table",
        "layout": {
          "width": 2,
          "height": 1,
          "row": 5,
          "column": 1
        },
        "data": [
          {
            "nrql": "SELECT count(*), percentage(count(*), WHERE result ='SUCCESS')  as 'Uptime' FROM SyntheticCheck SINCE today FACET locationLabel LIMIT 100"
          }
        ],
        "presentation": {
          "title": "Location Uptime",
          "notes": "The count and percent of successful Synthetics checks faceted by monitor location.",
          "drilldown_dashboard_id": null
        }
      },
      {
        "visualization": "faceted_line_chart",
        "layout": {
          "width": 1,
          "height": 1,
          "row": 5,
          "column": 3
        },
        "data": [
          {
            "nrql": "SELECT apdex(duration, t: 500) FROM SyntheticCheck SINCE last week FACET monitorName TIMESERIES AUTO"
          }
        ],
        "presentation": {
          "title": "Apdex",
          "notes": "Timeseries chart of Apdex scores faceted by monitor name."
        }
      },
      {
        "visualization": "faceted_line_chart",
        "layout": {
          "width": 3,
          "height": 1,
          "row": 6,
          "column": 1
        },
        "data": [
          {
            "nrql": "SELECT average(duration) FROM SyntheticCheck FACET monitorName SINCE 1 month ago TIMESERIES"
          }
        ],
        "presentation": {
          "title": "Average Duration",
          "notes": "Average duration of each monitor's Synthetic checks over the last month."
        }
      },
      {
        "visualization": "markdown",
        "layout": {
          "width": 3,
          "height": 1,
          "row": 7,
          "column": 1
        },
        "data": [
          {
            "source": "# APM"
          }
        ],
        "presentation": {
          "title": "",
          "notes": null
        }
      },
      {
        "visualization": "gauge",
        "layout": {
          "width": 1,
          "height": 1,
          "row": 8,
          "column": 1
        },
        "data": [
          {
            "nrql": "SELECT percentage(count(*), WHERE error is false) from Transaction since 1 day ago"
          }
        ],
        "presentation": {
          "title": "APM Health",
          "notes": "Percent of transactions without errors over the last day.",
          "threshold": {
            "red": 100
          }
        }
      },
      {
        "visualization": "gauge",
        "layout": {
          "width": 1,
          "height": 1,
          "row": 8,
          "column": 2
        },
        "data": [
          {
            "nrql": "SELECT apdex(duration, t: 0.4) from Transaction since 1 day ago"
          }
        ],
        "presentation": {
          "title": "Apdex",
          "notes": "Duration, T: 0.4\n\nApdex score over last day.",
          "threshold": {
            "red": 1
          }
        }
      },
      {
        "visualization": "faceted_line_chart",
        "layout": {
          "width": 1,
          "height": 1,
          "row": 8,
          "column": 3
        },
        "data": [
          {
            "nrql": "SELECT apdex(duration, t: 0.4) from Transaction since 1 week ago TIMESERIES facet name"
          }
        ],
        "presentation": {
          "title": "Apdex over Time",
          "notes": "Apdex score faceted by application name over the last week"
        }
      },
      {
        "visualization": "markdown",
        "layout": {
          "width": 3,
          "height": 1,
          "row": 9,
          "column": 1
        },
        "data": [
          {
            "source": "# Infrastructure\n"
          }
        ],
        "presentation": {
          "title": "",
          "notes": null
        }
      },
      {
        "visualization": "gauge",
        "layout": {
          "width": 1,
          "height": 1,
          "row": 10,
          "column": 1
        },
        "data": [
          {
            "nrql": "SELECT average(cpuPercent) FROM SystemSample since 3 hours ago"
          }
        ],
        "presentation": {
          "title": "Server CPU",
          "notes": "Average CPU Utilization Percentage over the last 3 hours.",
          "threshold": {
            "red": 100
          }
        }
      },
      {
        "visualization": "gauge",
        "layout": {
          "width": 1,
          "height": 1,
          "row": 10,
          "column": 2
        },
        "data": [
          {
            "nrql": "SELECT max(diskUsedPercent) as 'Percent Full' FROM StorageSample since 1 minute ago"
          }
        ],
        "presentation": {
          "title": "Disk Utilization",
          "notes": "Maximum disk usage percentage over the last minute.",
          "threshold": {
            "red": 100
          }
        }
      },
      {
        "visualization": "gauge",
        "layout": {
          "width": 1,
          "height": 1,
          "row": 10,
          "column": 3
        },
        "data": [
          {
            "nrql": "SELECT average(memoryUsedBytes) / average(memoryFreeBytes) * 100 as 'Memory Utilization' FROM SystemSample since 10 minutes ago"
          }
        ],
        "presentation": {
          "title": "Memory Utilization",
          "notes": "Average percentage of memory in use over the last 10 minutes.",
          "threshold": {
            "red": 100
          }
        }
      },
      {
        "visualization": "facet_bar_chart",
        "layout": {
          "width": 1,
          "height": 1,
          "row": 11,
          "column": 1
        },
        "data": [
          {
            "nrql": "SELECT average(cpuPercent) FROM SystemSample since 3 hours ago facet hostname limit 400"
          }
        ],
        "presentation": {
          "title": "Server CPU List",
          "notes": "Average CPU utilization over the last 3 hours faceted by host name.",
          "drilldown_dashboard_id": null
        }
      },
      {
        "visualization": "line_chart",
        "layout": {
          "width": 1,
          "height": 1,
          "row": 11,
          "column": 2
        },
        "data": [
          {
            "nrql": "SELECT average(readBytesPerSecond), average(writeBytesPerSecond) FROM StorageSample SINCE 30 MINUTES AGO TIMESERIES AUTO"
          }
        ],
        "presentation": {
          "title": "Disk I/O",
          "notes": "Average disk read and write (bytes per second) over the last 30 minutes."
        }
      },
      {
        "visualization": "attribute_sheet",
        "layout": {
          "width": 1,
          "height": 1,
          "row": 11,
          "column": 3
        },
        "data": [
          {
            "nrql": "SELECT latest(memoryUsedBytes) /1000000 AS 'Avg MB Used', latest(memoryFreeBytes)/1000000 AS 'Avg MB Free' FROM SystemSample since 10 minutes ago"
          }
        ],
        "presentation": {
          "title": "Average Memory Usage",
          "notes": "Average memory used and free (MB) over the last 10 minutes."
        }
      }
    ],
    "filter": {
      "event_types": [
        "SyntheticCheck",
        "SystemSample"
      ],
      "attributes": [
        "monitorName",
        "locationLabel"
      ]
    }
  }
}
```
</details>



**Dashboard: SRE & DevOps Browser Stats [[SOURCE]](https://discuss.newrelic.com/t/relic-browser-dashboard-time-to-first-byte-ttfb/61579):**

<details>
<summary>
<i>SRE - DevOps - Browser Data</i>
</summary>

```json

{
  "dashboard": {
    "title": "SRE & DevOps Browser Stats",
    "description": null,
    "icon": "bar-chart",
    "visibility": "all",
    "editable": "editable_by_all",
    "metadata": {
      "version": 1
    },
    "widgets": [
{
        "visualization": "markdown",
        "layout": {
          "width": 3,
          "height": 1,
          "row": 1,
          "column": 1
        },
        "data": [
          {
            "source": "# Motivation\n---\nThis dashboard highlights granular page load details set from the [Navigation Timing API](https://www.w3.org/TR/navigation-timing/). Use this space to determine the average time to first byte of a page load and drill into any AJAX and JS Errors that may contribute to slow load times.\n\nhttps://discuss.newrelic.com/t/browser-dashboard-time-to-first-byte-ttfb/61579"
          }
        ],
        "presentation": {
          "title": "",
          "notes": null
        }
      },
      {
        "visualization": "line_chart",
        "layout": {
          "width": 1,
          "height": 1,
          "row": 1,
          "column": 1
        },
        "data": [
          {
            "nrql": "from BrowserInteraction select average(timeToDomComplete), average(timeToDomContentLoadedEventEnd), average(timeToDomInteractive), average(duration)  where trigger = 'initialPageLoad' limit 1000 TIMESERIES"
          }
        ],
        "presentation": {
          "title": "Average Stats",
          "notes": "Displays the average load times for specific elements of the Navigation Timing API over time"
        }
      },
      {
        "visualization": "faceted_line_chart",
        "layout": {
          "width": 1,
          "height": 1,
          "row": 1,
          "column": 2
        },
        "data": [
          {
            "nrql": "SELECT average(timeToDomComplete - timeToDomLoading) AS 'Time to Render' FROM BrowserInteraction SINCE 1 week ago TIMESERIES facet appName"
          }
        ],
        "presentation": {
          "title": "Average Time to Render",
          "notes": "Displays average time until the page renders over time"
        }
      },
      {
        "visualization": "line_chart",
        "layout": {
          "width": 1,
          "height": 1,
          "row": 1,
          "column": 3
        },
        "data": [
          {
            "nrql": "SELECT average(timeToResponseStart) FROM BrowserInteraction since 1 week ago TIMESERIES"
          }
        ],
        "presentation": {
          "title": "TTFB",
          "notes": "Displays average time until the browser receives the first byte response from the web server over time"
        }
      },
      {
        "visualization": "line_chart",
        "layout": {
          "width": 2,
          "height": 1,
          "row": 2,
          "column": 1
        },
        "data": [
          {
            "nrql": "from BrowserInteraction select average(timeToDomComplete) as 'Dom Complete', average(timeToDomContentLoadedEventEnd) as 'Dom Content Loaded' , average(timeToDomInteractive) as 'Dom Content Interactive', average(duration) as 'Total Duration of Interaction Event', average(timeToDomComplete - timeToDomLoading) AS 'Time to Render', average(timeToResponseStart) as 'Time to First Bite'  where trigger = 'initialPageLoad' limit 1000 TIMESERIES"
          }
        ],
        "presentation": {
          "title": "Average Page Load Details",
          "notes": "This chart adds to the first chart with more page load statistics"
        }
      },
      {
        "visualization": "line_chart",
        "layout": {
          "width": 1,
          "height": 1,
          "row": 2,
          "column": 3
        },
        "data": [
          {
            "nrql": "SELECT average(timeToDomComplete - timeToDomLoading) AS 'Time to Render', average(timeToResponseStart) as 'Time to First Bite' FROM BrowserInteraction SINCE 1 week ago TIMESERIES 2 hours"
          }
        ],
        "presentation": {
          "title": "Time to Render + First Byte",
          "notes": "This chart combines the 2nd and 3rd queries into a single line chart"
        }
      },
      {
        "visualization": "facet_table",
        "layout": {
          "width": 1,
          "height": 1,
          "row": 3,
          "column": 1
        },
        "data": [
          {
            "nrql": "SELECT count(*) FROM PageView facet appName"
          }
        ],
        "presentation": {
          "title": "Page Views (App Filter)",
          "notes": "Counts the total number of page views listed per app (facetable)"
        }
      },
      {
        "visualization": "attribute_sheet",
        "layout": {
          "width": 2,
          "height": 1,
          "row": 3,
          "column": 2
        },
        "data": [
          {
            "nrql": "from PageView select count(*), average(duration) as 'Avg Pg Load', average(backendDuration) as 'Avg Back End', average(domProcessingDuration) + average(pageRenderingDuration) as 'Avg Front End'"
          }
        ],
        "presentation": {
          "title": "Throughput & Response Times",
          "notes": "Provides the total number of page views, average page load duration, average backend duration (web app time), and front end duration (page load timing)"
        }
      },
      {
        "visualization": "facet_table",
        "layout": {
          "width": 3,
          "height": 1,
          "row": 4,
          "column": 1
        },
        "data": [
          {
            "nrql": "from BrowserInteraction select average(duration) facet targetUrl"
          }
        ],
        "presentation": {
          "title": "Slow Load Interactions",
          "notes": "Highlights the slowest browser interactions faceted by the URL"
        }
      },
      {
        "visualization": "gauge",
        "layout": {
          "width": 1,
          "height": 1,
          "row": 5,
          "column": 1
        },
        "data": [
          {
            "nrql": "select filter(count(*), WHERE httpResponseCode >= 300) / count(*) * 100 as 'Error Rate (%)' FROM AjaxRequest"
          }
        ],
        "presentation": {
          "title": "AJAX Error Rate",
          "notes": "Provides a percentage of AJAX errors",
          "threshold": {
            "red": 133
          }
        }
      },
      {
        "visualization": "facet_table",
        "layout": {
          "width": 1,
          "height": 1,
          "row": 5,
          "column": 2
        },
        "data": [
          {
            "nrql": "SELECT count(*) from AjaxRequest where httpResponseCode >= 300 facet appName, pageUrl, httpResponseCode limit 100"
          }
        ],
        "presentation": {
          "title": "AJAX App/Page Issues",
          "notes": "Highlights where the AJAX errors are occurring in your app faceted by appName and pageUrl"
        }
      },
      {
        "visualization": "facet_table",
        "layout": {
          "width": 1,
          "height": 1,
          "row": 5,
          "column": 3
        },
        "data": [
          {
            "nrql": "SELECT count(*) from AjaxRequest facet cases(WHERE httpResponseCode >= 200 and httpResponseCode < 300 as '200s', WHERE httpResponseCode >= 300 and httpResponseCode < 400 as '300s', WHERE httpResponseCode >= 400 and httpResponseCode < 500 as '400s', WHERE httpResponseCode >= 500 and httpResponseCode < 600 as '500s')"
          }
        ],
        "presentation": {
          "title": "AJAX Errors",
          "notes": "Counts the number of AJAX Errors faceted out by httpResponseCode"
        }
      },
      {
        "visualization": "line_chart",
        "layout": {
          "width": 1,
          "height": 1,
          "row": 6,
          "column": 1
        },
        "data": [
          {
            "nrql": "select filter(count(*), WHERE httpResponseCode >= 300) / filter(count(*),WHERE httpResponseCode < 300) as 'Error Rate' FROM AjaxRequest TIMESERIES"
          }
        ],
        "presentation": {
          "title": "AJAX Errors Over Time",
          "notes": "Displays the number of AJAX Errors over time"
        }
      },
      {
        "visualization": "facet_table",
        "layout": {
          "width": 2,
          "height": 1,
          "row": 6,
          "column": 2
        },
        "data": [
          {
            "nrql": "from AjaxRequest select count(*) where httpResponseCode > 300 facet pageUrl  limit 5"
          }
        ],
        "presentation": {
          "title": "Top 5 AJAX Errors by Page URL",
          "notes": "Highlights the top 5 pageURLs with the highest number of AJAX errors"
        }
      },
      {
        "visualization": "facet_table",
        "layout": {
          "width": 3,
          "height": 1,
          "row": 7,
          "column": 1
        },
        "data": [
          {
            "nrql": "FROM JavaScriptError select count(*) facet errorClass, errorMessage"
          }
        ],
        "presentation": {
          "title": "JS Error Details",
          "notes": "Provides the top JS errors and the error message and class associated with them"
        }
      },
      {
        "visualization": "facet_table",
        "layout": {
          "width": 3,
          "height": 1,
          "row": 8,
          "column": 1
        },
        "data": [
          {
            "nrql": "FROM JavaScriptError select count(*) facet requestUri"
          }
        ],
        "presentation": {
          "title": "JS Errors by Request URI",
          "notes": "Highlights the number of JS Errors faceted by requestUri"
        }
      }
    ],
    "filter": {
      "event_types": [
        "PageView",
        "BrowserInteraction",
        "AjaxRequest",
        "JavaScriptError"
      ],
      "attributes": []
    }
  }
}


```

</details>


**Dashboard: Browser Users Dashboard**

<details>
<summary>
<i>Browser Users Dashboard</i>
</summary>

```json

{
            "dashboard": {
                "id": 673054,
                "title": "Browser Users Dashboard",
                "description": null,
                "icon": "users",
                "visibility": "all",
                "editable": "editable_by_all",
                "metadata": {
                    "version": 1
                },
                "widgets": [
                    {
                        "visualization": "facet_pie_chart",
                        "layout": {
                            "width": 1,
                            "height": 1,
                            "row": 1,
                            "column": 1
                        },
                        "widget_id": 6162472,
                        "data": [
                            {
                                "nrql": "SELECT count(*) FROM PageView since 1 day ago FACET  appName"
                            }
                        ],
                        "presentation": {
                            "title": "Total Recent Page Views",
                            "notes": null,
                            "drilldown_dashboard_id": 673054
                        }
                    },
                    {
                        "visualization": "faceted_area_chart",
                        "layout": {
                            "width": 1,
                            "height": 1,
                            "row": 1,
                            "column": 2
                        },
                        "widget_id": 6287540,
                        "data": [
                            {
                                "nrql": "SELECT average(duration) FROM PageView  since 1 day ago  FACET appName TIMESERIES"
                            }
                        ],
                        "presentation": {
                            "title": "Recent Average Response Time",
                            "notes": null
                        }
                    },
                    {
                        "visualization": "line_chart",
                        "layout": {
                            "width": 1,
                            "height": 1,
                            "row": 1,
                            "column": 3
                        },
                        "widget_id": 6287542,
                        "data": [
                            {
                                "nrql": "SELECT average(duration) as ' End User Time', average(backendDuration) as ' App Server Time ' FROM PageView SINCE 1 day ago  TIMESERIES"
                            }
                        ],
                        "presentation": {
                            "title": "Recent End User & App Server Performance",
                            "notes": null
                        }
                    },
                    {
                        "visualization": "facet_bar_chart",
                        "layout": {
                            "width": 1,
                            "height": 1,
                            "row": 2,
                            "column": 1
                        },
                        "widget_id": 6287560,
                        "data": [
                            {
                                "nrql": "SELECT count(*) FROM PageView FACET weekDayOf(timestamp)  since 7 day ago  limit 7"
                            }
                        ],
                        "presentation": {
                            "title": "Weekly Page Views By Day",
                            "notes": null,
                            "drilldown_dashboard_id": 673054
                        }
                    },
                    {
                        "visualization": "facet_pie_chart",
                        "layout": {
                            "width": 1,
                            "height": 1,
                            "row": 2,
                            "column": 2
                        },
                        "widget_id": 6287641,
                        "data": [
                            {
                                "nrql": "SELECT count(*) FROM PageView FACET hourof(timestamp) SINCE 24 hours ago"
                            }
                        ],
                        "presentation": {
                            "title": "Daily Page Views By Hour",
                            "notes": null,
                            "drilldown_dashboard_id": 673054
                        }
                    },
                    {
                        "visualization": "facet_bar_chart",
                        "layout": {
                            "width": 1,
                            "height": 1,
                            "row": 2,
                            "column": 3
                        },
                        "widget_id": 6287654,
                        "data": [
                            {
                                "nrql": "SELECT count(*) FROM PageView since 1 days ago FACET pageUrl limit 25"
                            }
                        ],
                        "presentation": {
                            "title": "Most Frequently Viewed Pages",
                            "notes": null,
                            "drilldown_dashboard_id": 673054
                        }
                    },
                    {
                        "visualization": "faceted_line_chart",
                        "layout": {
                            "width": 1,
                            "height": 1,
                            "row": 3,
                            "column": 1
                        },
                        "widget_id": 6162477,
                        "data": [
                            {
                                "nrql": "SELECT average(duration) FROM PageView since 1 day ago FACET pageUrl TIMESERIES AUTO"
                            }
                        ],
                        "presentation": {
                            "title": "Slowest Page Load Times",
                            "notes": null
                        }
                    },
                    {
                        "visualization": "facet_bar_chart",
                        "layout": {
                            "width": 1,
                            "height": 1,
                            "row": 3,
                            "column": 2
                        },
                        "widget_id": 6210250,
                        "data": [
                            {
                                "nrql": "SELECT average(duration) from PageView since 7 day ago FACET pageUrl"
                            }
                        ],
                        "presentation": {
                            "title": "Slowest Pages",
                            "notes": null,
                            "drilldown_dashboard_id": 673054
                        }
                    },
                    {
                        "visualization": "histogram",
                        "layout": {
                            "width": 1,
                            "height": 1,
                            "row": 3,
                            "column": 3
                        },
                        "widget_id": 6287734,
                        "data": [
                            {
                                "nrql": "SELECT histogram(duration, 10, 30) FROM PageView SINCE 1 day ago"
                            }
                        ],
                        "presentation": {
                            "title": "Page Load Time - Histogram",
                            "notes": null
                        }
                    },
                    {
                        "visualization": "facet_bar_chart",
                        "layout": {
                            "width": 1,
                            "height": 1,
                            "row": 4,
                            "column": 1
                        },
                        "widget_id": 6162469,
                        "data": [
                            {
                                "nrql": "SELECT count(*) FROM PageView SINCE 1 day ago FACET countryCode"
                            }
                        ],
                        "presentation": {
                            "title": "Customers by Country",
                            "notes": null,
                            "drilldown_dashboard_id": 673054
                        }
                    },
                    {
                        "visualization": "facet_bar_chart",
                        "layout": {
                            "width": 1,
                            "height": 1,
                            "row": 4,
                            "column": 2
                        },
                        "widget_id": 6162471,
                        "data": [
                            {
                                "nrql": "SELECT count(*) FROM PageView since 1 day ago FACET  city"
                            }
                        ],
                        "presentation": {
                            "title": "What Cities Are My Users In?",
                            "notes": null,
                            "drilldown_dashboard_id": 673054
                        }
                    },
                    {
                        "visualization": "facet_pie_chart",
                        "layout": {
                            "width": 1,
                            "height": 1,
                            "row": 4,
                            "column": 3
                        },
                        "widget_id": 6287762,
                        "data": [
                            {
                                "nrql": "SELECT count(*) FROM PageView since 1 days ago facet userAgentName, userAgentOS"
                            }
                        ],
                        "presentation": {
                            "title": "Browser and OS Usage",
                            "notes": null,
                            "drilldown_dashboard_id": null
                        }
                    },
                    {
                        "visualization": "attribute_sheet",
                        "layout": {
                            "width": 2,
                            "height": 1,
                            "row": 5,
                            "column": 1
                        },
                        "widget_id": 6207798,
                        "data": [
                            {
                                "nrql": "SELECT percentage(uniqueCount(session), WHERE userAgentName = 'IE') AS '% of IE Users', percentage(uniqueCount(session), WHERE userAgentName = 'Chrome') AS '% of Chrome Users', percentage(uniqueCount(session), WHERE userAgentName = 'Firefox') AS '% of Firefox Users', percentage(uniqueCount(session), WHERE userAgentName = 'Safari') AS '% of Safari Users' FROM PageView SINCE 1 day ago"
                            }
                        ],
                        "presentation": {
                            "title": "Browser Usage %'s",
                            "notes": null
                        }
                    },
                    {
                        "visualization": "facet_bar_chart",
                        "layout": {
                            "width": 1,
                            "height": 1,
                            "row": 5,
                            "column": 3
                        },
                        "widget_id": 6207389,
                        "data": [
                            {
                                "nrql": "SELECT average(duration) FROM PageView FACET asnOrganization SINCE 1 day ago"
                            }
                        ],
                        "presentation": {
                            "title": "Slowest ASN's",
                            "notes": null,
                            "drilldown_dashboard_id": 673054
                        }
                    }
                ],
                "filter": {
                    "event_types": [
                        "PageView"
                    ],
                    "attributes": []
                }
            }
        }


```

</details>

**Dashboard: Browser Tell Me About My Users Dashboard**

<details>
<summary>
<i>Browser Tell Me About My Users</i>
</summary>

```json

{
                "id": 937901,
                "title": "Tell Me About My Users",
                "description": null,
                "icon": "users",
                "created_at": "2019-07-18T09:27:33Z",
                "updated_at": "2019-07-18T09:27:33Z",
                "visibility": "all",
                "editable": "editable_by_all",
                "metadata": {
                    "version": 1
                },
                "widgets": [
                    {
                        "visualization": "billboard_comparison",
                        "layout": {
                            "width": 1,
                            "height": 1,
                            "row": 1,
                            "column": 1
                        },
                        "widget_id": 11158609,
                        "data": [
                            {
                                "nrql": "SELECT uniqueCount(session) FROM PageView since 60 minute ago until 10 seconds ago COMPARE WITH 1 hour ago"
                            }
                        ],
                        "presentation": {
                            "title": "How many users does my site have?",
                            "notes": null
                        }
                    },
                    {
                        "visualization": "facet_bar_chart",
                        "layout": {
                            "width": 1,
                            "height": 1,
                            "row": 1,
                            "column": 2
                        },
                        "widget_id": 11158610,
                        "data": [
                            {
                                "nrql": "SELECT count(*) FROM PageView since 1 day ago FACET  appName"
                            }
                        ],
                        "presentation": {
                            "title": "Which Apps Are Being Used?",
                            "notes": null,
                            "drilldown_dashboard_id": 39743
                        }
                    },
                    {
                        "visualization": "facet_bar_chart",
                        "layout": {
                            "width": 1,
                            "height": 1,
                            "row": 1,
                            "column": 3
                        },
                        "widget_id": 11158611,
                        "data": [
                            {
                                "nrql": "SELECT count(*) FROM PageView since 1 day ago FACET  pageUrl"
                            }
                        ],
                        "presentation": {
                            "title": "What Pages Are Most Popular?",
                            "notes": null,
                            "drilldown_dashboard_id": 32602
                        }
                    },
                    {
                        "visualization": "facet_bar_chart",
                        "layout": {
                            "width": 1,
                            "height": 1,
                            "row": 2,
                            "column": 1
                        },
                        "widget_id": 11158612,
                        "data": [
                            {
                                "nrql": "SELECT count(*) FROM PageView FACET weekdayOf(timestamp) SINCE 7 days ago"
                            }
                        ],
                        "presentation": {
                            "title": "What days are busiest?",
                            "notes": null,
                            "drilldown_dashboard_id": null
                        }
                    },
                    {
                        "visualization": "event_table",
                        "layout": {
                            "width": 1,
                            "height": 1,
                            "row": 2,
                            "column": 2
                        },
                        "widget_id": 11158613,
                        "data": [
                            {
                                "nrql": "SELECT session FROM PageView since 60 minute ago until 10 seconds ago"
                            }
                        ],
                        "presentation": {
                            "title": "Live Sessions - Who's on my app?",
                            "notes": null
                        }
                    },
                    {
                        "visualization": "facet_bar_chart",
                        "layout": {
                            "width": 1,
                            "height": 1,
                            "row": 2,
                            "column": 3
                        },
                        "widget_id": 11158614,
                        "data": [
                            {
                                "nrql": "SELECT count(*) FROM PageView since 1 day ago FACET  city"
                            }
                        ],
                        "presentation": {
                            "title": "What Cities Are My Users In?",
                            "notes": null,
                            "drilldown_dashboard_id": 39743
                        }
                    },
                    {
                        "visualization": "facet_bar_chart",
                        "layout": {
                            "width": 1,
                            "height": 1,
                            "row": 3,
                            "column": 1
                        },
                        "widget_id": 11158615,
                        "data": [
                            {
                                "nrql": "SELECT count(*) FROM PageView FACET hourOf(timestamp) SINCE 7 days ago"
                            }
                        ],
                        "presentation": {
                            "title": "What Time Do They Visit?",
                            "notes": null,
                            "drilldown_dashboard_id": null
                        }
                    },
                    {
                        "visualization": "facet_pie_chart",
                        "layout": {
                            "width": 1,
                            "height": 1,
                            "row": 3,
                            "column": 2
                        },
                        "widget_id": 11158616,
                        "data": [
                            {
                                "nrql": "SELECT count(*) FROM PageView since 1 day ago FACET  countryCode"
                            }
                        ],
                        "presentation": {
                            "title": "What Country Are My Users In?",
                            "notes": null,
                            "drilldown_dashboard_id": 39743
                        }
                    },
                    {
                        "visualization": "facet_bar_chart",
                        "layout": {
                            "width": 1,
                            "height": 1,
                            "row": 3,
                            "column": 3
                        },
                        "widget_id": 11158617,
                        "data": [
                            {
                                "nrql": "SELECT count(*) FROM PageView since 1 day ago FACET  userAgentName"
                            }
                        ],
                        "presentation": {
                            "title": "Which Browsers Are Used?",
                            "notes": null,
                            "drilldown_dashboard_id": 39743
                        }
                    },
                    {
                        "visualization": "histogram",
                        "layout": {
                            "width": 1,
                            "height": 1,
                            "row": 4,
                            "column": 1
                        },
                        "widget_id": 11158618,
                        "data": [
                            {
                                "nrql": "SELECT histogram(duration) FROM PageView SINCE 1 day ago"
                            }
                        ],
                        "presentation": {
                            "title": "Page Load Time - Histogram",
                            "notes": null
                        }
                    },
                    {
                        "visualization": "faceted_line_chart",
                        "layout": {
                            "width": 2,
                            "height": 1,
                            "row": 4,
                            "column": 2
                        },
                        "widget_id": 11158619,
                        "data": [
                            {
                                "nrql": "SELECT average(duration) FROM PageView since 1 day ago FACET appName TIMESERIES AUTO"
                            }
                        ],
                        "presentation": {
                            "title": "Average Overall Response",
                            "notes": null
                        }
                    },
                    {
                        "visualization": "line_chart",
                        "layout": {
                            "width": 1,
                            "height": 1,
                            "row": 5,
                            "column": 1
                        },
                        "widget_id": 11158620,
                        "data": [
                            {
                                "nrql": "SELECT average(duration) as ' End User Time', average(backendDuration) as ' App Server Time ' FROM PageView SINCE 2 minutes ago UNTIL 10 seconds ago TIMESERIES"
                            }
                        ],
                        "presentation": {
                            "title": "End User & App Server Performance",
                            "notes": null
                        }
                    },
                    {
                        "visualization": "faceted_line_chart",
                        "layout": {
                            "width": 2,
                            "height": 1,
                            "row": 5,
                            "column": 2
                        },
                        "widget_id": 11158621,
                        "data": [
                            {
                                "nrql": "SELECT average(duration) FROM PageView since 1 day ago FACET pageUrl TIMESERIES AUTO"
                            }
                        ],
                        "presentation": {
                            "title": "Which Pages Are Slowest?",
                            "notes": null
                        }
                    },
                    {
                        "visualization": "facet_bar_chart",
                        "layout": {
                            "width": 3,
                            "height": 2,
                            "row": 6,
                            "column": 1
                        },
                        "widget_id": 11158622,
                        "data": [
                            {
                                "nrql": "SELECT count(*) FROM PageView since 1 day ago FACET  userAgentOS"
                            }
                        ],
                        "presentation": {
                            "title": "What OS Are My Users Using?",
                            "notes": null,
                            "drilldown_dashboard_id": 32602
                        }
                    }
                ],
                "filter": {
                    "event_types": [
                        "PageView"
                    ],
                    "attributes": [
                        "appName",
                        "city",
                        "userAgentName",
                        "countryCode"
                    ]
                }
            }
        }

```

</details>

**Dashboard: Browser Users Dashboard**

<details>
<summary>
<i>Browser Users Dashboard</i>
</summary>

```json

{
                "id": 668824,
                "title": "JS Errors Dashboard",
                "description": null,
                "icon": "bar-chart",
                "visibility": "all",
                "editable": "editable_by_all",
                "metadata": {
                    "version": 1
                },
                "widgets": [
                    {
                        "visualization": "facet_bar_chart",
                        "layout": {
                            "width": 1,
                            "height": 1,
                            "row": 1,
                            "column": 1
                        },
                        "widget_id": 6110641,
                        "data": [
                            {
                                "nrql": "SELECT count(*) from JavaScriptError FACET errorClass"
                            }
                        ],
                        "presentation": {
                            "title": "JS Errors by Error Class",
                            "notes": null,
                            "drilldown_dashboard_id": 539020
                        }
                    },
                    {
                        "visualization": "comparison_line_chart",
                        "layout": {
                            "width": 2,
                            "height": 1,
                            "row": 1,
                            "column": 2
                        },
                        "widget_id": 6110642,
                        "data": [
                            {
                                "nrql": "SELECT count(*) from JavaScriptError TIMESERIES AUTO compare with 1 week ago"
                            }
                        ],
                        "presentation": {
                            "title": "JS Errors compared with past JS error trends",
                            "notes": null
                        }
                    },
                    {
                        "visualization": "facet_bar_chart",
                        "layout": {
                            "width": 1,
                            "height": 1,
                            "row": 2,
                            "column": 1
                        },
                        "widget_id": 6110643,
                        "data": [
                            {
                                "nrql": "SELECT count(*) from JavaScriptError FACET appName"
                            }
                        ],
                        "presentation": {
                            "title": "JS Errors by App Name",
                            "notes": null,
                            "drilldown_dashboard_id": 396548
                        }
                    },
                    {
                        "visualization": "facet_bar_chart",
                        "layout": {
                            "width": 1,
                            "height": 1,
                            "row": 2,
                            "column": 2
                        },
                        "widget_id": 6110644,
                        "data": [
                            {
                                "nrql": "SELECT count(*) from JavaScriptError FACET errorMessage"
                            }
                        ],
                        "presentation": {
                            "title": "JS Errors by Error Message",
                            "notes": null,
                            "drilldown_dashboard_id": 396548
                        }
                    },
                    {
                        "visualization": "facet_bar_chart",
                        "layout": {
                            "width": 1,
                            "height": 1,
                            "row": 2,
                            "column": 3
                        },
                        "widget_id": 6110645,
                        "data": [
                            {
                                "nrql": "SELECT count(*) FROM JavaScriptError FACET browserInteractionId"
                            }
                        ],
                        "presentation": {
                            "title": "JS Errors by BrowserInteraction ID's",
                            "notes": null,
                            "drilldown_dashboard_id": 396548
                        }
                    },
                    {
                        "visualization": "facet_pie_chart",
                        "layout": {
                            "width": 1,
                            "height": 1,
                            "row": 3,
                            "column": 1
                        },
                        "widget_id": 6110646,
                        "data": [
                            {
                                "nrql": "SELECT count(*) FROM JavaScriptError FACET userAgentName"
                            }
                        ],
                        "presentation": {
                            "title": "JS Errors by Browser",
                            "notes": null,
                            "drilldown_dashboard_id": null
                        }
                    },
                    {
                        "visualization": "facet_pie_chart",
                        "layout": {
                            "width": 1,
                            "height": 1,
                            "row": 3,
                            "column": 2
                        },
                        "widget_id": 6110647,
                        "data": [
                            {
                                "nrql": "SELECT count(*) FROM JavaScriptError FACET userAgentOS"
                            }
                        ],
                        "presentation": {
                            "title": "JS Errors by OS",
                            "notes": null,
                            "drilldown_dashboard_id": null
                        }
                    },
                    {
                        "visualization": "facet_bar_chart",
                        "layout": {
                            "width": 1,
                            "height": 1,
                            "row": 3,
                            "column": 3
                        },
                        "widget_id": 6110648,
                        "data": [
                            {
                                "nrql": "SELECT count(*) FROM JavaScriptError FACET deviceType"
                            }
                        ],
                        "presentation": {
                            "title": "JS Errors by Device Type",
                            "notes": null,
                            "drilldown_dashboard_id": 539020
                        }
                    },
                    {
                        "visualization": "facet_bar_chart",
                        "layout": {
                            "width": 1,
                            "height": 1,
                            "row": 4,
                            "column": 1
                        },
                        "widget_id": 6110649,
                        "data": [
                            {
                                "nrql": "SELECT count(*) FROM JavaScriptError FACET requestUri"
                            }
                        ],
                        "presentation": {
                            "title": "JS Errors by Request URI",
                            "notes": null,
                            "drilldown_dashboard_id": 396548
                        }
                    }
                ],
                "filter": {
                    "event_types": [
                        "JavaScriptError"
                    ],
                    "attributes": []
                }
            }
        }

```

</details>



**Dashboard: Browser AJAX Dashboard**

<details>
<summary>
<i>Browser AJAX Dashboard</i>
</summary>

```json

{
            "dashboard": {
                "id": 704417,
                "title": "Browser Ajax Dashboard",
                "description": null,
                "icon": "bar-chart",
                "visibility": "all",
                "editable": "editable_by_all",
                "metadata": {
                    "version": 1
                },
                "widgets": [
                    {
                        "visualization": "billboard",
                        "layout": {
                            "width": 1,
                            "height": 1,
                            "row": 1,
                            "column": 1
                        },
                        "widget_id": 6541278,
                        "data": [
                            {
                                "nrql": "select count(*) from AjaxRequest SINCE 60 minutes ago WHERE httpResponseCode not in ('200','201')"
                            }
                        ],
                        "presentation": {
                            "title": "Total count Ajax Requests",
                            "notes": null,
                            "threshold": {}
                        }
                    },
                    {
                        "visualization": "facet_bar_chart",
                        "layout": {
                            "width": 1,
                            "height": 1,
                            "row": 1,
                            "column": 2
                        },
                        "widget_id": 6541279,
                        "data": [
                            {
                                "nrql": "SELECT count(*) from AjaxRequest SINCE 60 minutes ago FACET `nr.interaction.category`"
                            }
                        ],
                        "presentation": {
                            "title": "The type of Interaction",
                            "notes": null,
                            "drilldown_dashboard_id": 704404
                        }
                    },
                    {
                        "visualization": "facet_pie_chart",
                        "layout": {
                            "width": 1,
                            "height": 1,
                            "row": 1,
                            "column": 3
                        },
                        "widget_id": 6541280,
                        "data": [
                            {
                                "nrql": "select count(*) from AjaxRequest SINCE 60 minutes ago WHERE httpResponseCode not in ('200','201') facet httpMethod"
                            }
                        ],
                        "presentation": {
                            "title": "HTTP method of AJAX request.",
                            "notes": null,
                            "drilldown_dashboard_id": 704404
                        }
                    },
                    {
                        "visualization": "facet_bar_chart",
                        "layout": {
                            "width": 1,
                            "height": 1,
                            "row": 2,
                            "column": 1
                        },
                        "widget_id": 6541281,
                        "data": [
                            {
                                "nrql": "select count(*) from AjaxRequest SINCE 60 minutes ago WHERE httpResponseCode not in ('200','201') facet hostname"
                            }
                        ],
                        "presentation": {
                            "title": "Fully qualified domain name",
                            "notes": null,
                            "drilldown_dashboard_id": 704404
                        }
                    },
                    {
                        "visualization": "facet_bar_chart",
                        "layout": {
                            "width": 1,
                            "height": 1,
                            "row": 2,
                            "column": 2
                        },
                        "widget_id": 6541282,
                        "data": [
                            {
                                "nrql": "select count(*) from AjaxRequest SINCE 60 minutes ago WHERE httpResponseCode not in ('200','201') facet browserInteractionName"
                            }
                        ],
                        "presentation": {
                            "title": "Interactions receiving errors",
                            "notes": null,
                            "drilldown_dashboard_id": 668852
                        }
                    },
                    {
                        "visualization": "facet_bar_chart",
                        "layout": {
                            "width": 1,
                            "height": 1,
                            "row": 2,
                            "column": 3
                        },
                        "widget_id": 6541283,
                        "data": [
                            {
                                "nrql": "select count(*) from AjaxRequest SINCE today WHERE httpResponseCode not in ('200','201') facet `nr.interaction.backendTransactionName`"
                            }
                        ],
                        "presentation": {
                            "title": "Backend transactions",
                            "notes": null,
                            "drilldown_dashboard_id": 668852
                        }
                    },
                    {
                        "visualization": "facet_bar_chart",
                        "layout": {
                            "width": 1,
                            "height": 1,
                            "row": 3,
                            "column": 1
                        },
                        "widget_id": 6541284,
                        "data": [
                            {
                                "nrql": "SELECT average( timeToSettle ) from AjaxRequest facet pageUrl"
                            }
                        ],
                        "presentation": {
                            "title": "AJAX avg duration by page",
                            "notes": null,
                            "drilldown_dashboard_id": 668852
                        }
                    },
                    {
                        "visualization": "facet_table",
                        "layout": {
                            "width": 1,
                            "height": 1,
                            "row": 3,
                            "column": 2
                        },
                        "widget_id": 6541285,
                        "data": [
                            {
                                "nrql": "SELECT count(*) as 'AJAX Calls',average(timeToLoadEventStart) as 'Load Event Start',average(timeToLastCallbackEnd) as 'Last Callback End',average(timeToSettle) as 'Time to Settle'  FROM AjaxRequest FACET `nr.nameForFaceting` SINCE 60 minutes  ago LIMIT 20"
                            }
                        ],
                        "presentation": {
                            "title": "Pageview Performance Breakdown",
                            "notes": "ast Callback End: Time from the start of the request to the end of the last callback to finish\nLoad event start: Time from the start of the request to the start of the load event\nTime to Settle: Time from the start of the request to the end of all callbk",
                            "drilldown_dashboard_id": 668852
                        }
                    },
                    {
                        "visualization": "line_chart",
                        "layout": {
                            "width": 1,
                            "height": 1,
                            "row": 3,
                            "column": 3
                        },
                        "widget_id": 6541286,
                        "data": [
                            {
                                "nrql": "SELECT average(duration), percentile(duration,50) as 'Median', percentile(duration,75) FROM BrowserInteraction  SINCE 60 minutes ago TIMESERIES"
                            }
                        ],
                        "presentation": {
                            "title": "Interaction Duration",
                            "notes": null
                        }
                    },
                    {
                        "visualization": "facet_pie_chart",
                        "layout": {
                            "width": 1,
                            "height": 1,
                            "row": 4,
                            "column": 1
                        },
                        "widget_id": 6541287,
                        "data": [
                            {
                                "nrql": "SELECT count(*) FROM AjaxRequest FACET httpResponseCode, hostname"
                            }
                        ],
                        "presentation": {
                            "title": "Http Response by hostname",
                            "notes": null,
                            "drilldown_dashboard_id": null
                        }
                    },
                    {
                        "visualization": "faceted_line_chart",
                        "layout": {
                            "width": 1,
                            "height": 1,
                            "row": 4,
                            "column": 2
                        },
                        "widget_id": 6541288,
                        "data": [
                            {
                                "nrql": "SELECT count(*) FROM AjaxRequest TIMESERIES AUTO  FACET httpResponseCode, hostname"
                            }
                        ],
                        "presentation": {
                            "title": "Response code by requested host",
                            "notes": null
                        }
                    },
                    {
                        "visualization": "facet_bar_chart",
                        "layout": {
                            "width": 1,
                            "height": 1,
                            "row": 4,
                            "column": 3
                        },
                        "widget_id": 6541289,
                        "data": [
                            {
                                "nrql": "SELECT count(*) FROM AjaxRequest FACET hostname SINCE 60 minutes ago"
                            }
                        ],
                        "presentation": {
                            "title": "AJAX Requests by Domain",
                            "notes": null,
                            "drilldown_dashboard_id": 668852
                        }
                    },
                    {
                        "visualization": "facet_bar_chart",
                        "layout": {
                            "width": 1,
                            "height": 1,
                            "row": 5,
                            "column": 1
                        },
                        "widget_id": 6541290,
                        "data": [
                            {
                                "nrql": "SELECT average(jsDuration) FROM AjaxRequest FACET hostname SINCE 60 minutes ago"
                            }
                        ],
                        "presentation": {
                            "title": "Avg JS Duration by Domain",
                            "notes": null,
                            "drilldown_dashboard_id": 668852
                        }
                    },
                    {
                        "visualization": "heatmap",
                        "layout": {
                            "width": 1,
                            "height": 1,
                            "row": 5,
                            "column": 2
                        },
                        "widget_id": 6541291,
                        "data": [
                            {
                                "nrql": "SELECT histogram(jsDuration, 10, 20) FROM AjaxRequest FACET hostname SINCE 1 day ago"
                            }
                        ],
                        "presentation": {
                            "title": "JS Duration by Domain Heatmap",
                            "notes": null,
                            "drilldown_dashboard_id": null
                        }
                    },
                    {
                        "visualization": "facet_table",
                        "layout": {
                            "width": 1,
                            "height": 1,
                            "row": 5,
                            "column": 3
                        },
                        "widget_id": 6541292,
                        "data": [
                            {
                                "nrql": "SELECT count(httpMethod) FROM AjaxRequest FACET httpMethod SINCE 1 day ago"
                            }
                        ],
                        "presentation": {
                            "title": "Request Types",
                            "notes": null,
                            "drilldown_dashboard_id": 668852
                        }
                    }
                ],
                "filter": {
                    "event_types": [
                        "AjaxRequest"
                    ],
                    "attributes": []
                }
            }
        }

```

</details>


**Dashboard: APM Performance Dashboard**

<details>
<summary>
<i>APM Performance Dashboard</i>
</summary>

```json

{
            "dashboard": {
                "id": 937937,
                "title": "APM Performance Dashboard",
                "description": null,
                "icon": "bar-chart",
                "created_at": "2019-07-18T10:14:19Z",
                "updated_at": "2019-07-18T10:14:19Z",
                "visibility": "all",
                "editable": "editable_by_all",
                "metadata": {
                    "version": 1
                },
                "widgets": [
                    {
                        "visualization": "facet_bar_chart",
                        "layout": {
                            "width": 2,
                            "height": 1,
                            "row": 1,
                            "column": 1
                        },
                        "widget_id": 11159018,
                        "data": [
                            {
                                "nrql": "select latest('') as '' from Transaction facet appName"
                            }
                        ],
                        "presentation": {
                            "title": "Filter To App",
                            "notes": null,
                            "drilldown_dashboard_id": 498243
                        }
                    },
                    {
                        "visualization": "line_chart",
                        "layout": {
                            "width": 1,
                            "height": 1,
                            "row": 1,
                            "column": 3
                        },
                        "widget_id": 11159019,
                        "data": [
                            {
                                "nrql": "SELECT average(duration) FROM Transaction SINCE 1 day ago TIMESERIES"
                            }
                        ],
                        "presentation": {
                            "title": "Average Duration Timeseries",
                            "notes": null
                        }
                    },
                    {
                        "visualization": "billboard",
                        "layout": {
                            "width": 1,
                            "height": 1,
                            "row": 2,
                            "column": 1
                        },
                        "widget_id": 11159020,
                        "data": [
                            {
                                "nrql": "SELECT average(duration) FROM Transaction SINCE 1 day ago"
                            }
                        ],
                        "presentation": {
                            "title": "Average Duration of APM Transactions",
                            "notes": null,
                            "threshold": {}
                        }
                    },
                    {
                        "visualization": "billboard",
                        "layout": {
                            "width": 1,
                            "height": 1,
                            "row": 2,
                            "column": 2
                        },
                        "widget_id": 11159021,
                        "data": [
                            {
                                "nrql": "SELECT average(databaseDuration) FROM Transaction SINCE 1 day ago"
                            }
                        ],
                        "presentation": {
                            "title": "Average Database Duration",
                            "notes": null,
                            "threshold": {
                                "red": 0.5,
                                "yellow": 0.3
                            }
                        }
                    },
                    {
                        "visualization": "billboard",
                        "layout": {
                            "width": 1,
                            "height": 1,
                            "row": 2,
                            "column": 3
                        },
                        "widget_id": 11159022,
                        "data": [
                            {
                                "nrql": "SELECT average(externalDuration) FROM Transaction SINCE 1 day ago"
                            }
                        ],
                        "presentation": {
                            "title": "Average External Request",
                            "notes": null,
                            "threshold": {
                                "red": 0.5,
                                "yellow": 0.3
                            }
                        }
                    },
                    {
                        "visualization": "facet_bar_chart",
                        "layout": {
                            "width": 1,
                            "height": 1,
                            "row": 3,
                            "column": 1
                        },
                        "widget_id": 11159023,
                        "data": [
                            {
                                "nrql": "SELECT average(duration - databaseDuration - externalDuration) as 'Business Language' FROM Transaction SINCE 1 day ago FACET appName"
                            }
                        ],
                        "presentation": {
                            "title": "Business Language Performance By App",
                            "notes": null,
                            "drilldown_dashboard_id": null
                        }
                    },
                    {
                        "visualization": "facet_bar_chart",
                        "layout": {
                            "width": 1,
                            "height": 1,
                            "row": 3,
                            "column": 2
                        },
                        "widget_id": 11159024,
                        "data": [
                            {
                                "nrql": "SELECT average(databaseDuration) FROM Transaction SINCE 1 day ago FACET appName"
                            }
                        ],
                        "presentation": {
                            "title": "Average Database Duration by Appname",
                            "notes": null,
                            "drilldown_dashboard_id": null
                        }
                    },
                    {
                        "visualization": "facet_bar_chart",
                        "layout": {
                            "width": 1,
                            "height": 1,
                            "row": 3,
                            "column": 3
                        },
                        "widget_id": 11159025,
                        "data": [
                            {
                                "nrql": "SELECT average(externalDuration) FROM Transaction SINCE 1 day ago FACET appName"
                            }
                        ],
                        "presentation": {
                            "title": "Average External Req Duration By App",
                            "notes": null,
                            "drilldown_dashboard_id": null
                        }
                    },
                    {
                        "visualization": "billboard",
                        "layout": {
                            "width": 1,
                            "height": 1,
                            "row": 4,
                            "column": 1
                        },
                        "widget_id": 11159026,
                        "data": [
                            {
                                "nrql": "SELECT average(duration - databaseDuration - externalDuration) FROM Transaction SINCE 1 day ago"
                            }
                        ],
                        "presentation": {
                            "title": "Average Business Language Duration",
                            "notes": null,
                            "threshold": {
                                "red": 0.5,
                                "yellow": 0.3
                            }
                        }
                    },
                    {
                        "visualization": "faceted_line_chart",
                        "layout": {
                            "width": 1,
                            "height": 1,
                            "row": 4,
                            "column": 2
                        },
                        "widget_id": 11159027,
                        "data": [
                            {
                                "nrql": "SELECT count(*) FROM TransactionError FACET `error.message` SINCE 7 days ago TIMESERIES"
                            }
                        ],
                        "presentation": {
                            "title": "Error Frequency by Message",
                            "notes": null
                        }
                    },
                    {
                        "visualization": "facet_bar_chart",
                        "layout": {
                            "width": 1,
                            "height": 1,
                            "row": 4,
                            "column": 3
                        },
                        "widget_id": 11159028,
                        "data": [
                            {
                                "nrql": "SELECT count(*) FROM TransactionError FACET `error.message` SINCE 7 days ago"
                            }
                        ],
                        "presentation": {
                            "title": "Error",
                            "notes": null,
                            "drilldown_dashboard_id": 347412
                        }
                    },
                    {
                        "visualization": "facet_bar_chart",
                        "layout": {
                            "width": 1,
                            "height": 1,
                            "row": 5,
                            "column": 1
                        },
                        "widget_id": 11159029,
                        "data": [
                            {
                                "nrql": "SELECT average(duration) FROM Transaction FACET UserDisplayName SINCE 7 days ago"
                            }
                        ],
                        "presentation": {
                            "title": "User",
                            "notes": null,
                            "drilldown_dashboard_id": 347412
                        }
                    },
                    {
                        "visualization": "event_table",
                        "layout": {
                            "width": 3,
                            "height": 1,
                            "row": 6,
                            "column": 1
                        },
                        "widget_id": 11159030,
                        "data": [
                            {
                                "nrql": "SELECT duration, databaseDuration as 'DB Duration', externalDuration as 'External Requests', (duration - externalDuration - databaseDuration) as 'Business Language' FROM Transaction WHERE duration > 2 SINCE 1 day ago"
                            }
                        ],
                        "presentation": {
                            "title": "Breakdown of where time is spent.",
                            "notes": null
                        }
                    },
                    {
                        "visualization": "billboard",
                        "layout": {
                            "width": 1,
                            "height": 1,
                            "row": 7,
                            "column": 1
                        },
                        "widget_id": 11159031,
                        "data": [
                            {
                                "nrql": "SELECT max(duration - databaseDuration - externalDuration) FROM Transaction SINCE 1 day ago"
                            }
                        ],
                        "presentation": {
                            "title": "Max Business Language Duration",
                            "notes": null,
                            "threshold": {}
                        }
                    },
                    {
                        "visualization": "billboard",
                        "layout": {
                            "width": 1,
                            "height": 1,
                            "row": 7,
                            "column": 2
                        },
                        "widget_id": 11159032,
                        "data": [
                            {
                                "nrql": "SELECT max(databaseDuration) FROM Transaction SINCE 1 day ago"
                            }
                        ],
                        "presentation": {
                            "title": "Max Database Time Spent",
                            "notes": null,
                            "threshold": {}
                        }
                    },
                    {
                        "visualization": "billboard",
                        "layout": {
                            "width": 1,
                            "height": 1,
                            "row": 7,
                            "column": 3
                        },
                        "widget_id": 11159033,
                        "data": [
                            {
                                "nrql": "SELECT max(externalDuration) FROM Transaction SINCE 1 day ago"
                            }
                        ],
                        "presentation": {
                            "title": "Max External Requests",
                            "notes": null,
                            "threshold": {}
                        }
                    }
                ],
                "filter": {
                    "event_types": [
                        "Transaction",
                        "TransactionError"
                    ],
                    "attributes": [
                        "error.message",
                        "appName"
                    ]
                }
            }
        }

```

</details>


**Dashboard: Synthetics Audit**

<details>
<summary>
<i>Synthetics Audit</i>
</summary>

```json

{
            "dashboard": {
                "id": 804683,
                "title": "Synthetics User Audit",
                "description": null,
                "icon": "users",
                "created_at": "2019-01-08T10:20:21Z",
                "updated_at": "2019-01-08T11:55:18Z",
                "visibility": "all",
                "editable": "editable_by_all",
                "metadata": {
                    "version": 1
                },
                "widgets": [
                    {
                        "visualization": "facet_table",
                        "layout": {
                            "width": 2,
                            "height": 1,
                            "row": 1,
                            "column": 1
                        },
                        "widget_id": 8231968,
                        "data": [
                            {
                                "nrql": "SELECT count(*) FROM NrAuditEvent WHERE actionIdentifier LIKE '%synthetics_monitor%'  since 1 days ago FACET targetId limit 25"
                            }
                        ],
                        "presentation": {
                            "title": "Changes by Monitor ID",
                            "notes": null,
                            "drilldown_dashboard_id": 804683
                        }
                    },
                    {
                        "visualization": "markdown",
                        "layout": {
                            "width": 1,
                            "height": 1,
                            "row": 1,
                            "column": 3
                        },
                        "widget_id": 8231969,
                        "data": [
                            {
                                "source": "\n#  Synthetics account changes include:\n\n* synthetics_monitor.create\n* synthetics_monitor.delete\n* synthetics_monitor.update\n\nhttps://docs.newrelic.com/docs/insights/insights-data-sources/default-data/nrauditevent-default-attributes-examples#synth-user"
                            }
                        ],
                        "presentation": {
                            "title": "",
                            "notes": null
                        }
                    },
                    {
                        "visualization": "facet_bar_chart",
                        "layout": {
                            "width": 2,
                            "height": 1,
                            "row": 2,
                            "column": 1
                        },
                        "widget_id": 8231970,
                        "data": [
                            {
                                "nrql": "SELECT count(*) FROM NrAuditEvent WHERE actionIdentifier LIKE '%synthetics_monitor%' since 1 day ago   FACET    actionIdentifier"
                            }
                        ],
                        "presentation": {
                            "title": "Type of Monitor change",
                            "notes": "Text describing the audit event for the targetType",
                            "drilldown_dashboard_id": 804683
                        }
                    },
                    {
                        "visualization": "facet_pie_chart",
                        "layout": {
                            "width": 1,
                            "height": 1,
                            "row": 2,
                            "column": 3
                        },
                        "widget_id": 8231971,
                        "data": [
                            {
                                "nrql": "SELECT count(*) FROM NrAuditEvent WHERE actionIdentifier LIKE '%synthetics_monitor%'  FACET hourof(timestamp) SINCE 24 hours ago"
                            }
                        ],
                        "presentation": {
                            "title": "Daily Changes Views By Hour",
                            "notes": null,
                            "drilldown_dashboard_id": 804126
                        }
                    },
                    {
                        "visualization": "facet_bar_chart",
                        "layout": {
                            "width": 2,
                            "height": 1,
                            "row": 3,
                            "column": 1
                        },
                        "widget_id": 8231972,
                        "data": [
                            {
                                "nrql": "SELECT count(*) FROM NrAuditEvent WHERE actionIdentifier LIKE '%synthetics_monitor%' since 1 day ago   FACET    actorEmail"
                            }
                        ],
                        "presentation": {
                            "title": "Monitor changes by email",
                            "notes": null,
                            "drilldown_dashboard_id": 804683
                        }
                    },
                    {
                        "visualization": "facet_table",
                        "layout": {
                            "width": 1,
                            "height": 1,
                            "row": 3,
                            "column": 3
                        },
                        "widget_id": 8231973,
                        "data": [
                            {
                                "nrql": "SELECT count(*) FROM NrAuditEvent WHERE actionIdentifier LIKE '%synthetics_monitor%' since 1 day ago   FACET    targetType"
                            }
                        ],
                        "presentation": {
                            "title": "Changes by Monitor Type",
                            "notes": null,
                            "drilldown_dashboard_id": null
                        }
                    },
                    {
                        "visualization": "facet_pie_chart",
                        "layout": {
                            "width": 2,
                            "height": 1,
                            "row": 4,
                            "column": 1
                        },
                        "widget_id": 8231974,
                        "data": [
                            {
                                "nrql": "SELECT count(*) FROM NrAuditEvent WHERE actionIdentifier LIKE '%synthetics_monitor%' since 1 day ago   FACET   description"
                            }
                        ],
                        "presentation": {
                            "title": "Changes By Description",
                            "notes": null,
                            "drilldown_dashboard_id": 804126
                        }
                    },
                    {
                        "visualization": "facet_bar_chart",
                        "layout": {
                            "width": 1,
                            "height": 1,
                            "row": 4,
                            "column": 3
                        },
                        "widget_id": 8231975,
                        "data": [
                            {
                                "nrql": "SELECT count(*) FROM NrAuditEvent WHERE actionIdentifier LIKE '%synthetics_monitor%' FACET weekDayOf(timestamp)  since 7 day ago  limit 7"
                            }
                        ],
                        "presentation": {
                            "title": "Weekly Change By Day",
                            "notes": null,
                            "drilldown_dashboard_id": null
                        }
                    },
                    {
                        "visualization": "facet_table",
                        "layout": {
                            "width": 3,
                            "height": 1,
                            "row": 5,
                            "column": 1
                        },
                        "widget_id": 8232179,
                        "data": [
                            {
                                "nrql": "SELECT count(*) FROM NrAuditEvent WHERE actionIdentifier LIKE '%synthetics_monitor%' since 1 day ago   FACET  actorEmail, actorIpAddress, targetId"
                            }
                        ],
                        "presentation": {
                            "title": "Change By IP Address ,Email Address, Monitor ID",
                            "notes": null,
                            "drilldown_dashboard_id": null
                        }
                    },
                    {
                        "visualization": "facet_table",
                        "layout": {
                            "width": 2,
                            "height": 1,
                            "row": 6,
                            "column": 1
                        },
                        "widget_id": 8231978,
                        "data": [
                            {
                                "nrql": "SELECT count(*) FROM NrAuditEvent WHERE actionIdentifier LIKE '%synthetics_monitor%' since 1 day ago   FACET   actorType"
                            }
                        ],
                        "presentation": {
                            "title": "Changes By Role",
                            "notes": null,
                            "drilldown_dashboard_id": 804683
                        }
                    },
                    {
                        "visualization": "line_chart",
                        "layout": {
                            "width": 1,
                            "height": 1,
                            "row": 6,
                            "column": 3
                        },
                        "widget_id": 8231977,
                        "data": [
                            {
                                "nrql": "SELECT count(targetId) FROM NrAuditEvent WHERE actionIdentifier LIKE '%synthetics_monitor%'   since 1 day ago TIMESERIEs"
                            }
                        ],
                        "presentation": {
                            "title": "Changes over time",
                            "notes": null
                        }
                    }
                ],
                "filter": {
                    "event_types": [
                        "NrAuditEvent"
                    ],
                    "attributes": [
                        "timestamp"
                    ]
                }
            }
        }

```

</details>




**Dashboard: Synthetics Debugging Dashboard**

<details>
<summary>
<i>Synthetics Debugging Dashboard</i>
</summary>

```json

{
            "dashboard": {
                "id": 710968,
                "title": "Synthetics Debugging Dashboard",
                "description": null,
                "icon": "bar-chart",
                "created_at": "2018-09-10T08:12:42Z",
                "updated_at": "2018-09-14T10:20:39Z",
                "visibility": "all",
                "editable": "editable_by_all",
                "ui_url": "https://insights.newrelic.com/accounts/485640/dashboards/710968",
                "api_url": "https://api.newrelic.com/v2/dashboards/710968",
                "metadata": {
                    "version": 1
                },
                "widgets": [
                    {
                        "visualization": "faceted_line_chart",
                        "layout": {
                            "width": 1,
                            "height": 1,
                            "row": 1,
                            "column": 1
                        },
                        "widget_id": 6616069,
                        "data": [
                            {
                                "nrql": "SELECT count(*) from SyntheticCheck WHERE result = 'FAILED' facet locationLabel since 1 day  ago  TIMESERIES 30 minutes"
                            }
                        ],
                        "presentation": {
                            "title": "Count Failures by location",
                            "notes": null
                        }
                    },
                    {
                        "visualization": "faceted_line_chart",
                        "layout": {
                            "width": 2,
                            "height": 1,
                            "row": 1,
                            "column": 2
                        },
                        "widget_id": 6616070,
                        "data": [
                            {
                                "nrql": "SELECT percentage(uniqueCount(monitorId), where result = 'FAILED' ) from SyntheticCheck  TIMESERIES 5 minutes SINCE  30 minutes ago FACET locationLabel limit 20"
                            }
                        ],
                        "presentation": {
                            "title": "Percentage failures by location",
                            "notes": null
                        }
                    },
                    {
                        "visualization": "faceted_line_chart",
                        "layout": {
                            "width": 1,
                            "height": 1,
                            "row": 2,
                            "column": 1
                        },
                        "widget_id": 6616071,
                        "data": [
                            {
                                "nrql": "SELECT percentage(uniqueCount(monitorId) , where result ='FAILED' ) from SyntheticCheck where location IS NOT NULL   TIMESERIES 1 minutes since 6 hours ago FACET locationLabel"
                            }
                        ],
                        "presentation": {
                            "title": "Monitor Failure % - 6 hour",
                            "notes": null
                        }
                    },
                    {
                        "visualization": "faceted_line_chart",
                        "layout": {
                            "width": 2,
                            "height": 1,
                            "row": 2,
                            "column": 2
                        },
                        "widget_id": 6616072,
                        "data": [
                            {
                                "nrql": "SELECT percentage(uniqueCount(monitorId) , where result ='FAILED' ) from SyntheticCheck where location IS NOT NULL  TIMESERIES 5 minutes since 24 hours ago FACET locationLabel"
                            }
                        ],
                        "presentation": {
                            "title": "Monitor Failure % - 24 hour",
                            "notes": null
                        }
                    },
                    {
                        "visualization": "facet_bar_chart",
                        "layout": {
                            "width": 2,
                            "height": 1,
                            "row": 3,
                            "column": 1
                        },
                        "widget_id": 6616570,
                        "data": [
                            {
                                "nrql": "SELECT max(duration) FROM SyntheticRequest FACET monitorName, URL SINCE  24 hours ago"
                            }
                        ],
                        "presentation": {
                            "title": "Max Duration",
                            "notes": null,
                            "drilldown_dashboard_id": null
                        }
                    },
                    {
                        "visualization": "facet_bar_chart",
                        "layout": {
                            "width": 1,
                            "height": 1,
                            "row": 3,
                            "column": 3
                        },
                        "widget_id": 6640371,
                        "data": [
                            {
                                "nrql": "SELECT count(*) FROM SyntheticRequest SINCE 24 hours ago FACET domain LIMIT 100"
                            }
                        ],
                        "presentation": {
                            "title": "Domain",
                            "notes": "The domain portion of the request URL.",
                            "drilldown_dashboard_id": 710968
                        }
                    },
                    {
                        "visualization": "facet_bar_chart",
                        "layout": {
                            "width": 1,
                            "height": 1,
                            "row": 4,
                            "column": 1
                        },
                        "widget_id": 6640339,
                        "data": [
                            {
                                "nrql": "SELECT count(*) FROM SyntheticRequest SINCE  24 hours  ago FACET URL LIMIT 10"
                            }
                        ],
                        "presentation": {
                            "title": "Requests by URL",
                            "notes": "The full request URL.",
                            "drilldown_dashboard_id": 710968
                        }
                    },
                    {
                        "visualization": "facet_pie_chart",
                        "layout": {
                            "width": 1,
                            "height": 1,
                            "row": 4,
                            "column": 2
                        },
                        "widget_id": 6640366,
                        "data": [
                            {
                                "nrql": "SELECT count(*) FROM SyntheticRequest SINCE 24 hours ago FACET contentCategory LIMIT 100"
                            }
                        ],
                        "presentation": {
                            "title": "Content Category",
                            "notes": "The media type  of the content returned by the host; for example, text/html or image/gif.",
                            "drilldown_dashboard_id": 710968
                        }
                    },
                    {
                        "visualization": "facet_pie_chart",
                        "layout": {
                            "width": 1,
                            "height": 1,
                            "row": 4,
                            "column": 3
                        },
                        "widget_id": 6640406,
                        "data": [
                            {
                                "nrql": "SELECT count(*) FROM SyntheticRequest SINCE 24 hours ago FACET responseStatus LIMIT 10"
                            }
                        ],
                        "presentation": {
                            "title": "Response Status",
                            "notes": null,
                            "drilldown_dashboard_id": null
                        }
                    },
                    {
                        "visualization": "facet_pie_chart",
                        "layout": {
                            "width": 1,
                            "height": 1,
                            "row": 5,
                            "column": 1
                        },
                        "widget_id": 6640385,
                        "data": [
                            {
                                "nrql": "SELECT count(*) FROM SyntheticRequest SINCE 24 hours ago  FACET host LIMIT 100"
                            }
                        ],
                        "presentation": {
                            "title": "Hosts",
                            "notes": "The hostname of the server that processed the request.",
                            "drilldown_dashboard_id": 710968
                        }
                    },
                    {
                        "visualization": "facet_bar_chart",
                        "layout": {
                            "width": 1,
                            "height": 1,
                            "row": 5,
                            "column": 2
                        },
                        "widget_id": 6640399,
                        "data": [
                            {
                                "nrql": "SELECT count(*) FROM SyntheticRequest SINCE 24 hours ago FACET locationLabel LIMIT 10"
                            }
                        ],
                        "presentation": {
                            "title": "Location",
                            "notes": "The request location",
                            "drilldown_dashboard_id": 710968
                        }
                    },
                    {
                        "visualization": "facet_pie_chart",
                        "layout": {
                            "width": 1,
                            "height": 1,
                            "row": 5,
                            "column": 3
                        },
                        "widget_id": 6640409,
                        "data": [
                            {
                                "nrql": "SELECT count(*) FROM SyntheticRequest SINCE yesterday FACET verb LIMIT 100"
                            }
                        ],
                        "presentation": {
                            "title": "Command",
                            "notes": "The protocol (such as GET or POST) used to make the request.",
                            "drilldown_dashboard_id": 710968
                        }
                    },
                    {
                        "visualization": "facet_pie_chart",
                        "layout": {
                            "width": 1,
                            "height": 1,
                            "row": 6,
                            "column": 1
                        },
                        "widget_id": 6640435,
                        "data": [
                            {
                                "nrql": "SELECT count(*) FROM SyntheticRequest SINCE yesterday where  responseCode !=200 FACET URL limit 100"
                            }
                        ],
                        "presentation": {
                            "title": "Non HTTP 200 by URL",
                            "notes": null,
                            "drilldown_dashboard_id": 710968
                        }
                    },
                    {
                        "visualization": "facet_table",
                        "layout": {
                            "width": 2,
                            "height": 1,
                            "row": 6,
                            "column": 2
                        },
                        "widget_id": 6640434,
                        "data": [
                            {
                                "nrql": "SELECT average(requestBodySize) , average(requestHeaderSize), average(responseBodySize), average(responseHeaderSize) from SyntheticRequest  since  24 hours ago FACET URL limit 100"
                            }
                        ],
                        "presentation": {
                            "title": "Average Request and Response size by Domain",
                            "notes": null,
                            "drilldown_dashboard_id": 710968
                        }
                    },
                    {
                        "visualization": "facet_table",
                        "layout": {
                            "width": 2,
                            "height": 1,
                            "row": 7,
                            "column": 1
                        },
                        "widget_id": 6640433,
                        "data": [
                            {
                                "nrql": "SELECT max(requestBodySize) , max(requestHeaderSize), max(responseBodySize), max(responseHeaderSize) from SyntheticRequest  since 24 hours ago FACET URL limit 100"
                            }
                        ],
                        "presentation": {
                            "title": "Max Request and Response size",
                            "notes": null,
                            "drilldown_dashboard_id": 710968
                        }
                    }
                ],
                "filter": {
                    "event_types": [
                        "Synthetics",
                        "SyntheticRequest"
                    ],
                    "attributes": []
                }
            }
        }

```

</details>




**Dashboard: DevOps Dashboard**

<details>
<summary>
<i>DevOps Dashboard</i>
</summary>

```json

{
            "dashboard": {
                "title": "DevOps Dashboard: Domain Knowledge",
                "description": null,
                "icon": "bar-chart",
                "visibility": "all",
                "editable": "editable_by_all",
                "metadata": {
                    "version": 1
                },
                "widgets": [
                    {
                        "visualization": "markdown",
                        "layout": {
                            "width": 3,
                            "height": 1,
                            "row": 1,
                            "column": 1
                        },
                        "data": [
                            {
                                "source": "# Motivation\n---\n\nThis dashboard provides you with the knowledge you need to understand your overall Account Health with a focus on DevOps. Digging a bit deeper, this dashboard provides insight into SLA, MTTR!\n\nhttps://discuss.newrelic.com/t/devops-dashboard-domain-knowledge/61717"
                            }
                        ],
                        "presentation": {
                            "title": "",
                            "notes": null
                        }
                    },
                    {
                        "visualization": "attribute_sheet",
                        "layout": {
                            "width": 1,
                            "height": 1,
                            "row": 2,
                            "column": 1
                        },
                        "data": [
                            {
                                "nrql": "SELECT count(*) * 30 as 'Passing', count(*) / 2 as 'Failing' FROM SyntheticCheck SINCE 30 MINUTES AGO"
                            }
                        ],
                        "presentation": {
                            "title": "Unit Tests",
                            "notes": "Using some simple math, this dashboard looks measures unit tests"
                        }
                    },
                    {
                        "visualization": "facet_bar_chart",
                        "layout": {
                            "width": 1,
                            "height": 1,
                            "row": 3,
                            "column": 1
                        },
                        "data": [
                            {
                                "nrql": "from SyntheticCheck select 100 - percentage(count(*), WHERE result = 'SUCCESS') as 'Downtime (%)' facet monitorName since 1 day ago"
                            }
                        ],
                        "presentation": {
                            "title": "Downtime by Monitor",
                            "notes": "Facets downtime percentage by` monitorName`",
                            "drilldown_dashboard_id": null
                        }
                    },
                    {
                        "visualization": "facet_bar_chart",
                        "layout": {
                            "width": 2,
                            "height": 1,
                            "row": 3,
                            "column": 2
                        },
                        "data": [
                            {
                                "nrql": "from SyntheticCheck SELECT percentage(count(*), WHERE result = 'SUCCESS') facet locationLabel since 1 day ago"
                            }
                        ],
                        "presentation": {
                            "title": "Uptime by Location",
                            "notes": "Facets uptime percentage by `locationLabel`",
                            "drilldown_dashboard_id": null
                        }
                    },
                    {
                        "visualization": "facet_table",
                        "layout": {
                            "width": 1,
                            "height": 1,
                            "row": 4,
                            "column": 1
                        },
                        "data": [
                            {
                                "nrql": "from SyntheticCheck select latest(result) as 'Status' facet monitorName"
                            }
                        ],
                        "presentation": {
                            "title": "Latest Status",
                            "notes": "Displays the most recent status from your Synthetics Monitors",
                            "drilldown_dashboard_id": null
                        }
                    },
                    {
                        "visualization": "gauge",
                        "layout": {
                            "width": 1,
                            "height": 1,
                            "row": 4,
                            "column": 2
                        },
                        "data": [
                            {
                                "nrql": "SELECT percentage(count(*), WHERE result = 'SUCCESS') FROM SyntheticCheck since 1 month ago"
                            }
                        ],
                        "presentation": {
                            "title": "1 Month SLA",
                            "notes": "Calculates the SLA for your apps in the last month",
                            "threshold": {
                                "red": 100
                            }
                        }
                    },
                    {
                        "visualization": "billboard_comparison",
                        "layout": {
                            "width": 1,
                            "height": 1,
                            "row": 4,
                            "column": 3
                        },
                        "data": [
                            {
                                "nrql": "SELECT average(duration) * 100 AS 'Minutes' FROM Transaction since 1 day ago compare with 1 week ago"
                            }
                        ],
                        "presentation": {
                            "title": "MTTR",
                            "notes": "Calculates the average transaction duration compared to last week"
                        }
                    },
                    {
                        "visualization": "line_chart",
                        "layout": {
                            "width": 1,
                            "height": 1,
                            "row": 5,
                            "column": 1
                        },
                        "data": [
                            {
                                "nrql": "from Transaction select percentile(duration , 50, 95, 99) as 'Response Time' TIMESERIES since 1 day ago"
                            }
                        ],
                        "presentation": {
                            "title": "Response Time Percentiles (APM)",
                            "notes": "Calculates the percentiles of your transaction's `duration`"
                        }
                    },
                    {
                        "visualization": "faceted_line_chart",
                        "layout": {
                            "width": 1,
                            "height": 1,
                            "row": 5,
                            "column": 2
                        },
                        "data": [
                            {
                                "nrql": "SELECT count(*) from TransactionError facet appName TIMESERIES auto since 1 day ago"
                            }
                        ],
                        "presentation": {
                            "title": "Errors by App",
                            "notes": "Displays number of areas faceted by `appName` over time"
                        }
                    },
                    {
                        "visualization": "faceted_line_chart",
                        "layout": {
                            "width": 1,
                            "height": 1,
                            "row": 6,
                            "column": 1
                        },
                        "data": [
                            {
                                "nrql": "from Transaction select count(*) facet host TIMESERIES since 1 day ago limit 5"
                            }
                        ],
                        "presentation": {
                            "title": "Throughput by Host",
                            "notes": "Calculates the total throughput faceted by host"
                        }
                    },
                    {
                        "visualization": "heatmap",
                        "layout": {
                            "width": 1,
                            "height": 1,
                            "row": 6,
                            "column": 2
                        },
                        "data": [
                            {
                                "nrql": "SELECT histogram(databaseDuration*300, width: 50, buckets: 20) FROM Transaction FACET name SINCE 1 hour ago LIMIT 10"
                            }
                        ],
                        "presentation": {
                            "title": "Database Performance",
                            "notes": "Displays the database performance in a heatmap",
                            "drilldown_dashboard_id": null
                        }
                    },
                    {
                        "visualization": "faceted_line_chart",
                        "layout": {
                            "width": 1,
                            "height": 1,
                            "row": 6,
                            "column": 3
                        },
                        "data": [
                            {
                                "nrql": "SELECT average(duration) FROM PageView TIMESERIES facet appName"
                            }
                        ],
                        "presentation": {
                            "title": "Average Response Time by App (Browser)",
                            "notes": "Calculates the average duration of a page load"
                        }
                    },
                    {
                        "visualization": "gauge",
                        "layout": {
                            "width": 1,
                            "height": 1,
                            "row": 7,
                            "column": 1
                        },
                        "data": [
                            {
                                "nrql": "SELECT average(cpuUserPercent) as 'Percent' from SystemSample since 1 hour ago"
                            }
                        ],
                        "presentation": {
                            "title": "CPU Usage",
                            "notes": "Calculates the average CPU percent",
                            "threshold": {
                                "red": 100
                            }
                        }
                    },
                    {
                        "visualization": "gauge",
                        "layout": {
                            "width": 1,
                            "height": 1,
                            "row": 7,
                            "column": 2
                        },
                        "data": [
                            {
                                "nrql": "SELECT average(memoryUsedBytes) / (average(memoryUsedBytes) + average(memoryFreeBytes)) * 100 as 'Percent' FROM SystemSample since 1 hour ago"
                            }
                        ],
                        "presentation": {
                            "title": "Memory Usage",
                            "notes": "Calculates the average percentage of used memory",
                            "threshold": {
                                "red": 100
                            }
                        }
                    },
                    {
                        "visualization": "gauge",
                        "layout": {
                            "width": 1,
                            "height": 1,
                            "row": 7,
                            "column": 3
                        },
                        "data": [
                            {
                                "nrql": "SELECT average(diskUsedPercent) as 'Percent' from StorageSample since 1 hour ago"
                            }
                        ],
                        "presentation": {
                            "title": "Disk Storage",
                            "notes": "Calculates the average used disk storage",
                            "threshold": {
                                "red": 100
                            }
                        }
                    }
                ],
                "filter": null
            }
        }

```

</details>


**Dashboard: See All Visualisations Dashboard**

<details>
<summary>
<i>Visualisations Dashboard</i>
</summary>

```json

{
  "dashboard": {
    "title": "CSE - Insights Visualisation Example",
    "description": "",
    "icon": "bar-chart",
    "visibility": "all",
    "editable": "editable_by_all",
    "metadata": {
      "version": 1
    },
    "widgets": [
      {
        "visualization": "markdown",
        "layout": {
          "width": 1,
          "height": 1,
          "row": 1,
          "column": 1
        },
        "data": [
          {
            "source": "# W3C Timing\n\n![](https://www.w3.org/TR/navigation-timing/timing-overview.png)\n\n\n---\n\n## Description\n\n---\nThe intent is to provide a complete end-to-end latency picture when measuring a Web application. Developers can then fine tune their applications based on those information. \n\n[W3C](https://www.w3.org/blog/2012/09/performance-timing-information/)"
          }
        ],
        "presentation": {
          "title": "",
          "notes": null
        }
      },
      {
        "visualization": "facet_table",
        "layout": {
          "width": 1,
          "height": 1,
          "row": 1,
          "column": 5
        },
        "data": [
          {
            "nrql": "SELECT count(*) AS '#Visits', average(duration) as 'Avg Load Time' FROM PageView SINCE 1 week ago  FACET countryCode"
          }
        ],
        "presentation": {
          "title": "Table Chart",
          "notes": "What are the number of visits and the average performance of my website per country since the last week",
          "drilldown_dashboard_id": null
        }
      },
      {
        "visualization": "faceted_area_chart",
        "layout": {
          "width": 1,
          "height": 1,
          "row": 6,
          "column": 5
        },
        "data": [
          {
            "nrql": "SELECT count(*) FROM PageView FACET countryCode TIMESERIES auto since 1 day AGO"
          }
        ],
        "presentation": {
          "title": "Stacked Area Chart",
          "notes": null
        }
      },
      {
        "visualization": "facet_bar_chart",
        "layout": {
          "width": 1,
          "height": 1,
          "row": 7,
          "column": 1
        },
        "data": [
          {
            "nrql": "SELECT count(*) FROM PageView SINCE 1 hour ago FACET deviceType"
          }
        ],
        "presentation": {
          "title": "Bar Chart",
          "notes": "What is the most used device by my customers to access my website since the last hour.",
          "drilldown_dashboard_id": null
        }
      },
      {
        "visualization": "histogram",
        "layout": {
          "width": 1,
          "height": 1,
          "row": 10,
          "column": 5
        },
        "data": [
          {
            "nrql": "SELECT histogram(duration, 10, 40) FROM PageView SINCE 1 week ago"
          }
        ],
        "presentation": {
          "title": "Histogram Chart",
          "notes": "What is the distribution of performance in buckets with a ceiling of 10 and put into 40 groups."
        }
      },
      {
        "visualization": "uniques_list",
        "layout": {
          "width": 1,
          "height": 1,
          "row": 11,
          "column": 1
        },
        "data": [
          {
            "nrql": "SELECT uniques(userAgentOS) FROM PageView SINCE 1 day ago"
          }
        ],
        "presentation": {
          "title": "List Chart",
          "notes": "What are the different OS used by my customer accessing my website in the last 1 day"
        }
      },
      {
        "visualization": "billboard",
        "layout": {
          "width": 1,
          "height": 1,
          "row": 13,
          "column": 5
        },
        "data": [
          {
            "nrql": "SELECT count(*) FROM TransactionError SINCE 1 day ago"
          }
        ],
        "presentation": {
          "title": "Billboard Chart",
          "notes": "What is the number of transaction errors since the last 1 day",
          "threshold": {
            "red": 80,
            "yellow": 40
          }
        }
      },
      {
        "visualization": "heatmap",
        "layout": {
          "width": 1,
          "height": 1,
          "row": 13,
          "column": 9
        },
        "data": [
          {
            "nrql": "SELECT histogram(duration,10,20) FROM Transaction SINCE 1 week ago FACET appName"
          }
        ],
        "presentation": {
          "title": "Heat Map Chart",
          "notes": "What is the performance of my monitors apps over the last week",
          "drilldown_dashboard_id": null
        }
      },
      {
        "visualization": "gauge",
        "layout": {
          "width": 1,
          "height": 1,
          "row": 14,
          "column": 1
        },
        "data": [
          {
            "nrql": "SELECT uniqueCount(session) FROM PageView SINCE 1 week ago"
          }
        ],
        "presentation": {
          "title": "Guage Chart",
          "notes": "Where do I stand in terms of unique Sessions against my goal for the week.",
          "threshold": {
            "red": 70000
          }
        }
      },
      {
        "visualization": "comparison_line_chart",
        "layout": {
          "width": 1,
          "height": 1,
          "row": 16,
          "column": 5
        },
        "data": [
          {
            "nrql": "SELECT apdex(duration), apdex(backendDuration) FROM PageView  since 1 week ago TIMESERIES AUTO COMPARE WITH 1 weeks ago"
          }
        ],
        "presentation": {
          "title": "Compre WITH",
          "notes": null
        }
      },
      {
        "visualization": "billboard_comparison",
        "layout": {
          "width": 1,
          "height": 1,
          "row": 16,
          "column": 9
        },
        "data": [
          {
            "nrql": "SELECT average(duration) FROM PageView SINCE 30 minutes ago COMPARE WITH 1 day ago"
          }
        ],
        "presentation": {
          "title": "Billboard Compare With",
          "notes": null
        }
      },
      {
        "visualization": "facet_pie_chart",
        "layout": {
          "width": 1,
          "height": 1,
          "row": 17,
          "column": 1
        },
        "data": [
          {
            "nrql": "SELECT count(*) FROM PageView SINCE 1 week ago FACET city"
          }
        ],
        "presentation": {
          "title": "Pie Chart",
          "notes": "Where does my customer connecting to my website come from in the last week.",
          "drilldown_dashboard_id": null
        }
      },
      {
        "visualization": "line_chart",
        "layout": {
          "width": 1,
          "height": 1,
          "row": 19,
          "column": 5
        },
        "data": [
          {
            "nrql": "SELECT average(duration) as 'AVG', percentile(duration, 50) AS 'Median' FROM Transaction SINCE 1 hour ago TIMESERIES"
          }
        ],
        "presentation": {
          "title": "Line Chart",
          "notes": "What is the average and media value for my backend performance over the last hour."
        }
      },
      {
        "visualization": "raw_json",
        "layout": {
          "width": 1,
          "height": 1,
          "row": 19,
          "column": 10
        },
        "data": [
          {
            "nrql": "SELECT * FROM Transaction"
          }
        ],
        "presentation": {
          "title": "JSON Output",
          "notes": "what type of data will be returned by my API query to Insights."
        }
      },
      {
        "visualization": "funnel",
        "layout": {
          "width": 1,
          "height": 1,
          "row": 20,
          "column": 1
        },
        "data": [
          {
            "nrql": "SELECT funnel(session, WHERE pageUrl = 'https://www.domain.com/' AS 'HOME', WHERE pageUrl LIKE '%review%' AS 'REVIEWS' ) FROM PageView SINCE 1 week ago"
          }
        ],
        "presentation": {
          "title": "Funnel Chart",
          "notes": "How many people have gone from my homepage to the reviews pages."
        }
      },
      {
        "visualization": "line_chart",
        "layout": {
          "width": 1,
          "height": 1,
          "row": 23,
          "column": 9
        },
        "data": [
          {
            "nrql": "SELECT count(*) FROM PageView SINCE 1 hour ago TIMESERIES"
          }
        ],
        "presentation": {
          "title": "Area Chart",
          "notes": "What is the evolution of the number of pageviews over the last hour."
        }
      }
    ],
    "filter": {
      "event_types": [
        "PageView",
        "Transaction",
        "TransactionError"
      ],
      "attributes": []
    }
  }
}

```

</details>

...

Now that you have these dashboard definitions, copy the one you intend to use. Then paste the Dashboard Definition into the API Explorer here: https://rpm.newrelic.com/api/explore/dashboards/create. 
> IMPORTANT NOTE: Ensure you are using your the appropriate API key to bring these dashboards into the appropriate account.

For additional reference: 
* [NRQL Syntax](https://docs.newrelic.com/docs/insights/nrql-new-relic-query-language/nrql-reference/nrql-syntax-components-functions)
* [Introduction to NRQL](https://docs.newrelic.com/docs/insights/nrql-new-relic-query-language/using-nrql/introduction-nrql)
* [Writing NRQL Queries](https://learn.newrelic.com/writing-nrql-queries)

---

|<img src="/MD/IMG/logo.png" alt="{MyCompany}" width="50%"> |[Home](/MD/readme.md)	| [Product Summary](/MD/product-summary.md) |[Account General](/MD/Account/Account.md)	| [Users & Roles](/MD/Account/UsersAndRoles.md) | [Programmability](/MD/Account/Programmability.md)	|  [Automation](/MD/Account/Automation.md) | [APM Lambda](/MD/Products/APMLambda.md) |
|:---:	|:---:	|:---:	|:---:	|:---:	|:---:	|:---:	|:---:	|
|Products	|[APM](/MD/Products/APM.md) |[Browser](/MD/Products/Browser.md)| [Synthetics](/MD/Products/Synthetics.md) |[Insights](/MD/Products/Insights.md) |[Alerts](/MD/Products/Alerts.md) | [Infrastructure](/MD/Products/Infrastructure.md) | [Logs](/MD/Products/Logs.md) |
