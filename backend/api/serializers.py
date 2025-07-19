from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Project

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'first_name', 'last_name', 'date_joined']
        read_only_fields = ['id', 'date_joined']

class ProjectSerializer(serializers.ModelSerializer):
    owner = UserSerializer(read_only=True)
    likes_count = serializers.SerializerMethodField()
    is_liked = serializers.SerializerMethodField()
    
    class Meta:
        model = Project
        fields = [
            'id', 'title', 'description', 'project_type', 'status',
            'image', 'video_url', 'live_url', 'github_url',
            'technologies', 'client', 'budget', 'duration_weeks',
            'owner', 'likes_count', 'is_liked',
            'created_at', 'updated_at', 'published_at'
        ]
        read_only_fields = ['id', 'owner', 'created_at', 'updated_at', 'published_at']
    
    def get_likes_count(self, obj):
        return obj.likes.count()
    
    def get_is_liked(self, obj):
        request = self.context.get('request')
        if request and request.user.is_authenticated:
            return obj.likes.filter(id=request.user.id).exists()
        return False 