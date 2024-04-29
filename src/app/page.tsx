"use client"
import { useState, useEffect } from "react";
type Ingredient = {
  image?: string;
  name: string;
  amount: string;
  location?: string;
}
export default function Home() {
  const images = ["https://discord.mx/SLw6TX1YVZ.png", "https://discord.mx/yKflUCeTJG.png", "https://discord.mx/0WF2SZD9CN.png"];
  const steps = ["https://discord.mx/tVA6CWAk9e.png", "https://discord.mx/JumSpDFTtf.png", "https://discord.mx/LjKPfobnQ1.png", "https://discord.mx/qS8FNcf6fk.png", "https://discord.mx/npXgVa2Zbl.png", "https://discord.mx/SLw6TX1YVZ.png"]
  const [imageIndex, setimageIndex] = useState(0);
  const [stepIndex, setstepIndex] = useState(0);
  const ingredients: Ingredient[] = [{
    name: "Croûte à Tarte",
    amount: "1",
    location: "de la boulangerie/pâtisserie."
  }, {
    name: "Fraises",
    amount: "1 Litre",
    location: "du magasin de fruits."
  },
  {
    name: "Sucre",
    amount: "1 Tasse",
    location: "du supermarché."
  },
  {
    name: "Fécule de Maïs",
    amount: "3 Cuillères à Soupe",
    location: "du supermarché."
  }, {
    name: "L'eau",
    amount: "¾ Tasse",
    location: "du supermarché."
  }, {
    name: "Crème Fouettée",
    amount: "½ Tasse",
    location: "du supermarché."
  }]

  const directions = [
    "Mettre 1/2 de les fraises dans un votre croûte à tarte et l'autre 1/2 dans un poêle.",
    "Ajouter le sucre aux fraises dans la poêle. Mettre sur moyenne chaleur, souvent en remuant.",
    "Mettre la fécule de maïs et l'eau dans un petit bol alors remuer. Suivant, mélangez-le avec le mélange précédent. Remuer pour 10 minutes à feu doux.",
    "Verser les fraises mélange sur les fraises dans le croûte à tarte, froideur pour 3 heures.",
    "Ajouter votre crème fouettée.",
    "Et voilà ! Jouis :)"
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setimageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setstepIndex((prevIndex) => (prevIndex + 1) % steps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#fffaf5] w-full h-full flex p-20">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col gap-7 w-[30%]">
          <div className="flex flex-col" style={{ height: "250px" }}>
            <div
              className="result w-[400px] rounded-md"
              style={{
                backgroundImage: `url(${images[imageIndex]})`,
                transition: "background-image 0.5s ease-in-out",
                height: "100%",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </div>
          <h1 className="text-5xl font-bold text-black">Ingrédients</h1>
          <div className="flex flex-col gap-2">
            {ingredients.map((ingredient: Ingredient, index: number) => {
              return (
                <div key={index} className="flex flex-col gap-2">
                  <div className="flex flex-row items-center justify-between">
                    <div className="flex gap-2 items-center justify-center">
                      <div className="bg-[#fff2e0] flex items-center justify-center rounded-full p-2">
                        <div className="w-5 h-5 rounded-full" />
                      </div>
                      <p>{ingredient.name}</p>
                    </div>
                    <p>{ingredient.amount}</p>
                  </div>
                  <p className="text-xs pl-3">Achetez {ingredient.name} {ingredient.location}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col gap-8 w-[30%]">
          <h1 className="text-5xl font-bold text-black">Tarte à la fraise</h1>
          <div className="grid grid-cols-2 gap-5 pl-2 pt-5">
            <div className="flex flex-row gap-3">
              <p className="text-gray-500">Le total</p>
              <p className="text-black">3h 30m</p>
            </div>
            <div className="flex flex-row gap-3">
              <p className="text-gray-500">La préparation</p>
              <p className="text-black">15m</p>
            </div>
            <div className="flex flex-row gap-3">
              <p className="text-gray-500">Le temps de cuisson</p>
              <p className="text-black">10m</p>
            </div>
            <div className="flex flex-row gap-3">
              <p className="text-gray-500">Le temps additionnel</p>
              <p className="text-black">3h</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-7 items-end w-[30%]">
          <div className="flex flex-col" style={{ height: "250px" }}>
            <div
              className="result w-[400px] rounded-md"
              style={{
                backgroundImage: `url(${steps[stepIndex]})`,
                transition: "background-image 0.5s ease-in-out",
                height: "100%",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </div>
          <h1 className="text-5xl font-bold text-black text-right">Directions</h1>
          <div className="flex flex-col gap-5">
            {directions.map((direction: string, index: number) => {
              return (
                <div key={index} className="flex flex-row items-center justify-between">
                  <div className="flex gap-2 items-center justify-center">
                    <div className="bg-[#fff2e0] flex items-center justify-center rounded-full p-2">
                      <div className="w-5 h-5 flex items-center justify-center">
                        <p className="text-lg font-bold">{index + 1}</p>
                      </div>
                    </div>
                    <p>{direction}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
