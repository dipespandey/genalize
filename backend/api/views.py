from rest_framework import viewsets, permissions, status
from rest_framework.decorators import action
from rest_framework.response import Response
from django.contrib.auth.models import User
from .models import Project
from .serializers import UserSerializer, ProjectSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]
    
    @action(detail=False, methods=['get'])
    def me(self, request):
        serializer = self.get_serializer(request.user)
        return Response(serializer.data)

class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    permission_classes = [permissions.IsAuthenticated]
    
    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
    
    @action(detail=True, methods=['post'])
    def like(self, request, pk=None):
        project = self.get_object()
        project.likes.add(request.user)
        return Response({'status': 'project liked'})
    
    @action(detail=True, methods=['post'])
    def unlike(self, request, pk=None):
        project = self.get_object()
        project.likes.remove(request.user)
        return Response({'status': 'project unliked'})
