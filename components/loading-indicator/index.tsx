import { MoonLoader } from "react-spinners";

const LoadingIndicator = () => (
  <div className="flex items-center justify-center w-full gap-2">
    <MoonLoader color="white" size={24} />
    <span className="text-base">Loading...</span>
  </div>
);

export default LoadingIndicator;
