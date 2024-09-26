import PaintingList from './components/PaintingList/PaintingList';
import Section from './components/Section/Section';
import paintings from './paintings.json';

export default function App() {
  return (
    <div>
      <Section title={"Week's top"}>
        <PaintingList items={paintings} />
        <PaintingList items={paintings} />
      </Section>

      <Section title={'The best'}></Section>
    </div>
  );
}
