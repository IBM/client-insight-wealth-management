# Client Insight for Wealth Management

In this code pattern, we will explore the Client Insigts for Wealth Management service.  This service provides a set of analytical models that help you obtain client insights for retaining clients and providing greater service. It is specifically designed to support wealth management companies and their clients. You can segment your clients based on their behavior, determine attrition propensity, and enhance client engagement and increasing retention.

When the reader has completed this code pattern, they will understand how to:

* Retrieve client insight through the Client Insigts for Wealth Management (CIWM) service
* Walk through Notebook to understand use of the service
* Create a web application with a dashboard to display client insights


# Architecture Flow


## Included Components
+ [Client Insights for Wealth Management](https://console.bluemix.net/docs/services/client_insight_wealth/index.html#getting_started_client_insight_wealth_short)

## Featured technologies
+ [Jupyter Notebook](http://jupyter.org/)
+ [Python](https://www.python.org/downloads/)


# Steps

### Prerequisites

1. [Clone the repo](#1-clone-the-repo)
2. [Explore the Notebook](#2-explore-the-notebook)
3. [Run the Application](#3-run-the-application)


## 1. Clone the repo

Clone the Client Insights for Wealth Management code locally. In a terminal, run:

```
git clone https://github.com/IBM/client-insights-wealth-management.git
cd client-insights-wealth-management/
```

## 2. Explore the Notebook
In terminal, go to the `notebook` folder and open the notebook.

```
cd notebook/
jupyter notebook
```

This will open the notebook in a browser. Here, walk through the notebook running each cell to gain understading for the Client Insight for Wealth Management service.


## 3. Run the Application

To run the application, go to the root folder and:

+ Run `pip install -r requirements.txt` to install the app's dependencies
+ Run `python run.py`
+ Access the running app in a browser at <http://0.0.0.0:8080/>

### Deploy to IBM Cloud

Use the IBM Cloud CLI to push the app to IBM Cloud.  Login and then inside folder run:

```
bx push
```

This will use the specifications provided in the manifest.yml file.

# License

[Apache 2.0](LICENSE)
