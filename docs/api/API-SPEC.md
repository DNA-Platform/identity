# API Specification

> Maintained by the Architect. The Backend Lead implements against this spec. The Frontend Lead consumes it.

## TL;DR

Base URL: `/api/v1`. Bearer token auth. All responses wrap data in `{ data, error, meta }`. Errors include a machine-readable `code` field.

## Base URL

`/api/v1`

## Authentication

<!-- Auth mechanism: Bearer token, API key, session cookie, etc. -->

```
Authorization: Bearer <token>
```

## Common Response Format

```json
{
  "data": {},
  "error": null,
  "meta": {
    "timestamp": "2025-01-01T00:00:00Z"
  }
}
```

## Error Response Format

```json
{
  "data": null,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Human-readable description",
    "details": []
  }
}
```

## Endpoints

---

<!-- EXAMPLE ENDPOINT — replace with your own, keep as reference for format -->

### POST /auth/login

Authenticate a user and return an access token.

**Request**

```json
{
  "email": "user@example.com",
  "password": "string"
}
```

**Response 200**

```json
{
  "data": {
    "token": "eyJ...",
    "expires_at": "2025-02-01T00:00:00Z",
    "user": {
      "id": "usr_123",
      "email": "user@example.com",
      "name": "Jane Smith"
    }
  },
  "error": null,
  "meta": { "timestamp": "2025-01-01T12:00:00Z" }
}
```

**Errors**

| Code | HTTP | Description |
|------|------|-------------|
| `INVALID_CREDENTIALS` | 401 | Email/password combination is incorrect |
| `ACCOUNT_LOCKED` | 403 | Too many failed attempts — account temporarily locked |
| `VALIDATION_ERROR` | 422 | Missing or malformed fields |

<!-- END EXAMPLE -->

---

<!-- Add endpoint documentation here as the Architect designs them -->
