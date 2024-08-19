"use client";
import createFurniture from "@/models/Furniture";
import { ModernFurnitureFactory } from "@/models/Furniture/Modern";

export default function Furniture() {
  const createFurnitureHandler = () => {
    const { createChair } = createFurniture(new ModernFurnitureFactory());
    const chair = createChair();

    chair.doAction();
  };
  return (
    <>
      <h1>Furniture</h1>
      <button onClick={createFurnitureHandler}>Create Modern Chair</button>
    </>
  );
}
