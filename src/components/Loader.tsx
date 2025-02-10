import { LoaderProps } from "../type/index";

const Loader: React.FC<LoaderProps> = ({ loading }) => {
  if (!loading) return null;
  return (
    <>
      <div className="flex justify-center p-4">
        <h1 className="">Loading...</h1>
        <div className="w-8 h-8 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
      </div>
    </>
  );
};

export default Loader;
