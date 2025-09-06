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

  // Add reminder (all fields required)
  const addReminder = () => {
    if (!medicine || !time || !email) {
      return alert("⚠️ Please enter Medicine Name, Time, and Email!");
    }

    setReminders([...reminders, { medicine, time, email }]);
    setMedicine("");
    setTime("");
    setEmail("");
  };

  // Delete reminder
  const deleteReminder = (index) => {
    const newReminders = reminders.filter((_, i) => i !== index);
    setReminders(newReminders);
  };

  // Browser notification
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

  // Ask notification permission
  const requestPermission = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission();
    }
  };

  // Send Email via EmailJS
  const sendEmail = (toEmail, medicine, time) => {
    const templateParams = {
      to_email: toEmail,
      medicine_name: medicine,
      reminder_time: time,
    };

    emailjs
      .send(
        "service_feqd1sq",   // 🔹 Your Service ID
        "template_0ztpwaq",  // 🔹 Your Template ID
        templateParams,
        "AE-eOZ-gpvE0C1n9K"  // 🔹 Your Public Key
      )
      .then((res) => {
        console.log("✅ Email sent!", res.status, res.text);
        alert("Email sent successfully!");
      })
      .catch((err) => {
        console.error("❌ Email failed...", err);
        alert("Email failed: " + err.text);
      });
  };

  return (
    <div
      className="relative min-h-screen bg-[url('health.jpg')] bg-cover bg-center flex items-center justify-center"
    >
      {/* Blur Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-xs"></div>

      {/* Main Glass Effect Card */}
      <div className="relative z-10 w-full max-w-lg bg-white/20 backdrop-blur-lg rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold mb-6 text-purple-700 text-center">
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
            className="px-3 py-2 border rounded-lg shadow-sm bg-white/70 backdrop-blur-sm"
            required
          />
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="px-3 py-2 border rounded-lg shadow-sm bg-white/70 backdrop-blur-sm"
            required
          />
          <input
            type="email"
            placeholder="Your Email (Required)"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-3 py-2 border rounded-lg shadow-sm bg-white/70 backdrop-blur-sm"
            required
          />
          <button
            onClick={addReminder}
            className="px-4 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition"
          >
            Add Reminder
          </button>
        </div>

        {/* Test Email Button */}
        <button
          onClick={() =>
            sendEmail("yourmail@gmail.com", "Test Medicine", "12:00")
          }
          className="mb-6 w-full px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Send Test Email
        </button>

        {/* Reminder List */}
        <div className="bg-white/30 backdrop-blur-sm rounded-xl shadow-lg p-4">
          <h2 className="text-xl font-semibold mb-4">📅 Your Reminders</h2>
          {reminders.length === 0 ? (
            <p className="text-gray-700">No reminders added yet.</p>
          ) : (
            <ul className="space-y-3">
              {reminders.map((r, i) => (
                <li
                  key={i}
                  className="flex justify-between items-center bg-white/50 backdrop-blur-sm px-3 py-2 rounded-lg"
                >
                  <span>
                    <b>{r.medicine}</b> at <b>{r.time}</b>{" "}
                    {r.email && (
                      <span className="text-sm text-gray-600">📧 {r.email}</span>
                    )}
                  </span>
                  <button
                    onClick={() => deleteReminder(i)}
                    className="px-2 py-1 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600"
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
