export const ButtonLoader = (type) => {
  return (
    <img
      src={
        type == 'white'
          ? '/animations/loader-white.svg'
          : '/animations/loader-orange.svg'
      }
      width={32}
      height={32}
      alt="loading..."
      className="w-[1.5rem] height-[1.5rem] place-self-center"
    />
  );
};
