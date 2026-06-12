interface LoaderProps {
  text?: string;
}

const Loader = ({
  text = "Loading...",
}: LoaderProps) => {
  return (
    <div className="flex justify-center items-center py-8">
      <div className="flex flex-col items-center gap-3">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-blue-500" />
        <p className="text-gray-600">{text}</p>
      </div>
    </div>
  );
};

export default Loader;