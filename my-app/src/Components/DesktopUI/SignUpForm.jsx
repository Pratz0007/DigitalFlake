import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Input from './Input';
import Button from './Button';

const SignUpForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Signup failed');
      }

      console.log('Signup successful!');
    } catch (error) {
      console.error('Signup error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4">
      <h1 className="text-2xl font-medium text-center mb-4" style={{ color: 'DarkBlue', textShadow: '2px 1px 2px rgba(0, 0, 0, 0.2)' }}>digitalflake</h1>
      <h3 className="text-2 font-weight: lighter text-center mb-4" style={{ color: '#9F9F9F'}}>Welcome to DigitalFlake Admin</h3>
      <Input
  {...register('email', {
    required: 'Email is required',
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: 'Invalid email address'
    }
  })}
  
  label="Email-Id -"
  type="email"
  placeholder="Enter your email"
  error={errors.email?.message}
  className="rounded-lg border border-black-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-700 placeholder-gray-400 bg-white dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-indigo-300 dark:placeholder-gray-600 transition-all duration-300"
/>
<div>
      <Input
        {...register('password', { required: 'Password is required', minLength: 8 })}
        label="Password -"
        type="password"
        placeholder="Enter your password"
        error={errors.password?.message}
        className="rounded-md border border-black-300 px-3 py-2 focus:outline-black focus:ring-indigo-500 focus:border-indigo-500"
      />
      </div>
      <Button type="submit" disabled={isLoading} className="bg-black-500 text-blue px-5 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        {isLoading ? 'Loading...' : 'Log In'}
      </Button>
      <div className="flex items-center justify-between mt-4">
        <a href="/forgot-password" className="text-sm text-gray-600 hover:underline">Forgot password?</a>
        <p className="text-sm text-gray-600">Already have an account? <a href="/login" className="text-indigo-500 hover:underline">Log in</a></p>
      </div>
    </form>
  );
};

export default SignUpForm;
