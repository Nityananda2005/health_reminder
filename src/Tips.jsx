export default function Tips() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        * { font-family: 'Poppins', sans-serif; }
      `}</style>

      <h1 className="text-2xl sm:text-3xl font-semibold text-center mx-auto">
        Health Tips
      </h1>
      <p className="text-sm sm:text-base text-slate-500 text-center mt-2 max-w-lg mx-auto">
        Stay consistent and healthy with these daily wellness tips.
      </p>

      {/* 🔹 Desktop/Laptop Layout (Original Design) */}
      <div className="hidden lg:flex items-center gap-6 h-[400px] w-full max-w-6xl mt-10 mx-auto">
        {/* Card 1 */}
        <div className="relative group flex-grow transition-all w-56 h-[400px] duration-500 hover:w-full">
          <img
            className="h-full w-full object-cover object-center"
            src="https://tse1.mm.bing.net/th/id/OIP.IkCLroQB3c_P04-6h3XWdAHaE8?rs=1&pid=ImgDetMain&o=7&rm=3"
            alt="Stay Hydrated"
          />
          <div className="absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <h1 className="text-3xl">Stay Hydrated</h1>
            <p className="text-sm">Drink at least 7–8 glasses of water daily for better health.</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative group flex-grow transition-all w-56 h-[400px] duration-500 hover:w-full">
          <img
            className="h-full w-full object-cover object-right"
            src="https://tse1.mm.bing.net/th/id/OIP.uNqCYdc3isn9D5C83jmLCgHaEo?rs=1&pid=ImgDetMain&o=7&rm=3"
            alt="Eat Healthy"
          />
          <div className="absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <h1 className="text-3xl">Eat Healthy</h1>
            <p className="text-sm">Add fresh fruits and vegetables to your meals for immunity boost.</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative group flex-grow transition-all w-56 h-[400px] duration-500 hover:w-full">
          <img
            className="h-full w-full object-cover object-center"
            src="https://images.askmen.com/1080x540/sports/bodybuilding/common-exercise-mistakes-1107244-TwoByOne.jpg"
            alt="Exercise Daily"
          />
          <div className="absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <h1 className="text-3xl">Exercise Daily</h1>
            <p className="text-sm">30 minutes of walking or exercise daily keeps you active & fit.</p>
          </div>
        </div>
      </div>

      {/* 🔹 Mobile/Tablet Layout (Stack + Simple Hover Effect) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl mt-10 mx-auto px-4 lg:hidden">
        {/* Card 1 */}
        <div className="relative group h-64 rounded-xl overflow-hidden shadow-lg">
          <img
            className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
            src="https://tse1.mm.bing.net/th/id/OIP.IkCLroQB3c_P04-6h3XWdAHaE8?rs=1&pid=ImgDetMain&o=7&rm=3"
            alt="Stay Hydrated"
          />
          <div className="absolute inset-0 flex flex-col justify-end p-6 text-white bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <h1 className="text-xl font-semibold">Stay Hydrated</h1>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative group h-64 rounded-xl overflow-hidden shadow-lg">
          <img
            className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
            src="https://tse1.mm.bing.net/th/id/OIP.uNqCYdc3isn9D5C83jmLCgHaEo?rs=1&pid=ImgDetMain&o=7&rm=3"
            alt="Eat Healthy"
          />
          <div className="absolute inset-0 flex flex-col justify-end p-6 text-white bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <h1 className="text-xl font-semibold">Eat Healthy</h1>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative group h-64 rounded-xl overflow-hidden shadow-lg sm:col-span-2">
          <img
            className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
            src="https://images.askmen.com/1080x540/sports/bodybuilding/common-exercise-mistakes-1107244-TwoByOne.jpg"
            alt="Exercise Daily"
          />
          <div className="absolute inset-0 flex flex-col justify-end p-6 text-white bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <h1 className="text-xl font-semibold">Exercise Daily</h1>
          </div>
        </div>
      </div>
    </>
  );
}
