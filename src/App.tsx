import { useState } from "react";

const initialColors: string[] = [
  "#32a852",
  "#c4632b",
  "#d914c5",
  "#c4ba2b",
  "#cf1117",
  "#1f2dc4",
  "#1bebf2",
  "#4a9676",
  "#e3df07",
];

function App() {
  const [colors, setColors] = useState<string[]>(initialColors);

  // handle click to generate random colors
  const handleOnclick = () => {
    const newColors = [];
    for (let i = 0; i < 9; i++) {
      const color = Math.floor(Math.random() * 16777215).toString(16);
      newColors.push(`#${color}`);
    }
    setColors(newColors);
  };

  const Card = ({
    item,
    classname,
    color,
  }: {
    item: number;
    classname: string;
    color: string;
  }) => {
    return (
      <div
        style={{ backgroundColor: color }}
        onClick={handleOnclick}
        className={`item ${classname}`}
      >
        {item}
      </div>
    );
  };

  return (
    <main className="container">
      <section className="header">
        <Card color={colors[0]} item={1} classname="one" />
        <Card color={colors[1]} item={2} classname="two" />
        <Card color={colors[2]} item={3} classname="three" />
        <Card color={colors[3]} item={4} classname="four" />
      </section>
      <section className="content">
        <Card color={colors[4]} item={5} classname="five" />
        <Card color={colors[5]} item={6} classname="six" />
        <Card color={colors[6]} item={7} classname="seven" />
        <Card color={colors[7]} item={8} classname="eight" />
        <Card color={colors[8]} item={9} classname="nine" />
      </section>
    </main>
  );
}

export default App;
