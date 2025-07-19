# ── Stage 1: common base ───────────────────────────
FROM python:3.12-slim-bookworm AS base
ENV PYTHONUNBUFFERED=1
WORKDIR /app

# ── Stage 2: build / dependency layer ──────────────
FROM base AS builder

# Pull the uv binary (faster + smaller than pip install)
COPY --from=ghcr.io/astral-sh/uv:0.4.9 /uv /bin/uv
ENV UV_COMPILE_BYTECODE=1 UV_LINK_MODE=copy

WORKDIR /app
# copy lock + project metadata first for Docker-layer caching
COPY backend/pyproject.toml backend/uv.lock* ./ 

# install deps only (no project code yet) and cache them
RUN --mount=type=cache,target=/root/.cache/uv \
    uv sync --frozen --no-install-project --no-dev

# now add the source code and install *it*
COPY backend/ .
RUN --mount=type=cache,target=/root/.cache/uv \
    uv sync --frozen --no-dev

# collect static files
RUN python manage.py collectstatic --noinput

# ── Stage 3: tiny runtime image ─────────────────────
FROM base
COPY --from=builder /app /app
ENV PATH="/app/.venv/bin:$PATH"
WORKDIR /app

EXPOSE 8000
CMD ["gunicorn", "genalize.wsgi:application", "-b", "0.0.0.0:8000"]

# Run gunicorn
CMD ["uv", "run", "gunicorn", "genalize.wsgi:application", "--bind", "0.0.0.0:8000", "--workers", "4", "--timeout", "120"] 