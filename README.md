# Client Insight for Wealth Management

In this code pattern, we will explore the Client Insight for Wealth Management service. We will use the service to retrieve and display client data and analytics.  These analytics include attrition score, predicting life events and segmenting your clients based on their attributes. This can provide wealth management companies key insights to provide greater service and retaining clients.  In this code pattern, we walk through the service in a Jupyter Notebook to understand the calls and data retrieved from the service. Next, we display the retrieved data through a dashboard by creating a Python Flask web application using the service.

This code pattern is designed for developers with interest in financial services or providing enhanced customer service. When the reader has completed this code pattern, they will understand how to:

* Retrieve client insight through the Client Insight for Wealth Management (CIWM) service
* Walk through Notebook to understand use of the service
* Create a web application with a dashboard to display client insights


# Architecture Flow

![](doc-images/arch.png)

1. The user accesses the application through a web interface to view client profile
2. The application will retrieve client information and analytics through the Client Insight for Wealth Management service
3. The user can walk through notebook to understand the Client Insight for Wealth Management service use case
4. The notebook will allow user to call the Client Insight for Wealth Management service and display retrieved raw data


## Included Components
+ [Client Insight for Wealth Management](https://console.bluemix.net/docs/services/client_insight_wealth/index.html#getting_started_client_insight_wealth_short): Client Insight for Wealth Management service provides a set of analytical models that help you obtain client insights for use in marketing, distribution, and services provision
* [IBM Watson Studio](https://dataplatform.ibm.com): Analyze data using RStudio, Jupyter, and Python in a configured, collaborative environment that includes IBM value-adds, such as managed Spark.
* [Jupyter Notebook](http://jupyter.org/): An open source web application that allows you to create and share documents that contain live code, equations, visualizations, and explanatory text.


## Featured technologies
+ [Python](https://www.python.org/downloads/) Python is a programming language that lets you work more quickly and integrate your systems more effectively.
* [JQuery](https://jquery.com): jQuery is a cross-platform JavaScript library designed to simplify the client-side
scripting of HTML.

# Steps

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

The notebook in the repo provides a descriptive walk through of the service and how it can guide a financial advisor with key insights about the client.  The notebook can be explored on the cloud through Watson Studio, or setup locally with Jupyter Notebook.

## Explore in Watson Studio

Watson Studio provides all the resources to run the notebook.

#### Prerequisites

- [IBM Cloud account](https://console.bluemix.net/registration/?target=%2Fdashboard%2Fapps)

#### Steps

Follow the steps below to launch Watson Studio and open the notebook from this repository.

* First using your IBM Cloud account, sign into [Watson Studio](https://dataplatform.cloud.ibm.com/).  Here you can create a new project by choosing the `New Project` link on the right.

![](doc-images/sign-in-watson-studio.png)

* You can give your project a name and provide a description. Ensure you have a `Cloud Object Storage` which can be linked to the project for storing project assets.


<!--p align="center">
  <img width="800" src="doc-images/arch.png">
</p-->

![](doc-images/create-project.png)

* Once you have your project opened, you can use the `Add to Project` link to add a `Notebook` to the project.  Here we will choose the `From URL` tab to add notebook from this repository.  Prove a name and description for the notebook. And in the `Notebook URL` provide the following url. Click `Create Notebook` to open the notebook.

```
https://github.com/IBM/client-insight-wealth-management/blob/master/notebook/Use%20Client%20Insights%20in%20meeting%20preparations.ipynb
```

![](doc-images/create-notebook.png)

* Once you have the notebook opened in Watson Studio, you can walk through each cell by clicking the `Run` button in the menu.

![](doc-images/watson-studio-notebook.png)

## Locally with Jupyter notebook

The notebook can be opened locally using Jupyter Notebook.  This will open the notebook in a web browser with the Python kernal to run the notebook.

#### Prerequisites

- [Jupyter Notebook](http://jupyter.org/install)
- [Python](https://www.python.org/downloads/)

#### Steps

* First install the notebook's dependencies
```
pip install -r requirements.txt
```

* Next open a terminal and go to the `notebook` folder. Use the following command to open the notebook in a web browser.

```
cd notebook/
jupyter notebook
```

This will open the notebook in a browser. Here, walk through the notebook running each cell to gain understanding for the Client Insight for Wealth Management service.

![](doc-images/jupyter-notebook.png)


## 3. Run the Application

To run the application, go to the root folder and:

+ Run `python run.py`
+ Access the running app in a browser at <http://0.0.0.0:8080/>

![](doc-images/app-scrnshot.png)

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
