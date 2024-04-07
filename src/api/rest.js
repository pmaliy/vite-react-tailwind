const call = async (method = 'GET', url, data) => {
  // eslint-disable-next-line no-console
  console.log(`[REST API] ${method} ${url}`, data);

  try {
    return await fetch(url, {
      method: ['GET', 'POST', 'PUT', 'DELETE'].includes(method)
        ? method
        : 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      body: data ? JSON.stringify(data) : undefined,
    }).then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not OK');
      }

      return response.json();
    });
  } catch (error) {
    return Promise.reject(
      new Error(`[REST API] ERROR: ${method} ${url} : ${error.message}`)
    );
  }
};

export const get = async (url) => call('GET', url);
export const post = async (url, data) => call('POST', url, data);
export const put = async (url, data) => call('PUT', url, data);
export const del = async (url, data) => call('DELETE', url, data);
