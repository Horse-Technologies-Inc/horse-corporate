import React from 'react';
import Header from '../components/Header';

const ErrorPage = () => {
  return (
    <>
      <Header />
      <section className="flex flex-col items-center justify-center pt-[85px] max-sm:pt-[70px]">
        <h1 className="text-4xl font-bold">An error occurred!</h1>
        <p className="mt-3 text-xl tracking-tighter">Could not find page!</p>
      </section>
    </>
  );
};

export default ErrorPage;
