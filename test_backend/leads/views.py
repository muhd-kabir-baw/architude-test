from django.shortcuts import render
from django.shortcuts import render
from rest_framework import viewsets

from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status


from .serializers import ContactFormSerializer
from .models import ContactForm

# Create your views here.

class ContactFormView(viewsets.ModelViewSet):
    serializer_class = ContactFormSerializer
    queryset = ContactForm.objects.all()

# Create your views here.
@api_view(['GET', 'POST'])
def contactform_list(request):
    if request.method == 'GET':
        data = ContactForm.objects.all()

        serializer = ContactFormSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = ContactFormSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
            
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE'])
def contactform_detail(request, pk):
    try:
        contactform = ContactForm.objects.get(pk=pk)
    except ContactForm.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PUT':
        serializer = ContactFormSerializer(contactform, data=request.data,context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        contactform.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)