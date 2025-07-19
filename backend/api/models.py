from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone

class Project(models.Model):
    PROJECT_TYPES = [
        ('ai', 'AI/ML'),
        ('web', 'Web Development'),
        ('mobile', 'Mobile App'),
        ('data', 'Data Analytics'),
        ('automation', 'Automation'),
        ('consulting', 'Consulting'),
    ]
    
    STATUS_CHOICES = [
        ('draft', 'Draft'),
        ('published', 'Published'),
        ('archived', 'Archived'),
    ]
    
    title = models.CharField(max_length=200)
    description = models.TextField()
    project_type = models.CharField(max_length=20, choices=PROJECT_TYPES)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='draft')
    
    # Media
    image = models.ImageField(upload_to='projects/', blank=True, null=True)
    video_url = models.URLField(blank=True, null=True)
    
    # Links
    live_url = models.URLField(blank=True, null=True)
    github_url = models.URLField(blank=True, null=True)
    
    # Metadata
    technologies = models.JSONField(default=list, blank=True)
    client = models.CharField(max_length=200, blank=True)
    budget = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    duration_weeks = models.PositiveIntegerField(blank=True, null=True)
    
    # Relationships
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='projects')
    likes = models.ManyToManyField(User, related_name='liked_projects', blank=True)
    
    # Timestamps
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    published_at = models.DateTimeField(blank=True, null=True)
    
    class Meta:
        ordering = ['-created_at']
    
    def __str__(self):
        return self.title
    
    def save(self, *args, **kwargs):
        if self.status == 'published' and not self.published_at:
            self.published_at = timezone.now()
        super().save(*args, **kwargs)
