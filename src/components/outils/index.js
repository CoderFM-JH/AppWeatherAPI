

export const getFormatedDate = () => {
   const currentDate = new Date();

   const options = {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
   };

   return currentDate.toLocaleString('en-US', options);
   // return date.toLocaleDateString('fr-FR');
}