const SkeletonSingleProduct = () => {
  return (
    <div className="flex flex-col md:flex-row animate-pulse">
          <div className="md:w-1/2 w-full h-96 md:h-auto bg-slate-100">
          </div>
          <div className="md:w-1/2">
            <div className="lg:h-screen flex flex-col m-6 lg:m-20 lg:mt-32">
              <div className="bg-slate-100 rounded-md px-2 w-96 h-6">
              </div>
              <div className="flex justify-between mt-6 flex-col md:flex-row">
                <div className="bg-slate-100 h-4 w-12"></div>
                <p className="text-lg font-semibold">
                </p>
              </div>
              <hr className="mt-10 border-slate-100" />
              <div className="mt-2 text-lg font-extralight">
                <p>
                </p>
              </div>
              <div className="mt-8 flex justify-between">
                <a href="#" className="flex gap-2 items-center underline bg-slate-100 h-5 w-32">
                </a>
                <a href="#" className="flex gap-2 items-center underline bg-slate-100 h-5 w-32">
                </a>
              </div>
              <div className="mt-10">
                <p className="text-2xl bg-slate-100 h-8 w-32"></p>
                <div className="flex gap-2 mt-3">
                    <button
                      className="border border-slate-100 w-14 h-14 bg-slate-100"
                    >
                    </button>
                    <button
                      className="border border-slate-100 w-14 h-14 bg-slate-100"
                    >
                    </button>
                    <button
                      className="border border-slate-100 w-14 h-14 bg-slate-100"
                    >
                    </button>
                    <button
                      className="border border-slate-100 w-14 h-14 bg-slate-100"
                    >
                    </button>
                    <button
                      className="border border-slate-100 w-14 h-14 bg-slate-100"
                    >
                    </button>
                </div>
              </div>
              <div className="flex w-full mt-4">
                <button
                  className="bg-slate-100 w-5/6 m-1 h-14 text-white"
                >
                  Add to Cart
                </button>
                <button className="bg-slate-100 w-1/6 m-1 h-14 text-white flex justify-center items-center text-2xl">
                 
                </button>
              </div>
              <div className="mt-10 justify-center flex items-center gap-2 bg-slate-100 h-5 w-32 ">
              </div>
            </div>
          </div>
        </div>
  );
};

export default SkeletonSingleProduct;
