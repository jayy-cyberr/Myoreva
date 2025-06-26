import React from 'react';

const WhatsAppWidget: React.FC = () => {
  const whatsappNumber = '2348114580792';
  const whatsappMessage = encodeURIComponent('Hello, I need one of your products.');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative group flex items-center space-x-2">
        {/* Hover Label (visible on sm+ screens only) */}
        <span className="hidden sm:inline-block text-sm bg-white text-gray-800 px-3 py-1 rounded-lg shadow-md opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300 absolute right-16 whitespace-nowrap">
          Chat us on WhatsApp
        </span>

        {/* WhatsApp Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat us on WhatsApp"
          className="rounded-full w-14 h-14 flex items-center justify-center shadow-lg bg-[#25D366] hover:bg-[#128C7E] transition-all"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 32 32"
            className="w-7 h-7"
          >
            <path d="M16.04 0C7.188 0 .047 7.14.047 15.991c0 2.824.744 5.58 2.16 7.996L0 32l8.211-2.14a16.002 16.002 0 007.829 2.012h.001c8.851 0 15.99-7.14 15.99-15.991S24.891 0 16.04 0zm0 29.494a13.388 13.388 0 01-6.8-1.842l-.487-.29-4.873 1.269 1.29-4.741-.316-.49a13.373 13.373 0 01-2.077-7.101c0-7.397 6.016-13.41 13.414-13.41 3.584 0 6.949 1.396 9.484 3.932a13.358 13.358 0 014.016 9.478c0 7.397-6.015 13.41-13.411 13.41zm7.372-10.238c-.403-.202-2.376-1.174-2.744-1.308-.368-.135-.637-.202-.907.203s-1.039 1.308-1.274 1.577c-.232.27-.468.303-.871.101s-1.695-.624-3.23-1.987c-1.194-1.066-2-2.38-2.234-2.78-.232-.403-.025-.62.174-.82.178-.177.403-.461.604-.691.202-.232.27-.404.403-.673.134-.27.067-.506-.034-.708s-.907-2.206-1.243-3.02c-.328-.79-.663-.681-.906-.692l-.772-.012a1.51 1.51 0 00-1.093.51c-.373.404-1.424 1.392-1.424 3.396 0 2.003 1.459 3.936 1.663 4.209.202.27 2.875 4.389 6.969 6.147 4.094 1.758 4.094 1.173 4.829 1.1.737-.067 2.376-.968 2.712-1.904.336-.936.336-1.737.235-1.904-.101-.168-.37-.27-.772-.47z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default WhatsAppWidget;
