import MenuButtonsCollection from './components/menuButtonsCollection';
import UserCard from './components/userCard';

export default function Home() {
  return (
    <div className="flex flex-col gap-y-8 items-center justify-center h-full">
      <UserCard />
      <MenuButtonsCollection />
    </div>
  );
}
