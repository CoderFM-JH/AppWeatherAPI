import { useEffect, useState } from "react";

export default function UseLocation () {
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);
   const [data, setData] = useState({});

   useEffect(() => {
      const onSucces = (e) => {
         setLoading(false);
         setError(null);
         setData(e.coords);
      }
      navigator.geolocation.getCurrentPosition(onSucces, onError)
   }, [] )

}