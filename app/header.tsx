import Image from "next/image";

export default function Header() {
  return (
    <div className="w-full flex justify-center pt-[18px] pb-8">
      <header
        className="flex items-center justify-between w-full max-w-[1280px] h-[80px] bg-white rounded-[12px] shadow-lg px-12"
        style={{ opacity: 1, marginLeft: "50px", marginRight: "50px" }}
      >
        {/* Logo */}
        <div className="flex items-center gap-10">
          <a href="#" className="flex items-center gap-2">
            <Image
              src="/ayonaire-logo-new.png"
              alt="Ayonaire Logo"
              width={159}
              height={40}
              priority
            />
          </a>
          {/* Nav Links */}
          <nav className="hidden md:flex gap-10 text-lg font-semibold">
            <a href="#" className="text-orange-500 relative pb-1">
              Ayonaire Learn
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-orange-500 rounded"></span>
            </a>
            <a
              href="#"
              className="text-gray-800 hover:text-orange-500 transition-colors"
            >
              For Business
            </a>
            <a
              href="#"
              className="text-gray-800 hover:text-orange-500 transition-colors"
            >
              Hire Talent
            </a>
            <div className="relative group">
              <button className="text-gray-800 hover:text-orange-500 flex items-center gap-1 transition-colors">
                More{" "}
                <svg width="18" height="18" fill="none" viewBox="0 0 20 20">
                  <path
                    d="M5.25 7.75L10 12.25L14.75 7.75"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              {/* Dropdown example */}
              <div className="absolute left-0 mt-2 w-32 bg-white border rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                <a href="#" className="block px-4 py-2 hover:bg-orange-50">
                  About
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-orange-50">
                  Contact
                </a>
              </div>
            </div>
          </nav>
        </div>
        {/* Buttons */}
        <div className="flex gap-4">
          <button className="px-6 py-2 border-2 border-orange-400 rounded-xl text-orange-500 font-semibold bg-white hover:bg-orange-50 transition-colors text-lg">
            Log in
          </button>
          <button
            className="flex items-center gap-2 font-semibold shadow text-lg transition-colors"
            style={{
              width: "206.33px",
              height: "48px",
              borderRadius: "14px",
              opacity: 1,
              background: "linear-gradient(90deg, #F67219 0%, #FFDCC4 100%)",
              color: "#fff",
              paddingLeft: "24px",
              paddingRight: "24px",
              border: "none",
            }}
          >
            <span
              style={{
                fontFamily: "Satoshi, sans-serif",
                fontWeight: 700,
                fontSize: "16px",
                lineHeight: "100%",
                letterSpacing: "0",
              }}
            >
              See Bootcamps
            </span>
            <span
              style={{
                background: "rgba(255,255,255,0.3)",
                borderRadius: "50%",
                padding: "4px",
              }}
            >
              <svg width="22" height="22" fill="none" viewBox="0 0 20 20">
                <path
                  d="M7 10H13M13 10L10 7M13 10L10 13"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
        </div>
      </header>
    </div>
  );
}
