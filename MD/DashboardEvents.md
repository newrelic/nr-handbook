<img src="https://newrelic.com/assets/newrelic/source/NewRelic-logo-square.png" alt="New Relic" width="100px">


# New Relic - Acme Corp Handbook.

## Custom Attribute Formatting
Acme Corporation requires that you follow some basic standards like below;

* Take note of [reserved words and attribute limitations.](https://docs.newrelic.com/docs/insights/insights-data-sources/custom-data/insights-custom-data-requirements-limits)
* Use [camelCase](https://simple.wikipedia.org/wiki/CamelCase) for your attribute names.
* Check out the [instructions for sending custom data](https://docs.newrelic.com/docs/insights/insights-data-sources/custom-data/send-custom-data-insights)


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
          "notes": "Average duration of each monitor’s Synthetic checks over the last month."
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

...

Now that you have these dashboard definitions, copy the one you intend to use. Then paste the Dashboard Definition into the API Explorer here: https://rpm.newrelic.com/api/explore/dashboards/create. 
> IMPORTANT NOTE: Ensure you are using your the appropriate API key to bring these dashboards into the appropriate account.

For additional reference: 
* [NRQL Syntax](https://docs.newrelic.com/docs/insights/nrql-new-relic-query-language/nrql-reference/nrql-syntax-components-functions)
* [Introduction to NRQL](https://docs.newrelic.com/docs/insights/nrql-new-relic-query-language/using-nrql/introduction-nrql)
* [Writing NRQL Queries](https://learn.newrelic.com/writing-nrql-queries)

---

|[Home](https://source.datanerd.us/rveitch/handbook/MD/home.md)	|[Users & Roles](UsersAndRoles.md)	|[Apps & Deploys](Apps%26Deploys.md)	|[Recommended Alerts](Alerts.md)	|[Custom Data & Dashboards](DashboardEvents.md)	|  [Support](support.md) |
|:---:	|:---:	|:---:	|:---:	|:---:	|:---:	|