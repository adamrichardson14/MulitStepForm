import { useForm } from 'react-hook-form';
export default function Step1({ setStep, formValues, setFormValues }) {
  const { register, handleSubmit } = useForm();
  function onSubmit(values) {
    setFormValues({
      ...formValues,
      ...values,
    });
    setStep(3);
  }
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 gap-y-6">
        <div>
          <label htmlFor="phone" className="sr-only">
            Phone
          </label>
          <input
            type="text"
            ref={register}
            name="phone"
            className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md focus:outline-none focus:ring-2"
            placeholder="Phone"
          />
        </div>
        <div>
          <label htmlFor="message" className="sr-only">
            Message
          </label>
          <textarea
            name="message"
            ref={register}
            rows="4"
            className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md focus:outline-none focus:ring-2"
            placeholder="Message"></textarea>
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
