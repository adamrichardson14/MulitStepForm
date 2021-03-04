import axios from 'axios';
import { useForm } from 'react-hook-form';
export default function Step3({ setStep, formValues, setFormValues }) {
  const { register, handleSubmit } = useForm();
  async function onSubmit(values) {
    setFormValues({
      ...formValues,
      ...values,
    });
    console.log();

    const config = {
      url: '/api/hello',
      data: {
        ...formValues,
        ...values,
      },
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response = await axios(config);

    if (response.status == 200) {
      console.log('success', response.data);
    }
  }
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 gap-y-6">
        <div>
          <label htmlFor="full_name" className="sr-only">
            Where did you hear about us?
          </label>
          <input
            name="where"
            ref={register}
            className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md focus:outline-none focus:ring-2"
            placeholder="Where did you hear about us?"
          />
        </div>
        <div>
          <label htmlFor="full_name" className="sr-only">
            Do you have any feedback for us?
          </label>
          <input
            type="text"
            ref={register}
            name="feedback"
            className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md focus:outline-none focus:ring-2"
            placeholder="Do you have any feedback for us?"
          />
        </div>
        <div>
          <button
            type="submit"
            className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md focus:outline-none focus:ring-2 text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-10">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
