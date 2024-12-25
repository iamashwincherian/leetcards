import AddProblem from "./add-problem";

export default function AddPage() {
  return (
    <div className="flex flex-col justify-center items-center m-3">
      <div className="mt-6 w-full md:max-w-[500px]">
        <AddProblem />
      </div>
    </div>
  );
}
