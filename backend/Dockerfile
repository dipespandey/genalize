# ── Stage 1: common base ───────────────────────────
FROM python:3.12-slim-bookworm AS base
ENV PYTHONUNBUFFERED=1
WORKDIR /app

# ── Stage 2: build / dependency layer ──────────────
FROM base AS builder

COPY --from=ghcr.io/astral-sh/uv:0.4.9 /uv /bin/uv
ENV UV_COMPILE_BYTECODE=1 UV_LINK_MODE=copy

WORKDIR /app

COPY pyproject.toml uv.lock* ./

RUN --mount=type=cache,target=/root/.cache/uv \
    uv sync --frozen --no-install-project --no-dev

COPY . .

RUN --mount=type=cache,target=/root/.cache/uv \
    uv sync --frozen --no-dev

# ✅ Activate virtual environment
ENV PATH="/app/.venv/bin:$PATH"

# ✅ Now Django and Python are available
RUN python manage.py collectstatic --noinput

# ── Stage 3: runtime image ─────────────────────
FROM base
COPY --from=builder /app /app
ENV PATH="/app/.venv/bin:$PATH"
WORKDIR /app

EXPOSE 8000

CMD ["uv", "run", "gunicorn", "genalize.wsgi:application", "--bind", "0.0.0.0:8000", "--workers", "4", "--timeout", "120"]
