import React from 'react';
import Header from '../components/Header';

const ErrorPage = () => {
  return (
    <>
      <Header />
      <div className="mx-auto w-[400px]">
        <h1 className="text-4xl font-bold">An error occurred!</h1>
        <p className="mt-3 text-xl tracking-tighter">Could not find page!</p>
      </div>
    </>
  );
};

export default ErrorPage;
