import moment from 'moment'; // npm paket lja rabotq s datoj/4islo i vremja

 const apiUrl = "https://dashboard.elering.ee/api"; // api url

 // exportiruem asinhronnuju funkciju, kotoraja zaprashivaet tekushiju stoimost' elektro energiju
 // zapros GET /nps/price/ee/current - end point 
 // await pozvoljaet dozidatsja otveta s api
 // fetch vozvrashaet Promise/obehsanije i pri pravel'nom vqpolnenii objekt response
 // Kazdqi response imjet fukciju .jason() kotoraja perevodit JSON v ja objekt
 export async function getCurrentPrice() {
      const country = 'EE';
      const response = await fetch(`${apiUrl}/nps/price/${country}/current`);
      return response.json();
 };

export async function getPriceDate() {
   // moment() - vqdajot mement object s tekushem vremeni i datoj
   // .utc() - konvertiruet eto v nulevoi 4asovoi pojas
   // substract - vqchetaet
   // .format() prevrashaet moment object v string s udobnqm formatom chtenija 
   const start = moment().utc().subtract(10, 'hours').format();
   const end = moment().utc().add(30, 'hours').format();
   // URLSearchParams - prevrashaet js object v strochku dlja url
   const params = new URLSearchParams({start, end});
   const response = await fetch(`${apiUrl}/nps/price?${params}`);
   return response.json();
};