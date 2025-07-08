

const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-10">
      <div className="max-w-4xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()} Minimal Library Management System. All rights reserved.
        </p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a
            href="#"
            className="text-gray-600 hover:text-blue-600 text-sm transition-colors duration-200"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-blue-600 text-sm transition-colors duration-200"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
