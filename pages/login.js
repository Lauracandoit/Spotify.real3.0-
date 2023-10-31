import React from 'react';
import { getProviders, signIn } from "next-auth/react";

function Login({ providers }) {
  return (
    <div className='flex flex-col items-center bg-black min-h-screen w-full justify-center'>
      <img className='w-52 mb-5' src='https://links.papareact.com/9xl' alt="Logo" />
      {providers
        ? Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button className='bg-[#18D860] text-white p-5 rounded-full'
              onClick={() => signIn(provider.id, { callbackUrl: '/'})}
                   >
                Login with {provider.name}
              </button>
            </div>
          ))
        : <p>Loading providers...</p>}
    </div>
  );
}

export default Login;

export async function getServerSideProps() {
  try {
    const providers = await getProviders();
    return {
      props: {
        providers
      }
    };
  } catch (error) {
    console.error("Error fetching providers:", error);
    return {
      props: {
        providers: null // Set providers to null in case of an error
      }
    };
  }
}
