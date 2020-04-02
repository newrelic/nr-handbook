|<img src="/MD/IMG/logo.png" alt="{MyCompany}" width="50%"> |[Home](/MD/readme.md)	| [Product Summary](/MD/product-summary.md) |[Account General](/MD/Account/Account.md)	| [Users & Roles](/MD/Account/UsersAndRoles.md) | [Programmability](/MD/Account/Programmability.md)	|  [Automation](/MD/Account/Automation.md) | [APM Lambda](/MD/Products/APMLambda.md) |
|:---:	|:---:	|:---:	|:---:	|:---:	|:---:	|:---:	|:---:	|
|Products	|[APM](/MD/Products/APM.md) |[Browser](/MD/Products/Browser.md)| [Synthetics](/MD/Products/Synthetics.md) |[Insights](/MD/Products/Insights.md) |[Alerts](/MD/Products/Alerts.md) | [Infrastructure](/MD/Products/Infrastructure.md) | [Logs](/MD/Products/Logs.md) |

# New Relic Handbook

# New Relic APM  for Lambda Best Practices

## Installation / Configuration

### Charges
New Relic monitoring for AWS Lambda may result in Amazon Web Services charges. The install/enable instructions recommend the use of a newrelic-log-ingestion Lambda function that reports your Lambda data to New Relic. The log-ingestion function is considered a Third Party Service, and AWS charges resulting from your use of it are your responsibility.

### Supported Technologies and Data flow visualisation

**Supported languages:** 
Go, Java, .NET Core, Node.js, and Python. 

**Minimum agent versions:**
Go: 2.7.0
Java: N/A, doesn't use agent
.NET Core (beta): N/A, doesn't use agent
Node.js: 5.6.4
Python: 4.6.0.106

For complete Lambda instrumentation, you must use one of the language-specific AWS SDKs  . If an AWS SDK is not used, Lambda data will appear as external service calls in the UI, with minimal detail. -> https://aws.amazon.com/tools/#sdk

For the following services, only the "target" (Lambda function name, SNS topic ARN, DynamoDB table name, etc.) is reported: Autoscaling, Athena, Batch, Cloud9, CodeBuild, DynamoDB, Greengrass, IoT, Kinesis (Streams, Firehose, Analytics, Video), Lambda, Lex, Machine Learning, MQ, Redshift, Rekognition, S3, SES, SimpleDB, SNS, SQS, Storage Gateway, and STS.

