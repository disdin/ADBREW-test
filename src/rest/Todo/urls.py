from .views import TodoListView
from django.urls import path, include

urlpatterns = [
    path('todos/', TodoListView.as_view(), name='todo'),
]

