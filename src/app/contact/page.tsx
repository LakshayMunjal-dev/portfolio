"use client";
import React, { useState } from "react";

function Page() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, subject, message }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        throw new Error("Failed to send");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section>
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-zinc-200">
          Contact Me
        </h2>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-300"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                         focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 
                         dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                         dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="name@example.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-gray-300"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 
                         shadow-sm focus:ring-primary-500 focus:border-primary-500 
                         dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                         dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Let me know how I can help you"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-300"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows={6}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm 
                         border border-gray-300 focus:ring-primary-500 focus:border-primary-500 
                         dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                         dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Leave a message..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={status === "loading"}
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg 
                       bg-blue-600 sm:w-fit hover:bg-blue-700 focus:ring-4 focus:outline-none 
                       focus:ring-blue-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "loading" ? "Sending..." : "Send message"}
          </button>
          {status === "success" && (
            <p className="mt-2 text-green-400 text-sm">✅ Message sent successfully!</p>
          )}
          {status === "error" && (
            <p className="mt-2 text-red-400 text-sm">❌ Something went wrong. Try again.</p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Page;