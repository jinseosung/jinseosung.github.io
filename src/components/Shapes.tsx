import { useEffect, useState } from "react";

type GeneratedShapes = {
  type: string;
  color: string;
  name: string;
  top: string;
  left: string;
};

export default function Shapes() {
  const [shapes, setShapes] = useState<GeneratedShapes[]>([]);

  useEffect(() => {
    const generateRandomShape = () => {
      const colors = ["#dc143c", "#008c3c", "#585af7"];
      const types = ["circle", "block", "triangle"];
      const names = ["squiggle-one", "squiggle-two", "squiggle-three"];

      return {
        type: types[Math.floor(Math.random() * types.length)],
        color: colors[Math.floor(Math.random() * colors.length)],
        name: names[Math.floor(Math.random() * names.length)],
        top: `${Math.random() * 600}px`,
        left: `${Math.random() * 1200}px`,
      };
    };

    const generatedShapes = Array.from({ length: 18 }, () =>
      generateRandomShape()
    );
    setShapes(generatedShapes);
  }, []);

  return (
    <div className="shapes">
      {shapes.map((shape, index) => (
        <div
          key={index}
          className={`shape ${shape.type}`}
          style={
            shape.type === "triangle"
              ? {
                  top: shape.top,
                  left: shape.left,
                  animationName: shape.name,
                  backgroundColor: shape.color,
                }
              : {
                  top: shape.top,
                  left: shape.left,
                  animationName: shape.name,
                  borderColor: shape.color,
                }
          }
        ></div>
      ))}
    </div>
  );
}
