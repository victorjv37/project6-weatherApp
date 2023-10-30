import { useEffect, useState } from "react";

const useNavigatorLocation = () => {
  const [myActualLatitude, setMyActualLatitude] = useState();
  const [myActualLongitude, setMyActualLongitude] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const position = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });
        setMyActualLatitude(position.coords.latitude);
        setMyActualLongitude(position.coords.longitude);
      } catch (error) {
        console.error("Error al obtener la ubicación:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { myActualLatitude, myActualLongitude, loading };
};

export default useNavigatorLocation;
