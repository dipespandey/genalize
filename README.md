# Genalize - AI Agency Portfolio Monorepo

A scalable monorepo containing Django backend and React frontends, designed for professional AI agency services.

## 🏗️ Architecture

- **Backend**: Django 4.2+ with Django REST Framework
- **Frontend**: React 18+ with TypeScript
- **Database**: PostgreSQL 15
- **Reverse Proxy**: Nginx 1.25+
- **Containerization**: Docker & Docker Compose
- **CI/CD**: GitHub Actions
- **Deployment**: Automated deployment to VPS

## 📁 Project Structure

```
genalize/
├── .github/workflows/          # GitHub Actions CI/CD
├── backend/                    # Django API
├── frontend/apps/             # React applications
│   ├── portal/               # Customer portal
│   └── marketing-site/       # Marketing website
├── nginx/                     # Reverse proxy configuration
├── docker-compose.yml         # Service orchestration
└── .env.example              # Environment variables template
```

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd genalize
   ```

2. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

3. **Start development environment**
   ```bash
   docker-compose up -d
   ```

4. **Access applications**
   - Frontend: http://localhost
   - Backend API: http://localhost/api/
   - Django Admin: http://localhost/admin/

## 🛠️ Development

### Backend Development
```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python manage.py runserver
```

### Frontend Development
```bash
cd frontend/apps/portal
npm install
npm start
```

## 🚀 Deployment

The project uses GitHub Actions for automated deployment. Push to the `main` branch to trigger deployment.

### Required GitHub Secrets
- `VPS_HOST`: Your server's IP address
- `VPS_USER`: Server username
- `VPS_SSH_KEY`: Private SSH key
- `DOCKER_USERNAME`: Docker Hub username
- `DOCKER_TOKEN`: Docker Hub access token

## 📚 Documentation

- [Backend API Documentation](./backend/README.md)
- [Frontend Development Guide](./frontend/README.md)
- [Deployment Guide](./docs/deployment.md)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License. 