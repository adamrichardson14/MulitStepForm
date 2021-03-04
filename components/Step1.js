import { useForm } from 'react-hook-form';
export default function Step1({ setStep, formValues, setFormValues }) {
  const { register, handleSubmit } = useForm();
  function onSubmit(values) {
    setFormValues({
      ...formValues,
      ...values,
    });
    setStep(2);
  }
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 gap-y-6">
        <div>
          <label htmlFor="full_name" className="sr-only">
            Full name
          </label>
          <input
            type="text"
            ref={register}
            name="full_name"
            className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md focus:outline-none focus:ring-2"
            placeholder="Full name"
          />
        </div>
        <div>
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            name="email"
            type="email"
            ref={register}
            className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md focus:outline-none focus:ring-2"
            placeholder="Email"
          />
        </div>
        <div>
          <button
            type="submit"
            className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md focus:outline-none focus:ring-2 text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-10">
            Next
          </button>
        </div>
      </form>
    </>
  );
}
