import { useEffect,useState } from "react";
export default function Weather({location})
{
    const[weatherData,setWeatherData]=useState(null)

    useEffect(()=>{
        const fetchData=async()=>{
            try{
                // In below get api key from weatherapi.com site and replace below key with your own api-key
                const response=await fetch(`http://api.weatherapi.com/v1/current.json?key=&q=${location}&aqi=no`)
                const data=await response.json()
                setWeatherData(data)
            }catch(error){
                console.log('Error fetching wheather data:',error)
            }
            
        }
        fetchData();
    },[location,weatherData]);

    return(
        <div>
            {weatherData?(<><span className="font-bold">Location:</span><p className="text-green-700">{weatherData.location?.name}</p>
           <span className="font-bold">Tempreure in celsius:</span> <p className="my-2 text-red-600">{weatherData.current?.temp_c}&deg;C</p>
            <span className="font-bold">Tempreature in Farhenite:</span><p className="text-yellow-500">{weatherData.current?.temp_f}&deg;F</p></>):(<p>Loading Data...</p>)}
        </div>
    )

}