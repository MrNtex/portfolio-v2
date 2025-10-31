import Image from "next/image";

export default function Home() {
  return (
  <div className="flex flex-1 items-center justify-center bg-zinc-50 dark:bg-black">
      <section className="flex w-full max-w-3xl flex-col items-center py-16 sm:py-24 bg-white dark:bg-black sm:items-start text-lg leading-8 text-zinc-600 dark:text-zinc-400">
        <h1 className="text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50 ">
          Hi, I'm Artur Niemiec
        </h1>
        <div>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            Ex-Google Intern. My manager described me as
          </p>
          <i>"If something can’t be done, give it to someone who doesn’t know it."</i>
        </div>
        
        <p className="text-lg pt-4 text-zinc-600 dark:text-zinc-400">
          In my free time, I learn as much as I can about Math and Quantitative Finance. I hope to have a FinTech startup one day.
        </p>
        <Image
          src="/signature.png"
          alt="Signature"
          width={150}
          height={150}
        ></Image>
        <h4 className="text-lg font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
          Let's talk - <a href="mailto:rtrniemiec@proton.me">rtrniemiec@proton.me</a>, or <a href="https://www.linkedin.com/in/artur-niemiec/"> [LinkedIn]</a>
        </h4>
        <div className="flex gap-1.5 text-stone-600">
          <a href="https://github.com/MrNtex" target="_blank" rel="noopener noreferrer">[GitHub]</a> 
          <a href="./projects" target="_blank" rel="noopener noreferrer">[Projects]</a>
        </div>
        
      </section>
    </div>
  );
}
