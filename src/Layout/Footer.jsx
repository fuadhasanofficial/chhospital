const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-lg font-bold">Md. Mujahid Al Fuad</h2>
          <p>Mobile: 01876581210</p>
        </div>
        <div className="text-center md:text-right">
          <p>
            &copy; {new Date().getFullYear()} Md. Mujahid Al Fuad. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
