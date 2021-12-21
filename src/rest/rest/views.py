from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import json, logging, os
from pymongo import MongoClient
from django.conf import settings
from todo.serializers import TodoSerializer

# mongo_uri = 'mongodb://' + os.environ["MONGO_HOST"] + ':' + os.environ["MONGO_PORT"]
db = MongoClient(settings.DB_NAME)['test_db']
collection=db['mytestDBdisdin'] 


# todo1={
#     "todo":"this is the first todo"
# }
# collection.insert_one(todo1)


class TodoListView(APIView):

    def get(self, request):
        # Implement this method - return all todo items from db instance above.
        todo=collection.find()
        serializer=TodoSerializer(todo,many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
        
    def post(self, request):
        # Implement this method - accept a todo item in a mongo collection, persist it using db instance above.
        print(request)
        collection.insert_one(request.data)
        return Response("saved successfully", status=status.HTTP_200_OK)

