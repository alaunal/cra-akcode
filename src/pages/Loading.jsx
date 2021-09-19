import React from 'react';
import tw from 'twin.macro';


const Loading = _ => {
  return (
    <div
      css={[
        tw`flex flex-col items-center justify-center h-screen`
      ]}
    >
    <div tw="flex flex-col justify-center h-full space-y-5">
      <section tw="text-gray-600">
        <div tw="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
            <h1 tw=" sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Loading ...</h1>
        </div>
      </section>
    </div>
  </div>
  );
};


export default Loading;