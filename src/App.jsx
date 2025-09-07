import { useState, useEffect } from "react";
import emailjs from "emailjs-com";

function App() {
  const [medicine, setMedicine] = useState("");
  const [time, setTime] = useState("");
  const [email, setEmail] = useState("");
  const [reminders, setReminders] = useState(
    JSON.parse(localStorage.getItem("reminders")) || []
  );

  // Save reminders to localStorage
  useEffect(() => {
    localStorage.setItem("reminders", JSON.stringify(reminders));
  }, [reminders]);

  // Reminder checker (every 1 min)
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const currentTime =
        String(now.getHours()).padStart(2, "0") +
        ":" +
        String(now.getMinutes()).padStart(2, "0");

      reminders.forEach((r) => {
        if (r.time === currentTime) {
          notifyUser(r.medicine);
          if (r.email) {
            sendEmail(r.email, r.medicine, r.time);
          }
        }
      });
    }, 60000);
    return () => clearInterval(interval);
  }, [reminders]);

  const addReminder = () => {
    if (!medicine || !time || !email) {
      return alert("⚠️ Please enter Medicine Name, Time, and Email!");
    }
    setReminders([...reminders, { medicine, time, email }]);
    setMedicine("");
    setTime("");
    setEmail("");
  };

  const deleteReminder = (index) => {
    const newReminders = reminders.filter((_, i) => i !== index);
    setReminders(newReminders);
  };

  const notifyUser = (medicine) => {
    if (Notification.permission === "granted") {
      new Notification("💊 Time to take your medicine!", {
        body: medicine,
        icon: "https://cdn-icons-png.flaticon.com/512/2966/2966485.png",
      });
    } else {
      alert(`Medicine Reminder: ${medicine}`);
    }
  };

  const requestPermission = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission();
    }
  };

  const sendEmail = (toEmail, medicine, time) => {
    const templateParams = {
      to_email: toEmail,
      medicine_name: medicine,
      reminder_time: time,
    };

    emailjs
      .send(
        "service_feqd1sq",
        "template_0ztpwaq",
        templateParams,
        "AE-eOZ-gpvE0C1n9K"
      )
      .then(() => {
        alert("✅ Email sent successfully!");
      })
      .catch((err) => {
        alert("❌ Email failed: " + err.text);
      });
  };

  return (
    <div className="relative min-h-screen bg-[url('/health.jpg')] bg-cover bg-center flex items-center justify-center">
      {/* Blur Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-xs"></div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white/20 backdrop-blur-lg shadow-md z-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap justify-between items-center">
          <h1 className="text-xl sm:text-2xl font-bold text-purple-700">
            💊 HealthCare
          </h1>
          <ul className="flex space-x-4 sm:space-x-6 text-white font-medium text-sm sm:text-base mt-2 sm:mt-0">
            <li className="hover:text-purple-300 cursor-pointer">Home</li>
            <li className="hover:text-purple-300 cursor-pointer">About</li>
            <li className="hover:text-purple-300 cursor-pointer">Health Tips</li>
          </ul>
        </div>
      </nav>

      {/* Main Glass Effect Card */}
      <div className="relative z-10 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl bg-white/20 backdrop-blur-lg rounded-2xl shadow-xl p-6 sm:p-8 mx-4 sm:mx-auto mt-28">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-purple-700 text-center">
          💊 <i>Health Reminder</i>
        </h1>

        <button
          onClick={requestPermission}
          className="mb-6 w-full px-4 py-2 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700 transition"
        >
          Enable Notifications
        </button>

        {/* Form */}
        <div className="flex flex-col gap-3 mb-6">
          <input
            type="text"
            placeholder="Medicine Name"
            value={medicine}
            onChange={(e) => setMedicine(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg shadow-sm bg-white/70 backdrop-blur-sm"
            required
          />
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg shadow-sm bg-white/70 backdrop-blur-sm"
            required
          />
          <input
            type="email"
            placeholder="Your Email (Required)"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg shadow-sm bg-white/70 backdrop-blur-sm"
            required
          />
          <button
            onClick={addReminder}
            className="w-full px-4 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition"
          >
            Add Reminder
          </button>
        </div>

        {/* Test Email Button */}
        <button
          onClick={() => sendEmail("yourmail@gmail.com", "Test Medicine", "12:00")}
          className="mb-6 w-full px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Send Test Email
        </button>

        {/* Reminder List */}
        <div className="bg-white/30 backdrop-blur-sm rounded-xl shadow-lg p-4">
          <h2 className="text-lg sm:text-xl font-semibold mb-4">📅 Your Reminders</h2>
          {reminders.length === 0 ? (
            <p className="text-gray-700 text-sm sm:text-base">No reminders added yet.</p>
          ) : (
            <ul className="space-y-3">
              {reminders.map((r, i) => (
                <li
                  key={i}
                  className="flex flex-col sm:flex-row sm:justify-between sm:items-center bg-white/50 backdrop-blur-sm px-3 py-2 rounded-lg text-sm sm:text-base"
                >
                  <span>
                    <b>{r.medicine}</b> at <b>{r.time}</b>{" "}
                    {r.email && (
                      <span className="block sm:inline text-gray-600">📧 {r.email}</span>
                    )}
                  </span>
                  <button
                    onClick={() => deleteReminder(i)}
                    className="mt-2 sm:mt-0 px-2 py-1 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600"
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
