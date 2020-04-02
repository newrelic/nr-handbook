|<img src="/MD/IMG/logo.png" alt="{MyCompany}" width="50%"> |[Home](/MD/readme.md)	| [Product Summary](/MD/product-summary.md) |[Account General](/MD/Account/Account.md)	| [Users & Roles](/MD/Account/UsersAndRoles.md) | [Programmability](/MD/Account/Programmability.md)	|  [Automation](/MD/Account/Automation.md) | [APM Lambda](/MD/Products/APMLambda.md) |
|:---:	|:---:	|:---:	|:---:	|:---:	|:---:	|:---:	|:---:	|
|Products	|[APM](/MD/Products/APM.md) |[Browser](/MD/Products/Browser.md)| [Synthetics](/MD/Products/Synthetics.md) |[Insights](/MD/Products/Insights.md) |[Alerts](/MD/Products/Alerts.md) | [Infrastructure](/MD/Products/Infrastructure.md) | [Logs](/MD/Products/Logs.md) |

# New Relic Handbook

# New Relic Infrastructure Best Practices

## Install the Infrastructure agent across your entire environment

Setting up a New Relic Infrastructure agent on a single host is a pretty painless task. But doing that for 1,000 hosts? Less so. New Relic Infrastructure was designed to help enterprise customers monitor their large and dynamically changing environments at scale. That's why New Relic integrates with popular config management tools like **Chef**, **Puppet**, and **Ansible**.

You can also quickly deploy the agent on individual Windows or Linux hosts.