![](https://docs.newrelic.com/sites/default/files/thumbnails/image/new-relic-lambda-monitoring-architecture.png)

When New Relic's Lambda monitoring is enabled, this above how data moves from your Lambda function to New Relic:

The Lambda function is instrumented with New Relic APM agent API calls. When the Lambda is invoked, log data is sent to CloudWatch. CloudWatch collects Lambda log data and sends it to a New Relic log-ingestion Lambda. The log-ingestion Lambda sends that data to New Relic.

### Permissions

New Relic provides a Python based CLI which can aid installation of APM for Lambda. This will require Python 3.3+ to utilise. You can install the CLI with a simple

```
pip3 install newrelic-lambda-cli
```

In order to use the CLI you will need specific requirements on both New Relic account and AWS account for your user permissions.

**New Relic**
Your user must either be an `Admin` level user or a `User` level permission with the additional role of `Infrastructure Manager`

**AWS**
In your AWS account, you will need to have enough permissions to create IAM resources (Role and Policy) and Lambda functions. These resources will be created via CloudFormation stacks, so you will need permissions to create those

```
Resource: *
Actions:
    "cloudformation:CreateChangeSet",
    "cloudformation:CreateStack",
    "cloudformation:DescribeStacks",
    "iam:AttachRolePolicy",
    "iam:CreateRole",
    "iam:GetRole",
    "iam:PassRole",
    "lambda:AddPermission",
    "lambda:CreateFunction",
    "lambda:GetFunction",
    "logs:DeleteSubscriptionFilter",
    "logs:DescribeSubscriptionFilters",
    "logs:PutSubscriptionFilter"
    "s3:GetObject"

Resource: "arn:aws:serverlessrepo:us-east-1:463657938898:applications/NewRelic-log-ingestion"
Actions:
    "serverlessrepo:CreateCloudFormationTemplate"
    "serverlessrepo:GetCloudFormationTemplate"
```

## Installation
Typically installation of the Lambda agent was a manual process. Including the newrelic-sdk and annotating the required elements to time. This was because of limitations in how Lambda could be interacted with previously, but AWS has progressed and improved Lambda, and New Relic is making good use of this to simplify installation.

This CLI mentioned above helps to make your installation a breeze, because it makes use of a concept called Layers in Lambda. 

For steps on [Installation of Lambda using CLI click this link](https://docs.newrelic.com/docs/serverless-function-monitoring/aws-lambda-monitoring/get-started/enable-new-relic-monitoring-aws-lambda#run-script), this will configure you AWS account and a Lambda function that communicates with New Relic. These are configured per region, so if you run across multiple regions and will to monitor Lambda's in multiple regions be sure to complete this process for every region.

Now that we have configured our setup and Lambda for ingesting data back to New Relic, we need to instrument our Lambda function. We have 4 option. Three of these options result in the use of a Layer, one is a manual instrumentation.

If you use Node or Python runtimes, you can use the three options that create a layer. This is recommended as the quickest and easiest way to automatically instrument your function. 

If you use the Go, Java or .NET Core runtimes in Lambda, manual instrumentation is be your best option.

https://docs.newrelic.com/docs/serverless-function-monitoring/aws-lambda-monitoring/get-started/enable-new-relic-monitoring-aws-lambda#instrument-lambda

Once instrumented you will need to subscribe that functions Cloudwatch logs steam to the New Relic log-ingestion lambda. If this command does not work for any reason, [manual definition of streaming is possible](https://docs.newrelic.com/docs/serverless-function-monitoring/aws-lambda-monitoring/get-started/enable-new-relic-monitoring-aws-lambda#manual-stream-logs)

```
newrelic-lambda subscriptions --function FUNCTION_NAME_#1
```

The Lambda CLI comes with a full readme on our Github page for installation and removal, or adapting or upgrading layers as needed.

https://github.com/newrelic/newrelic-lambda-cli

## View Your Data

As Lambda Monitoring is a new product, the entire experience is available in New Relic One. If you're now familiar, the home button top left of the navigation bar will bring you to New Relic One, or you can navigate to one.newrelic.com. 

Once there choose `Entities Explorer` -> `Lambda Functions` (AWS section of left navigation)

There is a column called "Instrumented" if this is YES, your APM installation will be capturing the APM data 

## Distributed Tracing

If you are utilising New Relic's Distributed Tracing offering and are monitoring the applications which invoke your Lambda function, New Relic automatically passes Trace Context between your Distributed Trace monitored services. This allows you to see in the Lambda Function Distributed Tracing section, Traces which have specifically called this function.

If you do not have Distributed Tracing enabled in your backend services and intend to monitor them with New Relic aswell as monitor your Lambda functions with New Relic, this is a setting worth enabling for improved visualisation as it's called within your application structure.


## Error Tracing

New Relic will automatically report out any errors that have occured in your Lambda function including the error Type, MEssage and Stack Trace aswell as attributes related to that invocation.

## Invocation Breakdown

The Invocations Section lists invocations broken down by their AWS Request ID. This gives a quick overview of number of invocations, if the invocation contained an error, external calls and of course Duration of the invocation. 

Clicking into any invocation will give you some details on where the time was spent in the call. At the summary level we try to show if it was database call time, external calls or other work that the time was spent on, alongside the key attributes associated with that invocation.

You also get tabs for Error Trace information if the invocation contained an error, Invocation Breakdown which we utilise information from the Distributed Tracing feature to provide an enhanced view of where the time is spent. 

![](https://www.evernote.com/shard/s467/sh/49a15b4e-a59a-4671-87be-9a76dc2e3351/7f72b7fe6be621c3/res/9ba3970b-d8e6-4451-93b5-d681eace287c/skitch.png)

## Custom Events

A key element of the entire New Relic product is recording custom data which can be especially useful when troubleshooting issues. Lambda APM is no different. If you have an object of data you would like to send over to New Relic. You can simply use in your Lambda code

```
newrelic.record_custom_event('myCustomEvent', {'myFirstCustomEventAttribute': 'MyCustomValue', 'MySecondCustomEventAttribute': 'SecondValue'})
```

This allows you to easily send over some data which is custom or bespoke to the runtime of the Lambda that might help you either build a dashboard around this kind of information (using Insights) or create alerts based on this data from runtime (again using a NRQL alert) or simply having this data for reference in your Invocation Breakdown information.

Similarly you can tag on singular Key Value pairs as custom attributes which will showcase in the attributes section of the Lambda invocation or in Error Trace information. 

`newrelic.agent.add_custom_parameter('url_path_status_code', response.status_code)`

As with APM, Browser, Infrastructure, Custom Attributes and sending custom data at runtime is one of the most powerful features allowing you to filter and drill down using this information or as mentioned above creation alerts or dashboards based on them.


# APM For Lambda Q&A

**Is New Relic One the only way to view this data**

It is a bespoke experience created in New Relic One, however a lot of the shown data is available in Insights allowing you to add the data points coming in from Lambda APM and Cloudwatch to any dashboard and create a single view of your important KPIs.


---

|<img src="/MD/IMG/logo.png" alt="{MyCompany}" width="50%"> |[Home](/MD/readme.md)	| [Product Summary](/MD/product-summary.md) |[Account General](/MD/Account/Account.md)	| [Users & Roles](/MD/Account/UsersAndRoles.md) | [Programmability](/MD/Account/Programmability.md)	|  [Automation](/MD/Account/Automation.md) | [APM Lambda](/MD/Products/APMLambda.md) |
|:---:	|:---:	|:---:	|:---:	|:---:	|:---:	|:---:	|:---:	|
|Products	|[APM](/MD/Products/APM.md) |[Browser](/MD/Products/Browser.md)| [Synthetics](/MD/Products/Synthetics.md) |[Insights](/MD/Products/Insights.md) |[Alerts](/MD/Products/Alerts.md) | [Infrastructure](/MD/Products/Infrastructure.md) | [Logs](/MD/Products/Logs.md) |