import moment from 'moment';

 const apiUrl = "https://dashboard.elering.ee/api";

 export async function getCurrentPrice() {
      const country = 'EE';
      const response = await fetch(`${apiUrl}/nps/price/${country}/current`);
      return response.json();
 };

export async function getPriceDate() {
   const start = moment().utc().subtract(10, 'hours').format();
   const end = moment().utc().add(30, 'hours').format();
   const params = new URLSearchParams({start, end});
   const response = await fetch(`${apiUrl}/nps/price?${params}`);
   return response.json();
};