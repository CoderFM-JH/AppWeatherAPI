import UseGeolocation from "../hooks/UseGeolocation";

export default function Weather() {
   const  {loading, error, data: geoData} = UseGeolocation();

   if (loading) {
      // text-lg
      return <p className="text-blue-500 text-lg text-semibold "> Loading ... </p>;
   }

   if (error) {
      return (
         <p className="text-red-500 text-lg text-semibold "> Error: {error.message} </p>
      );
   }   

   return(
      <div className="bg-gradient-to-b from-blue-400 to-indigo-600 shadow-lg rounded-lg p-2 max-w-md mx-auto mt-1">
         <h2 className="text-3xl font-bold text-gray-800 mb-4">Your coordinates</h2>
         <p className="text-lg text-gray-50">
            <span className="font-semibold">
               Latitude: {geoData.latitude}
            </span>
         </p>
         <p className="text-lg text-gray-50">
            <span className="font-semibold">
               Longitude: {geoData.longitude}
            </span>
         </p>
      </div>
   )
} 
