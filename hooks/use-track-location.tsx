import { useState } from "react";
function userTrackLocation() {
    const [locationErrorMsg, setLocationErrorMsg] = useState("");
    const [latLong, setLatLong] = useState("");
    const [isFindingLocation,setIsFindingLocation]=useState(false);
    function success(position:any) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        setLatLong(`${latitude},${longitude}`);
        setLocationErrorMsg("");

        setIsFindingLocation(false);

    };

    function error() {
        setIsFindingLocation(false);
        setLocationErrorMsg("Unable to retrieve your location");
    };
    function handleTrackLocation() {
        setIsFindingLocation(true);

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(success, error);
        }
        else {
            setIsFindingLocation(false);
            setLocationErrorMsg("Geolocation is not supported by your browser");
        }
    }
    return {
        handleTrackLocation, latLong, locationErrorMsg,isFindingLocation
    };
};







export default userTrackLocation;