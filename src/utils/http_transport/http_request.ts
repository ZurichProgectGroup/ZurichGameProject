export default async function httpRequest<T>(url: string,
    options: RequestInit,
    timeout = 5000): Promise<T> {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);

    const response = await fetch(url, {
        ...options,
        signal: controller.signal,
        credentials: 'include',
    });

    clearTimeout(id);
    if (response.status === 200) {
        return response.json();
    }
    throw new Error();
}
