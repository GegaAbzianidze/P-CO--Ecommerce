const SkeletonProduct = () => {
  return (
    <div className="h-full w-full cursor-pointer -mt-6 py-4 flex flex-col gap-3 animate-pulse">
      {/* <div className="w-full md:h-64 bg-gray-300" />
      <div className="gap-1 mt-1 flex flex-col">
        <div className="w-full h-6 rounded bg-gray-300"></div>
        <div className="w-1/4 h-6 rounded bg-gray-300"></div>
      </div> */}
      <div className="bg-gray-200 h-96 w-80"></div>
      <div className="bg-gray-200 h-6 w-44"></div>
      <div className="bg-gray-200 h-6 w-24"></div>
    </div>
  );
};

export default SkeletonProduct;
