### src/components/common/Footer.jsx

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Soma. All rights reserved.</p>
        <div className="mt-2 space-x-4">
          <a href="/about" className="hover:text-gray-300">
            About
          </a>
          <a href="/contact" className="hover:text-gray-300">
            Contact
          </a>
          <a href="/privacy" className="hover:text-gray-300">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;