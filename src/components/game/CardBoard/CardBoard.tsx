import { Spin } from "antd";
import FlippableCard from "@components/ui/FlippableCard";
import { useCatsImages } from "@hooks/game";

const CardBoard = () => {
  const { isLoading, catsImages } = useCatsImages();

  if (isLoading) {
    return <Spin />;
  }

  return (
    <div
      style={{
        display: "grid",
        justifyContent: "center",
        gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
        width: "100%",
        minHeight: "100%",
      }}
    >
      {catsImages.map((catImage) => (
        <FlippableCard
          key={catImage}
          coverImage="https://images.unsplash.com/photo-1544511916-0148ccdeb877?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1901&q=80i&auto=format&fit=crop"
          frontImage={catImage}
        />
      ))}
    </div>
  );
};

export default CardBoard;
