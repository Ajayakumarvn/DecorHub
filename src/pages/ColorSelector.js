import { useState } from "react";

export default function ColorSelector({ colors, onColorSelect }) {
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    onColorSelect(color);
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <h6>Select Color:</h6>
      <div style={{ display: "flex", gap: "10px" }}>
        {colors.map((color) => (
          <div
            key={color}
            onClick={() => handleColorSelect(color)}
            style={{
              backgroundColor: color,
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              cursor: "pointer",
            }}
          />
        ))}
      </div>
      <p>Selected Color: {selectedColor}</p>
    </div>
  );
}
