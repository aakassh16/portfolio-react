function Hero() {
    return (
      <section
        id="hero"
        className="px-10 w-full flex gap-12 flex-col lg:flex-row 
                   justify-center items-center align-center mt-40 
                   mb-16 lg:mt-10 max-w-5xl mx-auto lg:gap-0 h-[80vh]">
        <div className="flex-1 flex flex-col justify-center items-center gap-5">
          <div>
            <h4 className="text-center text-xl font-bold">
                Hi I am
            </h4>
            <h2 className="text-center text-emerald-500 text-5xl font-bold">
              Akash Kundu
            </h2>
          </div>
          <p className="text-center">
            I am a Software Developer Enthusiast
          </p>
        </div>
        <div className="flex-1">
          <img src="https://aakassh16.github.io/portfolio/assets/profile-pic.png"
               alt="Hello.svg"
               className="w-full h-full bg-cover"/>
        </div>
      </section>
    );
  }

  export default Hero;