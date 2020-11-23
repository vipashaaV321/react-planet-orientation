import React from "react";
import "./style.css";
import { Planet } from "react-planet";
export default function App() {
  return (
    <div style={{ padding: "100px" }}>
      <Planet
        orbitStyle={defaultStyle => ({
          ...defaultStyle,

          borderWidth: 1,
          borderStyle: "dashed",
          borderColor: "#333"
        })}
        centerContent={
          <div
            style={{
              height: 100,
              width: 100,
              borderRadius: "50%",
              backgroundColor: "#1da8a4"
            }}
          />
        }
        open
        autoClose
        dragablePlanet
        dragRadiusPlanet={100}
        bounce
        mass={4}
        tension={500}
        friction={19}
        // rotation={1}
      >
        <div
          style={{
            height: 70,
            width: 70,
            borderRadius: "50%",
            backgroundColor: "#9257ad"
          }}
        />
        <div
          style={{
            height: 70,
            width: 70,
            borderRadius: "50%",
            backgroundColor: "#9257ad"
          }}
        />
        <div
          style={{
            height: 70,
            width: 70,
            borderRadius: "50%",
            backgroundColor: "#9257ad"
          }}
        />

        <div
          style={{
            height: 70,
            width: 70,
            borderRadius: "50%",
            backgroundColor: "#9257ad"
          }}
        />

        <div
          style={{
            height: 70,
            width: 70,
            borderRadius: "50%",
            backgroundColor: "#9257ad"
          }}
        />
        <div
          style={{
            height: 70,
            width: 70,
            borderRadius: "50%",
            backgroundColor: "#9257ad"
          }}
        />
      </Planet>
    </div>
  );
}
