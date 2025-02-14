const fetchData = async <T>(
  url: string,
  defaultMethod = 'GET',
  options?: RequestInit
): Promise<T> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/${url}`, {
      method: defaultMethod,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return (await response.json()) as T;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};

export default fetchData;
