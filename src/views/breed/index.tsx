import { Link, useNavigate } from "react-router-dom";

const Breed = () => {
  const breeds = [
    {
      name: "Tabby cat",
      imageUrl: "https://i.imgur.com/9tI01tJ.png",
    },
    {
      name: "British short hair cat",
      imageUrl: "https://i.imgur.com/IpeqGBk.png",
    },
    {
      name: "Black cat",
      imageUrl: "https://i.imgur.com/LoAx2g2.png",
    },
  ];
  const navigate = useNavigate();

  return (
    <div style={{ backgroundColor: "#F2F2F7", padding: 16 }}>
      <h1 style={{ fontSize: 32, fontWeight: "bold", marginBottom: 16 }}>
        Breeds
      </h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {breeds.map((breed) => (
          <Link to={`${breed.name}`} state={breed} key={breed.name}>
            <li
              style={{
                backgroundColor: "white",
                borderRadius: 8,
                padding: 16,
                marginBottom: 16,
              }}
            >
              <h2 style={{ fontSize: 24, fontWeight: "bold", marginBottom: 8 }}>
                {breed.name}
              </h2>
              <img
                src={breed.imageUrl}
                alt={breed.name}
                style={{
                  width: "80px",
                  height: "auto",
                  borderRadius: 8,
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
              <p style={{ fontSize: 16, color: "#8E8E93" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </li>
          </Link>
        ))}
      </ul>
      <button
        onClick={() => navigate("wiki-petaverse")}
        style={{
          backgroundColor: "#007AFF",
          borderRadius: 8,
          color: "white",
          fontSize: 16,
          fontWeight: "bold",
          padding: "12px 24px",
          marginTop: 16,
        }}
      >
        Wikipetaverse
      </button>
    </div>
  );
};

export default Breed;
