import React, { useState } from 'react';
import Card from './components/Card';
import Header from './components/Header';


const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    console.log('Поисковый запрос:', query);
  };

  const cards = [
    { brand: 'SUPREME', model: 'Black Pants', price: 18000, image: '/assets/images/image1.png' },
    { brand: 'NIKE', model: 'Air Max 270', price: 12000, image: '/assets/images/image1.png' },
    { brand: 'ADIDAS', model: 'Ultra Boost', price: 15000, image: '/assets/images/image1.png' },
    { brand: 'SUPREME', model: 'Black Pants', price: 18000, image: '/assets/images/image1.png' },
    { brand: 'NIKE', model: 'Air Max 270', price: 12000, image: '/assets/images/image1.png' },
    { brand: 'ADIDAS', model: 'Ultra Boost', price: 15000, image: '/assets/images/image1.png' },
    { brand: 'SUPREME', model: 'Black Pants', price: 18000, image: '/assets/images/image1.png' },
    { brand: 'NIKE', model: 'Air Max 270', price: 12000, image: '/assets/images/image1.png' },
    { brand: 'ADIDAS', model: 'Ultra Boost', price: 15000, image: '/assets/images/image1.png' },
  
  ];

  const filteredCards = cards.filter((card) =>
    `${card.brand} ${card.model}`.toLowerCase().includes(searchQuery.toLowerCase())
  );

return (
  <>
    <Header className='header' onSearch={handleSearch}/>
    <div className="cards-container">
      {filteredCards.map((card, index) => (
        <Card
          key={index}
          brand={card.brand}
          model={card.model}
          price={card.price}
          image={card.image}
        />
      ))}
    </div>
  </>
  );
};

export default App;
