import React, { useState } from "react";

const OrderButton = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const email = "gustav.werdelin@gmail.com";

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const message = e.target.message.value;

    const subject = `Ny bestillingsforespørgsel fra ${name}`;
    const body = `Hej Gustav,\n\n${message}\n\nMvh,\n${name}`;
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;

    setIsFormOpen(false);
    setIsSent(true);
  };

  return (
    <div className="flex flex-col items-center justify-center text-center p-8">
      {!isFormOpen && !isSent && (
        <button
          onClick={() => setIsFormOpen(true)}
          className="flex items-center justify-center gap-3 text-primary px-6 py-3 font-medium
          border border-primary rounded-full opacity-90 transition-all duration-300 ease-in-out
          hover:shadow-xl hover:-translate-y-1 hover:opacity-100 hover:bg-backgroundsecondary hover:text-white"
        >
          <img
            src="/mailvector.png"
            alt="send mail"
            className="w-4 h-4"
          />
          <span>Send forespørgsel</span>
        </button>
      )}

      {isFormOpen && !isSent && (
        <form
          onSubmit={handleSubmit}
          className="bg-backgroundsecondary rounded-lg shadow-md p-4 w-full max-w-lg mt-4 transition-all duration-300 ease-out"
        >
          <h2 className="text-primary text-md font-medium mb-4">
            Email contact form.
          </h2>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            required
            className="w-full border font-regular border-secondary rounded-sm p-3 mb-4 focus:outline-none focus:ring-1 focus:ring-primary"
          />
          <textarea
            name="message"
            placeholder="Your message..."
            required
            className="w-full border font-regular border-secondary rounded-sm p-3 h-44 resize-none focus:outline-none focus:ring-1 focus:ring-primary mb-4"
          />
          <div className="flex justify-between">
            <button
              type="button"
              onClick={() => setIsFormOpen(false)}
              className="text-secondary hover:text-primary transition-colors font-regular px-2"
            >
              Close form
            </button>
            <button
              type="submit"
              className="text-secondary hover:text-primary transition-colors font-regular px-2"
            >
              Send mail
            </button>
          </div>
        </form>
      )}

      {isSent && (
        <div className="text-center mt-10 animate-fade-in p-4">
          <h2 className="text-lg font-semibold text-primary">Message almost sent!</h2>
          <p className="text-secondary font-regular mt-2">
            I promise that i'll respond as soon as soon as possible.
          </p>
          <button
            onClick={() => setIsSent(false)}
            className="mt-4 text-primary font-regular 
            border-secondary border rounded-full p-1 px-3 opacity-90 transition-all duration-300 ease-in-out
            hover:shadow-xl hover:-translate-y-1 hover:opacity-100 hover:bg-backgroundsecondary hover:text-white"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default OrderButton;
