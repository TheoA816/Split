import React from 'react';
import Card from './card';

export default function History() {
  return (
    <div className="p-16">
      <div className="font-bold text-2xl text-splitDarkBlue">
        Split bill history
      </div>
      <div className="grid grid-cols-2 mt-3 gap-x-5 gap-y-5">
        {Array.from({ length: 8 }).map((_, idx) => (
          <Card key={idx} />
        ))}
      </div>
    </div>
  );
}
