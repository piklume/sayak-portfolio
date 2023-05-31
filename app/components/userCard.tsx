'use client';

import Image from 'next/image';

const UserCard: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <div>
        <Image
          src="/profile-picture.png"
          width={200}
          height={200}
          alt="Picture of the author"
          className="border-2 rounded-full shadow-md border-slate-700"
        />
      </div>
      <div className="mt-4 p-4 border-2 rounded-xl font-sans bg-slate-50/30">
        <h2 className="text-2xl">Sayak Dutta</h2>
        <p className="text-lg mt-1">
          Hey, I have been building beautiful applications for the past 5 years
        </p>
      </div>
    </div>
  );
};

export default UserCard;
