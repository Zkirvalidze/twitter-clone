'use client';
import { usePathname } from 'next/navigation';
import { ClipLoader } from 'react-spinners';

import useUser from '@/hooks/useUser';

// import PostFeed from '@/components/posts/PostFeed';
import Header from '@/components/Header';
import UserBio from '@/components/users/UserBio';
import UserHero from '@/components/users/userHero';


const Page: React.FC = () => {
  const id = usePathname();
  const userId = id?.slice(7);
  console.log(id);
  // const userId = searchParams?.get('u');
  const { data: fetchedUser, isLoading } = useUser(userId as string);

  if (isLoading || !fetchedUser) {
    return (
      <div className="flex justify-center items-center h-full">
        <ClipLoader color="lightblue" size={80} />
      </div>
    );
  }

  return (
    <>
      <Header showBackArrow label={fetchedUser?.name} />
      <UserHero userId={userId as string} />
      <UserBio userId={userId as string} />
      {/* <PostFeed userId={userId as string} /> */}
    </>
  );
};

export default Page;
