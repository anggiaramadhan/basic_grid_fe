import { useEffect, useMemo, useRef } from "react";

function App() {
  const headerRef = useRef<HTMLElement | null>(null);
  const contentRef = useRef<HTMLElement | null>(null);

  const generateColor = ({ element }: { element: HTMLElement }) => {
    const color = Math.floor(Math.random() * 16777215).toString(16);
    element.style.backgroundColor = `#${color}`;
  };

  const headers = useMemo(() => {
    if (!headerRef.current) return;
    return headerRef.current.children as HTMLCollectionOf<HTMLElement>;
  }, []);

  const contents = useMemo(() => {
    if (!contentRef.current) return;
    return contentRef.current.children as HTMLCollectionOf<HTMLElement>;
  }, []);

  // initial colors for the items
  useEffect(() => {
    if (!headers) return;
    if (!contents) return;

    for (const element of headers) {
      generateColor({ element });
    }

    for (const element of contents) {
      generateColor({ element });
    }
  }, [contents, headers]);

  // handle click to generate random colors
  const handleOnclick = () => {
    if (headers) {
      for (const element of headers) {
        generateColor({ element });
      }
    }

    if (contents) {
      for (const element of contents) {
        generateColor({ element });
      }
    }
  };

  const Card = ({ item, classname }: { item: number; classname: string }) => {
    return (
      <div onClick={handleOnclick} className={`item ${classname}`}>
        {item}
      </div>
    );
  };

  return (
    <main className="container">
      <section className="header" ref={headerRef}>
        <Card item={1} classname="one" />
        <Card item={2} classname="two" />
        <Card item={3} classname="three" />
        <Card item={4} classname="four" />
      </section>
      <section className="content" ref={contentRef}>
        <Card item={5} classname="five" />
        <Card item={6} classname="six" />
        <Card item={7} classname="seven" />
        <Card item={8} classname="eight" />
        <Card item={9} classname="nine" />
      </section>
    </main>
  );
}

export default App;
