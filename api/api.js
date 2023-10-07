async function fetchFirmsFires() {
  // const currentDate = new Date();

  // // Get the year, month, and day components
  // const year = currentDate.getFullYear();
  // const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Month is zero-based, so add 1
  // const day = String(currentDate.getDate()).padStart(2, "0");
  // const formattedDate = `${year}-${month}-${day}`;

  // const apiUrl = `https://firms.modaps.eosdis.nasa.gov/api/area/csv/bcc45b9de92949e814e8bd2884f8a0c7/VIIRS_SNPP_NRT/world/1/${formattedDate}`;
  const apiUrl = "/fires_firms.csv"

  const document = await fetch(apiUrl).then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.text();
  });

  const rows = document.split("\n");
  const headers = rows[0].split(",");
  const data = rows.slice(1).map((row) => {
    const values = row.split(",");
    const item = {};
    headers.forEach((header, index) => {
      item[header] = values[index];
    });
    return item;
  });

  return data;
}

export { fetchFirmsFires };
