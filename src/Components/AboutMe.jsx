import profile from "/image/about.png";

export default function AboutMe() {
  return (
    <section className="bg-white py-8 container mx-auto" id="about">
      <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
      <div className="w-full py-8 flex flex-col md:flex-row">
        <div className="w-full flex justify-center relative items-center p-10">
          <img src={profile} alt="image" className="rounded-md" />
          <div className="w-[calc(100%-120px)] h-[calc(100%-80px)] border-2 top-0 left-2 rounded-md absolute"></div>
        </div>
        <div className="container mx-auto px-4">
          <div className="text-center   mb-8">
            <div className="w-full  flex items-start justify-center md:justify-start">
              <strong>Hello! I`m Robius Sani,</strong>
            </div>
            <p className="text-lg text-center md:text-left">
              a passionate frontend developer with a strong foundation in modern
              web technologies. I love creating dynamic and responsive web
              applications.
            </p>
          </div>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-center md:text-left">
              Address
            </h3>
            <div className="w-full flex justify-start items-start flex-col border-l border-black ml-3 py-2 px-5">
              <p>
                <strong>Name : </strong>
                <i>Robius Sani</i>
              </p>
              <p>
                <strong>Father : </strong>
                <i>Khokon mia</i>
              </p>
              <p>
                <strong>Distic : </strong>
                <i>Kishoreganj</i>
              </p>
              <p>
                <strong>Country : </strong>
                <i>Bangladesh</i>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
