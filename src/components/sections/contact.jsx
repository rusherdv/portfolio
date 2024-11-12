import ContactForm from "../contact-form";

const ContactSection = () => {
  return (
    <div
      id="contact"
      className="w-10/12 mx-auto xl:w-[1100px] min-h-screen flex flex-col justify-center"
    >
      <h2 className="text-white font-semibold text-4xl text-center">Contact</h2>
      <p className="text-gray-400 mt-1 mb-3 text-sm text-center">
        For inquiries or connections, email me or follow on social media.
      </p>
      <div className="flex items-start mt-10 justify-center lg:justify-between">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactSection;
