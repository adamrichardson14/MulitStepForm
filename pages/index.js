import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
      <h1 className="text-6xl text-gray-700 mb-20">Awesome form</h1>
      <div className="max-w-lg mx-auto lg:max-w-none">
        <form action="#" method="POST" className="grid grid-cols-1 gap-y-6">
          <div>
            <label htmlFor="full_name" className="sr-only">
              Full name
            </label>
            <input
              type="text"
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
              className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md focus:outline-none focus:ring-2"
              placeholder="Email"
            />
          </div>
          <div>
            <label htmlFor="phone" className="sr-only">
              Phone
            </label>
            <input
              type="text"
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
              rows="4"
              className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md focus:outline-none focus:ring-2"
              placeholder="Message"></textarea>
          </div>
          <div>
            <label htmlFor="full_name" className="sr-only">
              Where did you hear about us?
            </label>
            <input
              name="where"
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
              name="feedback"
              className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md focus:outline-none focus:ring-2"
              placeholder="Do you have any feedback for us?"
            />
          </div>
          <div>
            <button
              type="submit"
              className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md focus:outline-none focus:ring-2 text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
