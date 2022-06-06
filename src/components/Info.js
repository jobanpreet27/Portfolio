import React from "react";
import Lottie from "react-lottie";
import * as animationData from "./developer.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {},
};
function Info() {
  return (
    <section className='my-16 px-5 md:my-32 flex flex-col flex-wrap space-y-16 md:space-y-0 patterns'>
      <div className='ml-auto w-72 md:w-96 lg:w-2/5'>
        <Lottie options={defaultOptions} />
      </div>
      <div className='max-w-md mb-auto space-y-5'>
        <h1 className='text-3xl font-bold md:text-5xl'>
          Hello. I’m Jobanpreet Singh
        </h1>
        <p className='tracking-wide leading-relaxed'>
          I'm a Full Stack Software Developer. I never stop learning and for me,
          each new project is another adventure.
        </p>
      </div>
    </section>
  );
}

export default Info;
