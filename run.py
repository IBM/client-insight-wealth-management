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

from flask import Flask, jsonify, render_template, json, Response, request
import os

import client

app = Flask(__name__)

#customer_ids
customer_ids = ['5967','5969','1020','1038']


@app.route('/')
def run():
    return render_template('index.html')


@app.route('/api/getcustomerids',methods=['GET'])
def get_customer_ids():
    return json.dumps(customer_ids)


@app.route('/api/retrieve', methods =['GET','POST'])
def retrieve():

    output = {}

    #retrieve the json from the ajax call
    json_file = ''
    if request.method == 'POST':
        json_file = request.json
        print ("post request")

    #if json_file successfully posted..
    if json_file != '':
        # check all required arguments are present:
        if not all(arg in json_file for arg in ["customerId"]):
            print("Missing arguments in post request")
            return json.dumps({"status":"Error", "messages":"Missing arguments"}), 422
        inputCustomerId = json_file["customerId"]
        print("retreived data: " + str(inputCustomerId)  )

    data_array = []

    #returns an array with first element contatining client object
    client_info =  client.retrieve_basic_client_info(inputCustomerId)
    client_attrition_score =  client.retrieve_client_attrition_score(inputCustomerId)
    client_life_events =  client.retrieve_relevant_life_events(inputCustomerId)
    client_examine_segement =  client.examine_client_segment(inputCustomerId)
    segment_description =  client.segment_description()


    #create the output json
    output = {"clientInfo": client_info[0], "clientAttritionScore": client_attrition_score[0], "clientLifeEvents": client_life_events, "clientExamineSegment": client_examine_segement[0], "segmentDescription": segment_description, "customerId": inputCustomerId}
    #print(output)
    return json.dumps(output)


port = int(os.getenv('VCAP_APP_PORT', 8080))
host='0.0.0.0'
if __name__ == "__main__":
	app.run(host='0.0.0.0', port=int(port))
