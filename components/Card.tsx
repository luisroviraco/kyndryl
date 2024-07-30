import React from 'react';
import Link from 'next/link';

interface CardProps {
  category?: string;
  description?: string;
  buttons?: { text: string; link: string; active: boolean }[];
}

const Card: React.FC<CardProps> = ({ category, description, buttons }) => {
  return (
    <div className="w-[350px] rounded-[10px] overflow-hidden card">
      <div className="px-6 py-4">
        <div className="card-title font-bold text-xl">{category}</div>
        <p className="text-base mb-4">
          {description}
        </p>
        <hr />
      </div>
      <div className="pb-4">
        {buttons && buttons.map((button, index) => (
          <Link href={button.link} key={index} legacyBehavior>
            <a className={`card-button ${button.active ? 'active' : ''}`}>
              {button.text}
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Card;
