# Copyright 2015 IBM Corp. All Rights Reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
# https://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

import requests
import time
import json
from pandas.io.json import json_normalize
from pygments import highlight
from pygments.lexers import JsonLexer
from pygments.formatters import TerminalFormatter, TerminalTrueColorFormatter

api_key = "b981c399-0513-4d29-a9e5-882ef07e8ba9"
# This is a standard, read-only API key offered to you free of charge for use with this notebook


### Setting up API and URL information
host = "ci-api.mybluemix.net"
basePath = "/api/v2/wealth/"
base_url = "https://" + host + basePath
api_context = "application/json"
head = {"Authorization" : api_key,
        "Content-Type" : api_context}


### Build the Client Profile
# Feel free to try any of the following customer_ids to see different results.
# We have written the commentary for customer_id 5967 only, however.
#customer_id = 5967

#customer_id = 5969
#customer_id = 1020
#customer_id = 1038

page_size = 500


### Retrieve Basic Client Information
def retrieve_basic_client_info(customer_id):

    print("Retrieve a specific customer " + str(customer_id))

    customer_url = "customers/" + str(customer_id)
    #print("GET customer from: " + base_url + customer_url, end="\r", flush=True)
    customerGet = requests.get(base_url + customer_url,headers=head)

    if customerGet.status_code != 200:
        print('\nAn error occured getting customer')
        print('customerGet Status Code: ' + str(customerGet.status_code))
        print(customerGet.text)

    '''
    dfbasic = json_normalize(customerGet.json())

    print("Location: ", dfbasic.geographic_area_home[0])
    print("Head of Household? ", dfbasic.head_of_household_indicator[0])
    print("Current Status: ", dfbasic.status[0])
    print("Client Since: ", dfbasic.relationship_start_date[0])
    print("Last Update: ", dfbasic.effective_date[0])
    print("Marketing Opt In: ", dfbasic.advertising_indicator[0])


    json_str = json.dumps(customerGet.json(), indent=4, sort_keys=True)
    print(highlight(json_str, JsonLexer(), TerminalTrueColorFormatter()))
    '''

    return customerGet.json()

### Retrieve Client Attrition Score
# Get the scores for a specific Customer_ID
# Query String parameters; pageSize, page, score_code, effective_date
def retrieve_client_attrition_score(customer_id):

    resp_json = []
    page_size = 500
    page = 0

    print("Retrieve scores for a specific customer " + str(customer_id))

    while True:
        scores_url = "customers/" + str(customer_id) + "/scores?page_size=" + str(page_size) + "&page=" + str(page) + "&score_code=ATTRITION_SURVIVAL"
        #print("GET page " + str(page) + " from: " + base_url + scores_url, end="\r", flush=True)
        scoresGet = requests.get(base_url + scores_url,headers=head)
        if scoresGet.json() == [] or scoresGet.status_code != 200 : break
        page = page + 1
        resp_json = resp_json + scoresGet.json()

    if scoresGet.status_code != 200:
        print('\nAn error occured getting scores')
        print('scoreGet Status Code: ' + str(scoresGet.status_code))
        print(scoresGet.text)

    '''
    dfscores = json_normalize(resp_json)
    json_str = json.dumps(resp_json, indent=4, sort_keys=True)
    print("\n")
    print(highlight(json_str, JsonLexer(), TerminalTrueColorFormatter()))


    print("Focussing on the information, we see the score_code is {sc}.".format(sc = dfscores.score_code[0]))
    print("This indicates that the associated score_value of {sv} is the likelihood of client {id}".format(sv = dfscores.score_value[0],
                                                                                                           id = dfscores.customer_id[0]))
    print("choosing to leave within the next {fh} months, as shown in the forecast_horizon.".format(fh = dfscores.forecast_horizon[0]))



    print("We can also see the drivers behind this assessment: \n  {f1} \n  {f2} \n  {f3}".format(f1 = dfscores.feature_1_column[0],
                                                                                                  f2 = dfscores.feature_2_column[0],
                                                                                                  f3 = dfscores.feature_3_column[0]))
    '''
    return resp_json


