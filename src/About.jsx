import React from 'react'

const About = () => {
  return (
    <>
      

      <h1 className="text-3xl font-semibold text-center mx-auto ">About Our App</h1>
      <p className="text-sm text-slate-500 text-center mt-2 max-w-md mx-auto">
        The Health Reminder App helps you stay on track with your medicines.  
        Add your medicines with time and get notified via browser and email.  
        It’s simple, fast, and effective to improve your daily health routine. 💪
      </p>

      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 px-4 md:px-0 py-10">
        <div className="size-[520px] rounded-full absolute blur-[300px] -z-10 bg-[#FBFFE1]"></div>

        <img
          className="max-w-sm w-full rounded-xl h-90 "
          src="/health2.jpg"
          alt="Health reminder"
        />

        <div>
          <h1 className="text-3xl font-semibold">Our Key Features</h1>
          <p className="text-sm text-slate-500 mt-2">
            Stay healthy and consistent with medicine schedules.  
            Get instant reminders, emails, and notifications so you never miss your dose.
          </p>

          <div className="flex flex-col gap-10 mt-6">
            <div className="flex items-center gap-4">
              <div className="size-9 p-2 bg-indigo-50 border border-indigo-200 rounded">
                <img
                  src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/flashEmoji.png"
                  alt="Reminder"
                />
              </div>
              <div>
                <h3 className="text-base font-medium text-slate-600">Timely Reminders</h3>
                <p className="text-sm text-slate-500">
                  Get accurate medicine reminders via browser and email notifications.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="size-9 p-2 bg-indigo-50 border border-indigo-200 rounded">
                <img
                  src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/colorsEmoji.png"
                  alt="UI"
                />
              </div>
              <div>
                <h3 className="text-base font-medium text-slate-600">Simple & Clean Design</h3>
                <p className="text-sm text-slate-500">
                  Easy-to-use interface with a modern and responsive design for everyone.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="size-9 p-2 bg-indigo-50 border border-indigo-200 rounded">
                <img
                  src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/puzzelEmoji.png"
                  alt="Integration"
                />
              </div>
              <div>
                <h3 className="text-base font-medium text-slate-600">Stay Healthy & Consistent</h3>
                <p className="text-sm text-slate-500">
                  Never miss a dose again! Perfect companion for managing your health routine.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
