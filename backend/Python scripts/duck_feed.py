import json
import os
from datetime import datetime
import uuid
import boto3
dynamodb = boto3.resource('dynamodb')


def create(post_data, context):

    data = post_data['duckFeed']
    
    table = dynamodb.Table('DuckFeed')

    ## Items to populate the table
    item = {
        'id': str(uuid.uuid1()),
        'datetime': datetime.now().strftime("%m/%d/%Y, %H:%M:%S"),
        'city': data['city'],
        'province': data['province'],
        'food': data['food'],
        'type_of_food': data['type_of_food'],
        'quantity': data['quantity'],
        'quantity_unit': data['quantity_unit'],
        'frequency': data['frequency'],
        'period': data['period']
    }

    # write the item to the database
    table.put_item(Item=item)

    # create a response
    response = {
        'statusCode': 200,
        'headers': {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": "true"
        },
        'body': json.dumps(item)
    }

    return response