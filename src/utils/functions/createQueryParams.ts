const createQueryParams = (
  params: Record<string, string | number | boolean | undefined | null>
): string => {
  const searchParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      searchParams.append(key, String(value));
    }
  });

  return searchParams.toString();
};

export default createQueryParams;
