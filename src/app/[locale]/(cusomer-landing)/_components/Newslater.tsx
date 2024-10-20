const Newslater = () => {
  return (
    <div className="container pt-16 pb-16 xl:pb-20">
      <div className="py-10 lg:py-16  relative space-y-10 rounded-2xl bg-skin-red px-4 sm:px-[176px]">
        <h4 className="text-center text-2xl font-bold text-white">
          Nu gasesti locatia ta preferata in aplicatie? Spune-ne cum se numeste
          si ne ocupam noi de restul!
        </h4>
        <div className="flex w-full rounded-full md:rounded-none items-center gap-4 justify-center bg-white md:bg-transparent px-1 md:px-6  ">
          <input
            type="text"
            className="flex-1  w-[calc(100%-25px)] px-4 py-4 md:py-4 rounded-full bg-transparent focus:outline-none outline-none border border-transparent  md:bg-white h-full block text-base lg:text-lg text-skin-light-black font-normal "
            placeholder="Nume locatie"
          />
          <button className="rounded-full  hover:bg-skin-green transition-all duration-500 hover:border-skin-green bg-skin-red md:px-6 md:py-4 md:border border-white md:bg-transparent p-4">
            <svg
              className="md:hidden"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="16"
              viewBox="0 0 20 16"
              fill="none"
            >
              <path
                d="M1 8H19M19 8L13.6667 15M19 8L13.6667 1"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-lg hidden   transition-all duration-500 text-white md:block">
              Trimite
            </span>
          </button>
        </div>
        <div className="w-[72px] absolute left-1/2 -translate-x-1/2  -top-20 h-[72px] rounded-full bg-skin-green grid place-items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="22"
            viewBox="0 0 14 22"
            fill="none"
          >
            <path
              d="M13 6.95304C13 8.30015 12.6952 9.62979 12.1085 10.8424L10.0027 15.1944C8.97314 17.3221 8.45839 18.3859 7.72706 18.6713C7.25952 18.8537 6.74048 18.8537 6.27294 18.6713C5.54161 18.3859 5.02686 17.3221 3.99734 15.1944L1.89153 10.8424C1.30479 9.6298 1 8.30015 1 6.95304V6.95304C1 3.66527 3.71223 1 7 1V1C10.2878 1 13 3.66527 13 6.95304V6.95304Z"
              stroke="white"
              strokeWidth="2"
            />
            <path
              d="M9 7C9 8.10457 8.10457 9 7 9C5.89543 9 5 8.10457 5 7C5 5.89543 5.89543 5 7 5C8.10457 5 9 5.89543 9 7Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Newslater;
