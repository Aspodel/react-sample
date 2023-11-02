import { useLocation } from "react-router-dom";

const BreedDetails = () => {
  const { state } = useLocation();
  console.log(state);

  if (!state) return null;

  return (
    <div style={{ backgroundColor: "#F2F2F7", padding: 16 }}>
      <h1 style={{ fontSize: 32, fontWeight: "bold", marginBottom: 16 }}>
        {state.name}
      </h1>
      <img
        src={state.imageUrl}
        alt={state.name}
        style={{ width: "100%", borderRadius: 8 }}
      />
    </div>
  );
};

export default BreedDetails;
