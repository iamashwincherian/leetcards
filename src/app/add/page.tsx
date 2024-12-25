import AddProblem from "../components/add-problem";

export default function AddPage() {
  return (
    <div className="flex flex-col justify-center items-center m-6">
      <p className="text-2xl font-semibold uppercase tracking-widest">
        Add Leetcard
      </p>

      <div className="mt-6 w-full md:max-w-[500px]">
        <AddProblem />
      </div>
    </div>
  );
}
