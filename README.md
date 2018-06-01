# Client Insight for Wealth Management

In this code pattern, we will explore the Client Insight for Wealth Management service. We will use the service to retrieve and display client data and analytics.  These analytics include attrition score, predicting life events and segmenting your clients based on their attributes. This can provide wealth management companies key insights to provide greater service and retaining clients.  In this code pattern, we walk through the service in a Jupyter Notebook to understand the calls and data retrieved from the service. Next, we display the retrieved data through a dashboard by creating a Python Flask web application using the service.

This code pattern is designed for developers with interest in financial services or providing enhanced customer service. When the reader has completed this code pattern, they will understand how to:

* Retrieve client insight through the Client Insight for Wealth Management (CIWM) service
* Walk through Notebook to understand use of the service
* Create a web application with a dashboard to display client insights


# Architecture Flow

<p align="center">
  <img width="800" src="doc-images/arch.png">
</p>


1. The user accesses the application through a web interface to view client profile
2. The application will retrieve client information and analytics through the Client Insight for Wealth Management service
3. The user can walk through notebook to understand the Client Insight for Wealth Management service use case
4. The notebook will allow user to call the Client Insight for Wealth Management service



## Included Components
+ [Client Insight for Wealth Management](https://console.bluemix.net/docs/services/client_insight_wealth/index.html#getting_started_client_insight_wealth_short) Client Insight for Wealth Management service provides a set of analytical models that help you obtain client insights for use in marketing, distribution, and services provision

## Featured technologies
+ [Jupyter Notebook](http://jupyter.org/) An open source web application that allows you to create and share documents that contain live code, equations, visualizations, and explanatory text
+ [Python](https://www.python.org/downloads/) Python is a programming language that lets you work more quickly and integrate your systems more effectively.


# Steps

### Prerequisites

1. [Clone the repo](#1-clone-the-repo)
2. [Explore the Notebook](#2-explore-the-notebook)
3. [Run the Application](#3-run-the-application)


## 1. Clone the repo

Clone the Client Insight for Wealth Management code locally. In a terminal, run:

```
git clone https://github.com/IBM/client-insight-wealth-management.git
cd client-insight-wealth-management/
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

You can deploy the application to IBM Cloud using the ``Deploy to IBM Cloud`` button or deploy using the IBM Cloud CLI.   

* Deploy the application directly on IBM Cloud using the ``Deploy to IBM Cloud`` button

[![Deploy to IBM Cloud](https://bluemix.net/deploy/button.png)](https://bluemix.net/deploy?repository=https://github.com/IBM/client-insight-wealth-management)


* Use the IBM Cloud CLI to push the app to IBM Cloud.  Login and then inside folder run:

```
bx push
```

This will use the specifications provided in the ``manifest.yml`` file.

# License

[Apache 2.0](LICENSE)
