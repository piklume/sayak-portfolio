'use client';

import { Card } from 'antd';
import Image from 'next/image';

const UserCard: React.FC = () => {
  return (
    <div className="flex flex-col">
      <div>
        <Image
          src="/profile.png"
          width={300}
          height={300}
          alt="Picture of the author"
          className="border-2 rounded-full shadow-md"
        />
      </div>
      <div className="mt-4 border-2 rounded-md bg-gradient-to-r from-zinc-400 to-zinc-100">
        <h2>Sayak Dutta</h2>
        <h3>Software Developer</h3>
      </div>
    </div>
  );
};
// background-image: linear-gradient( 58.2deg,  rgba(40,91,212,0.73) -3%, rgba(171,53,163,0.45) 49.3%, rgba(255,204,112,0.37) 97.7% );

export default UserCard;