### Retrieve Relevant Life Events
# Get the scores from the trained model and scored customers
# This will return a json document of customers and their scores for all the predictied life events that we scored
# Query String parameters; pageSize, page, score_code, effective_date
def retrieve_relevant_life_events(customer_id):
    print("Retrieve customer's event score data for customer ", customer_id)

    resp_json = []
    page_size = 500
    page = 0

    while True:
        scores_url = "customers/" + str(customer_id) + "/event_scores?page_size=" + str(page_size) + "&page=" + str(page) + "&effective_date=2017-12-31"
        #print("GET page " + str(page) + " from: " + base_url + scores_url, end="\r", flush=True)
        scoresGet = requests.get(base_url + scores_url,headers=head)
        if scoresGet.json() == [] or scoresGet.status_code != 200 : break
        page = page + 1
        resp_json = resp_json + scoresGet.json()

    if scoresGet.status_code != 200:
        print('\nAn error occured getting scores')
        print('scoreGet Status Code: ' + str(scoresGet.status_code))
        print(scoresGet.text)

    '''
    dflep = json_normalize(resp_json)
    json_str = json.dumps(resp_json, indent=4, sort_keys=True)
    print("\n")
    print(highlight(json_str, JsonLexer(), TerminalTrueColorFormatter()))

    '''
    return resp_json


### Examine the Client's Segment
# Get the scores from the trained model and scored customers
# This will return a json document of customers and their scores for the attrition model that we scored
# Query String parameters; pageSize, page, score_code, effective_date
def examine_client_segment(customer_id):
    print("Retrieve segmentation score data")

    resp_json = []
    page = 0

    while True:
        seg_url = "customers/" + str(customer_id) + "/scores?page_size=" + str(page_size) + "&page=" + str(page) + "&score_code=SEGMENTATION&effective_date=2017-08-01"
        #print("GET page " +str(page) + " from: " + base_url + seg_url, end="\r", flush=True)
        scoresGet = requests.get(base_url + seg_url,headers=head)
        if scoresGet.json() == [] or scoresGet.status_code != 200 : break
        page = page + 1
        resp_json = resp_json + scoresGet.json()

    if scoresGet.status_code != 200:
        print('An error occured getting scores')
        print('scoreGet Status Code: ' + str(scoresGet.status_code))
        print(scoresGet.text)

    '''
    dfseg = json_normalize(resp_json)
    json_str = json.dumps(resp_json, indent=4, sort_keys=True)
    print("\n")
    print(highlight(json_str, JsonLexer(), TerminalTrueColorFormatter()))
    '''
    return resp_json


# Get the segment descriptions (which attributes define the segment) from the trained model
# This will return a json document of segments and their descriptions
# Query String parameters; pageSize, page, score_code, effective_date
def segment_description():

    print("Retrieve the attributes that define the segments")

    resp_json = []
    page = 0

    while True:
        seg_url = "segments?page_size=" + str(page_size) + "&page=" + str(page) + "&score_code=SEGMENTATION&effective_date=2017-08-01"
        #print("GET page " + str(page) + " from: " + base_url + seg_url, end="\r", flush=True)
        scoresGet = requests.get(base_url + seg_url,headers=head)
        if scoresGet.json() == [] or scoresGet.status_code != 200 : break
        page = page + 1
        resp_json = resp_json + scoresGet.json()

    if scoresGet.status_code == 200:
        print('Scores based on query string parameters have been returned')
        print('Number of records: ' + str(len(resp_json)))
    else:
        print('An error occured getting scores')
        print('scoreGet Status Code: ' + str(scoresGet.status_code))
        print(scoresGet.text)

    '''
    dfsegdesc = json_normalize(resp_json).sort_values(['segment_id','rank'], ascending=True)
    dfsegdesc = dfsegdesc[['segment_id', 'rank', 'column_name', 'max_value', 'min_value']]
    #json_str = json.dumps(resp_json, indent=4, sort_keys=True)
    #print(highlight(json_str, JsonLexer(), TerminalTrueColorFormatter()))

    print(dfsegdesc.loc[dfsegdesc.segment_id==dfseg.segment_id[0]])
    '''
    return resp_json
