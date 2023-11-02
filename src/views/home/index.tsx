import { Link } from "react-router-dom";

const features = [
  {
    name: "Breed",
    path: "breed",
  },
  {
    name: "Feature 1",
    path: "feature-1",
  },
  {
    name: "Feature 2",
    path: "feature-2",
  },
];

const Home = () => {
  return (
    <div>
      <h1
        style={{ fontSize: "34px", fontWeight: "bold", marginBottom: "24px" }}
      >
        Home page
      </h1>
      <ul style={{ listStyle: "none", padding: "0" }}>
        {features.map((feature) => (
          <li key={feature.name} style={{ marginBottom: "16px" }}>
            <Link
              to={feature.path}
              style={{
                color: "#007AFF",
                textDecoration: "none",
                fontWeight: "600",
                fontSize: "17px",
              }}
            >
              {feature.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
