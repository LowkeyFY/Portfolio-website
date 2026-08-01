const API_BASE = import.meta.env.VITE_API_URL || '';

export async function postPageView(path: string) {
  try {
    await fetch(`${API_BASE}/api/analytics/pageview`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ path }),
    });
  } catch {
    // silently fail analytics
  }
}

export async function adminLogin(password: string) {
  const res = await fetch(`${API_BASE}/api/admin/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ password }),
  });
  if (!res.ok) throw new Error('Invalid password');
  const data = await res.json();
  localStorage.setItem('admin_token', data.token);
  return data.token;
}

export async function fetchDashboard() {
  const token = localStorage.getItem('admin_token');
  const res = await fetch(`${API_BASE}/api/admin/dashboard`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error('Unauthorized');
  return res.json();
}

export function logout() {
  localStorage.removeItem('admin_token');
}
