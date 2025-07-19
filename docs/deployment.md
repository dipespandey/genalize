# Deployment Guide

This guide covers deploying the Genalize monorepo to a VPS using Docker and GitHub Actions.

## Prerequisites

1. **VPS Setup**
   - Ubuntu 20.04+ or similar Linux distribution
   - Docker and Docker Compose installed
   - Git installed
   - SSH access configured

2. **Domain Configuration**
   - Domain name pointing to your VPS IP
   - SSL certificate (Let's Encrypt recommended)

3. **GitHub Repository Setup**
   - Repository with the monorepo code
   - GitHub Actions secrets configured

## VPS Setup

### 1. Install Docker and Docker Compose

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Add user to docker group
sudo usermod -aG docker $USER

# Install Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# Logout and login again for group changes to take effect
```

### 2. Clone Repository

```bash
# Create project directory
sudo mkdir -p /opt/genalize
sudo chown $USER:$USER /opt/genalize
cd /opt/genalize

# Clone repository
git clone <your-repo-url> .
```

### 3. Environment Configuration

```bash
# Copy environment template
cp env.example .env

# Edit environment variables
nano .env
```

Required environment variables:
- `SECRET_KEY`: Django secret key
- `DB_PASSWORD`: PostgreSQL password
- `ALLOWED_HOSTS`: Your domain
- `CORS_ALLOWED_ORIGINS`: Frontend URLs
- `CSRF_TRUSTED_ORIGINS`: Your domain

### 4. SSL Certificate (Optional)

```bash
# Install Certbot
sudo apt install certbot

# Get SSL certificate
sudo certbot certonly --standalone -d your-domain.com

# Copy certificates to nginx directory
sudo cp /etc/letsencrypt/live/your-domain.com/fullchain.pem nginx/ssl/
sudo cp /etc/letsencrypt/live/your-domain.com/privkey.pem nginx/ssl/
```

## GitHub Actions Setup

### 1. Repository Secrets

Add these secrets in your GitHub repository (Settings > Secrets and variables > Actions):

- `VPS_HOST`: Your VPS IP address
- `VPS_USER`: SSH username (usually 'ubuntu')
- `VPS_SSH_KEY`: Private SSH key for server access
- `DOCKER_USERNAME`: Your Docker Hub username
- `DOCKER_TOKEN`: Docker Hub access token

### 2. SSH Key Setup

```bash
# Generate SSH key pair
ssh-keygen -t rsa -b 4096 -C "github-actions"

# Add public key to VPS
ssh-copy-id -i ~/.ssh/id_rsa.pub user@your-vps-ip

# Add private key to GitHub secrets
cat ~/.ssh/id_rsa
```

## Deployment

### Manual Deployment

```bash
# Build and start services
docker-compose up -d --build

# Check service status
docker-compose ps

# View logs
docker-compose logs -f
```

### Automated Deployment

1. Push changes to the `main` branch
2. GitHub Actions will automatically:
   - Run tests
   - Build Docker images
   - Push to Docker Hub
   - Deploy to VPS

## Monitoring and Maintenance

### Health Checks

```bash
# Check service health
curl http://your-domain.com/health

# Check individual services
docker-compose ps
docker-compose logs [service-name]
```

### Database Backups

```bash
# Create backup
docker-compose exec db pg_dump -U genalize_user genalize_db > backup.sql

# Restore backup
docker-compose exec -T db psql -U genalize_user genalize_db < backup.sql
```

### Log Rotation

```bash
# Configure log rotation
sudo nano /etc/logrotate.d/docker-compose

# Add configuration
/opt/genalize/logs/*.log {
    daily
    missingok
    rotate 52
    compress
    delaycompress
    notifempty
    create 644 root root
}
```

## Troubleshooting

### Common Issues

1. **Port conflicts**
   ```bash
   # Check port usage
   sudo netstat -tulpn | grep :80
   sudo netstat -tulpn | grep :443
   ```

2. **Permission issues**
   ```bash
   # Fix file permissions
   sudo chown -R $USER:$USER /opt/genalize
   ```

3. **Database connection issues**
   ```bash
   # Check database logs
   docker-compose logs db
   ```

### Performance Optimization

1. **Enable Docker build cache**
   ```bash
   # Use build cache
   docker-compose build --parallel
   ```

2. **Configure Nginx caching**
   ```bash
   # Edit nginx.conf to add caching headers
   ```

3. **Database optimization**
   ```bash
   # Optimize PostgreSQL settings
   docker-compose exec db psql -U genalize_user -d genalize_db -c "SHOW shared_buffers;"
   ```

## Security Considerations

1. **Firewall configuration**
   ```bash
   # Configure UFW
   sudo ufw allow 22
   sudo ufw allow 80
   sudo ufw allow 443
   sudo ufw enable
   ```

2. **Regular updates**
   ```bash
   # Update system packages
   sudo apt update && sudo apt upgrade -y

   # Update Docker images
   docker-compose pull
   docker-compose up -d
   ```

3. **Backup strategy**
   - Database backups
   - File system backups
   - Configuration backups

## Scaling Considerations

1. **Horizontal scaling**
   - Add more backend instances
   - Use load balancer
   - Implement Redis clustering

2. **Vertical scaling**
   - Increase VPS resources
   - Optimize database queries
   - Use CDN for static files

3. **Monitoring**
   - Set up monitoring tools (Prometheus, Grafana)
   - Configure alerting
   - Monitor resource usage 