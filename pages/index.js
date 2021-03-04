import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Step1 from '../components/Step1';
import Step2 from '../components/Step2';
import Step3 from '../components/Step3';
export default function Home() {
  const { register, errors, handleSubmit } = useForm();
  const [step, setStep] = useState(1);
  const [formValues, setFormValues] = useState({});
  return (
    <div className="bg-white px-4 sm:px-6 lg:col-span-3">
      <div className="max-w-lg mx-auto lg:max-w-none">
        <h1 className="text-6xl text-gray-700">Awesome form</h1>
        <p className="py-10 text-gray-600"> Step {step} of 3 </p>
        {step == 1 && (
          <Step1
            setStep={setStep}
            formValues={formValues}
            setFormValues={setFormValues}
          />
        )}

        {step == 2 && (
          <Step2
            setStep={setStep}
            formValues={formValues}
            setFormValues={setFormValues}
          />
        )}
        {step == 3 && (
          <Step3
            setStep={setStep}
            formValues={formValues}
            setFormValues={setFormValues}
          />
        )}
      </div>
    </div>
  );
}
