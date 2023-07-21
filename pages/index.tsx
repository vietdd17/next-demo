import type { GetServerSideProps, NextPage } from 'next';
import { getBlogs } from '../server/blogs';

const Home: NextPage = () => {
  return (
    <main className="w-screen h-screen  overflow-auto flex flex-col items-center bg-zinc-800 text-neutral-300 font-poppins">
      <title>Home</title>
      <section>
        <div className="mt-3 text-center">
          <h1 className="text-[3rem]">Welcome</h1>
          <p>Blog League of Legends</p>
        </div>
      </section>
    </main>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  let blogs = getBlogs();
  return {
    props: {},
  };
};

export default Home;
