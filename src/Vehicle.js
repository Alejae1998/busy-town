export default function Vehicle({ vehicle }) {
  return (
    <div className="vehicle">
      {vehicle === 'car' && '🚗'}
      {vehicle === 'bus' && '🚚'}
      {vehicle === 'truck' && '🚌'}
      {vehicle === 'motorcycle' && '🏍️'}
      {/* the Vehcile component has a prop called vehicle. Check to see what string is in this vehicle prop */}
      {/* if the vehicle props is a car, render a '🚗' emoji */}
      {/* if the vehicle props is a truck, render a '🚚' emoji */}
      {/* if the vehicle props is a bus, render a '🚌' emoji */}
      {/* if the vehicle props is a motorcycle, render a '🏍️' emoji */}
    </div>
  );
}