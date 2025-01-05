import { MyCard } from './MyCard';
import { OtherCard } from './OtherCard';
import { cards } from './data';

const RenderDifferentCards = (card) => {
  switch (card.cardType) {
    case 'CARD_TYPE_1':
      return <MyCard {...card} />;
    case 'CARD_TYPE_2':
      return <OtherCard {...card} />;
    default:
      return <MyCard {...card} />;
  }
};

export function CardList() {
  return (
    <div className="flex gap-4 pb-4">
      {cards.map((card) => (
        <div key={card.id} className="w-[350px] flex-none">
          {RenderDifferentCards(card)}
        </div>
      ))}
    </div>
  );
}
