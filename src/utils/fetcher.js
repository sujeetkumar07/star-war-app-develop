import axios from 'axios';

const fetcher = async (urls, options = {}) => {
  const { params, signal } = options;
  const source = axios.CancelToken.source();

  if (signal) {
    signal.addEventListener('abort', () => {
      source.cancel('Request canceled');
    });
  }

  try {
    if (typeof urls === 'string') {
      const response = await axios.get(urls, {
        params,
        cancelToken: source.token
      });
      return response.data;
    } else if (Array.isArray(urls)) {
      const responses = await Promise.all(
        urls.map((url) =>
          axios.get(url, {
            params,
            cancelToken: source.token
          })
        )
      );
      return responses.map((response) => response.data);
    } else {
      throw new Error('Invalid URL input');
    }
  } catch (error) {
    if (axios.isCancel(error)) {
      console.log('Request canceled', error.message);
    } else {
      console.error('API Error:', error);
    }
    throw error;
  }
};

export default fetcher;