[Install New Relic Infrastructure using Config Management Tools](https://docs.newrelic.com/docs/infrastructure/new-relic-infrastructure/config-management-tools)

[Manual Infrastructure Install Linux](https://docs.newrelic.com/docs/infrastructure/new-relic-infrastructure/installation/install-infrastructure-windows-server)

[Manual Infrastructure Install Windows](https://docs.newrelic.com/docs/infrastructure/new-relic-infrastructure/installation/install-infrastructure-linux)

Use this opportunity to get a jump start on tagging. If there is static information you can supply about the host or machine it's monitoring, this can be pulled into New Relic as additional tag information and allow you to easily filter to it. Perhaps it's a Team that owns the machine or server, or a particular Application set or maybe a region. You can [apply custom attributes in the configuration file of New Relic Infrastructure](https://docs.newrelic.com/docs/infrastructure/new-relic-infrastructure/configuration/configure-infrastructure-agent#attributes) meaning if you do this at the start, you don't need to push configuration changes to every host.

## Configure the Cloud Native Integration
New Relic has multiple Cloud integration with some of the largest Cloud vendors in AWS, Azure and GCP. These Cloud integrations pull performance metrics from the APIs of the services where typically agent software to monitor cannot be installed. So monitoring your Infrastructure extends beyond just CPU, memory, and storage utilization. That’s why Infrastructure Pro has out-of-the-box Integrations that allow you to monitor all the services that support your hosts as well. Activate any of our integrations to extend monitoring to your AWS/GCP/Azure services and access the pre-configured dashboards that appear for each of them.

If you have an AWS environment, in addition to installing the Infrastructure agent on your EC2 instances to monitor them, we also recommend configuring the EC2 integration so that Infrastructure can automatically import all the tags and metadata associated with your AWS instances. This allows you to filter down to a part of your infrastructure using the same AWS tags (example, ECTag_Role=’Kafka’), and slice-and-dice your data in multiple ways. Additionally, our ‘Alerts’ and ‘Saved Filter Sets’ are completely tag-driven and dynamic, so they automatically add/remove instances matching these tags to give our users the most real-time views that scale with your cloud infrastructure.

**How to do it**
From the New Relic Infrastructure menu bar
1. Select Integrations.
2. Enable the EC2 integration.
3. Click on Save Changes on the bottom right.

## Create filter sets
With New Relic Infrastructure, users can create filter sets to organize hosts in a meaningful way. This can be in a multitude of approaches which will allow you to visualise your infrastructure and resources based on criteria that matter the most to users. This allows you to optimize your resources by using a focused view to monitor, detect, and resolve any problems proactively. The attributes for filtering are populated from entities being monitored, the auto-imported EC2 tags or custom tags that may be applied to hosts. You can combine as many filters as you want in a filter set, and save them to share with other people in your account.

You’ll also be able to see the color-coded health status of each host inside the filter set, so you can quickly identify problematic areas of your infrastructure. Additionally, filter sets can be used in the health map to get an overview of your infrastructure performance at a glance based on the filters that matter to your teams. Finally you'll be able to quickly use these filter sets again when creating alerts based on the resource usage of these resources. See next Best Practice point for more.

**How to do it**
1. From the New Relic Infrastructure menu bar, select Compute.
2. Click on the Add Filter button on the left and specify your filtering criteria.
3. Click on the edit icon next to New Filter Set and set the name for your filter set.
4. Click on Save.
5. Access your filter set by clicking on Saved Filter Sets at the top of the left sidebar.

## Create alert conditions
With New Relic Infrastructure, you can create alert conditions directly within the context of what you are currently monitoring with New Relic. For example, if you are viewing a filter set comprised of a large number of hosts and notice a problem, you don’t need to create an individual alert condition for every host within. Instead, we recommend initiating the alert condition directly from the chart of the metric you are viewing and creating it based on the filter tags. This will create an alert condition for any hosts that match those tags or filter set, allowing Infrastructure to automatically remove hosts that go offline and add new hosts to the alert condition if they match those tags. Alerts configured once for the appropriate tags will scale correctly across all future hosts. And know that you can also leverage existing alert policies for Infrastructure’s alert conditions.

**How to do it**
For Compute, Network, Storage and Processes Metrics

1. From the New Relic Infrastructure menu bar, select the tab that contains the metrics you want to alert on.
2. Click on the bell icon (“Set Alert”) at the top right of a chart.
3. Name your alert condition.
4. Add additional filters using the Narrow Down Entities drop down.
5. Select a metric and provide the threshold details.
6. Choose an existing alert policy or create a new one.
7. Click on Create.
8. For Integrations

For Integration Metrics

1. From the New Relic Infrastructure menu bar, select Integrations.
2. Click on the Set Alert link for the integration you want to create an alert for.
3. Name your alert condition.
4. Add additional filters using the Narrow Down Entities drop down.
5. Select a metric and provide the threshold details.
6. Choose an existing alert policy or create a new one.
7. Click on Create.

## View Infrastructure data alongside APM data
The integration between New Relic APM and Infrastructure lets you see your APM data and infrastructure data side by side, so you can find the root cause of problems more quickly, no matter where they originate. This allows users to view the performance relationship of your hosts and the applications running on them, allowing for quicker diagnosis of the issue and impact on the business’ health.

Use health maps to quickly spot any issues or alerts related to the health of your applications and how that connects to the supporting infrastructure. The first boxes starting from the top left are those that require your attention.

**How to do it**
1. Click on Health map in the top navigation to access health map.
2. Select the appropriate application-centric or host-centric view, based on your infrastructure filter sets.
3. Use the filter to narrow down the cards to the ones you are interested in.
4. Mouse over the cards to get a tooltip with additional information about the current issues.
5. Click on the title of a card to navigate to the appropriate APM or Infrastructure page with more details about the application or hosts.

You can also select Application Response Time, throughput or error rate as metrics when filtering to host that serve up applications (where New Relic APM is present) in the Infrastructure UI. In the Compute section you typically see 3 graphs side by side. On any of these graphs you can adjust and choose different metrics, including the full suite of metric/data points coming from your Infrastructure monitored resources, but also the aforementioned APM metrics.

## Access Infrastructure data in New Relic Insights

Teams that use multiple New Relic products find it useful to create a single dashboard to visually correlate the Infrastructure’s health with Application, Browser and Synthetics metrics. That’s where New Relic Insights comes in. All the granular metrics and events collected by Infrastructure are stored in New Relic Insights and are accessible to you immediately. 

This data is retained for three months for an Essential subscriptions and 13 months for a Pro subscription (For the Infrastructure product, see retention periods for any other products you are subscribed to). Having access to the raw metrics means you can run more custom queries using NRQL, and also create dashboards to share Infrastructure metrics with your team. 

**How to do it**
1. From the New Relic Infrastructure menu bar, select a chart of interest.
2. Select the 3 dots menu icon top right of every chart.
3. Click on the "View in Insights" option.
4. You will now be in Insights with the query added to your editor. 
5. Customise the query to suit or use as is. 
6. Run the query to check the results are as desired.
7. Use the Add to Dashboard button to save the query for later use.

## Update your agents regularly
New Relic’s software engineering team is constantly pushing out improvements and new features to improve our customers’ overall monitoring experience. In order to take advantage of all the awesomeness they’re delivering, we recommend regularly updating to the latest version of the Infrastructure agent.

**How to do it**
From the New Relic Infrastructure menu bar, select Settings.
From the left sidebar, select Agents to check what agent versions are you using.
If needed, update the agent using the instructions for your operating system.

see: https://docs.newrelic.com/docs/infrastructure/new-relic-infrastructure/guides/new-relic-infrastructure-best-practices-guide

# Infrastructure Questions And Answers

**Is it possible to Monitor outdated or security risks in inventory?**

As of today, this information is not available in Insights. However, we are considering such a feature. The Inventory information can be manually utilised to verify if any machine reporting to New Relic is running a particular version of a software. 

---

|<img src="/MD/IMG/logo.png" alt="{MyCompany}" width="50%"> |[Home](/MD/readme.md)	| [Product Summary](/MD/product-summary.md) |[Account General](/MD/Account/Account.md)	| [Users & Roles](/MD/Account/UsersAndRoles.md) | [Programmability](/MD/Account/Programmability.md)	|  [Automation](/MD/Account/Automation.md) | [APM Lambda](/MD/Products/APMLambda.md) |
|:---:	|:---:	|:---:	|:---:	|:---:	|:---:	|:---:	|:---:	|
|Products	|[APM](/MD/Products/APM.md) |[Browser](/MD/Products/Browser.md)| [Synthetics](/MD/Products/Synthetics.md) |[Insights](/MD/Products/Insights.md) |[Alerts](/MD/Products/Alerts.md) | [Infrastructure](/MD/Products/Infrastructure.md) | [Logs](/MD/Products/Logs.md) |
