// Frontend/src/app/api.ts

const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:4000';

function token() {
    return localStorage.getItem('token');
}

async function request(path: string, opts: RequestInit = {}) {
    const headers = { 'Content-Type': 'application/json', ...(opts.headers || {}) } as any;

    const t = token();
    if (t) headers.Authorization = `Bearer ${t}`;

    const res = await fetch(`${API_BASE}${path}`, {
        ...opts,
        headers,
    });

    if (!res.ok) {
        const text = await res.text();
        let message = text || `Request failed with status ${res.status}`;

        try {
            const data = JSON.parse(text);
            message = data.error || data.message || message;
        } catch {
            // Response was not JSON; use the plain text response.
        }

        throw new Error(message);
    }

    return res.status === 204 ? null : res.json();
}

export const api = {
    get: (p: string) => request(p, { method: 'GET' }),
    post: (p: string, body?: any) =>
        request(p, { method: 'POST', body: JSON.stringify(body) }),
    put: (p: string, body?: any) =>
        request(p, { method: 'PUT', body: JSON.stringify(body) }),
    del: (p: string) => request(p, { method: 'DELETE' }),
};
