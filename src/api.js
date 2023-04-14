export async function getVans() {
    const response = await fetch("/api/vans");
    if (!response.ok) {
      // eslint-disable-next-line no-throw-literal
    throw {
      message: "Failed to fetch vans",
      statusText: response.statusText,
      status: response.status,
    };
  }
  const data = await response.json();
  return data.vans;
}
