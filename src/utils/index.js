import dayjs from 'dayjs';

export async function request(url) {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (e) {
    throw e;
  }
}

export async function getCoordinates() {
  return {"country_code":"ES","country_name":"Spain","city":"Sant Cugat del Vall\u00e8s","postal":"08171","latitude":41.4714,"longitude":2.0818,"IPv4":"2.155.49.165","state":"Barcelona"}
  try {
    const { latitude, longitude } = await request(
      'https://geolocation-db.com/json/'
    );

    return {
      latitude,
      longitude,
    };
  } catch (e) {
    throw e;
  }
}

export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export function formatDate(date, format = 'MMMM D, YYYY') {
  return dayjs(date).format(format);
}
