
const SkeletonCart = () => {
  return (
    <div className="flex py-6 animate-pulse my-2">
    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border bg-gray-200"></div>
    <div className="ml-4 flex flex-1 flex-col">
      <div className="h-6 bg-gray-200 rounded"></div>
      <div className="h-4 bg-gray-200 rounded w-3/4 mt-2"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2 mt-1"></div>
    </div>
  </div>
  )
}

export default SkeletonCart