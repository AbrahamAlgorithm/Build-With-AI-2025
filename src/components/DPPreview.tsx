// import buildWithAiLogo from "@/assets/build-with-ai-logo.png";

interface DPPreviewProps {
  name?: string;
  photo?: string;
  color?: string;
}

const DPPreview = ({ name = "", photo, color = "white" }: DPPreviewProps) => {
  // Define background colors based on selection
  const backgroundColors = {
    white: "bg-white",
    blue: "bg-blue-50",
    green: "bg-green-50"
  };

  const getBackgroundColor = () => backgroundColors[color as keyof typeof backgroundColors] || "bg-white";

  return (
    <div className="w-full max-w-md mx-auto dp-preview">{/* Added dp-preview class for capture */}
      <div className={`relative ${getBackgroundColor()} rounded-3xl shadow-lg overflow-hidden aspect-square`}>
        {/* Main content area */}
        <div className="absolute inset-0 flex flex-col justify-between p-6">
          {/* Top section with decorative elements */}
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-16 h-8 border-2 border-gray-800 rounded-full"></div>
              <div className="px-3 py-1 text-sm font-medium text-white bg-gray-800 rounded-full">
                2025
              </div>
            </div>
          </div>

          {/* Center section */}
          <div className="space-y-4 text-center">
            <div className="text-sm font-medium text-gray-600">I'll be attending</div>
            
            {/* Logo area */}
            {/* <div className="flex justify-center">
              <img 
                src={buildWithAiLogo} 
                alt="Build with AI" 
                className="object-contain w-auto h-16"
              />
            </div> */}

            {/* User photo placeholder */}
            <div className="w-24 h-24 mx-auto overflow-hidden bg-gray-200 border-4 border-gray-300 rounded-full">
              {photo ? (
                <img src={photo} alt={name} className="object-cover w-full h-full" />
              ) : (
                <div className="flex items-center justify-center w-full h-full bg-gray-200">
                  <span className="text-xs text-gray-400">Photo</span>
                </div>
              )}
            </div>

            {/* User name display */}
            {name && (
              <div className="px-4 py-2 text-center border border-gray-200 rounded-full bg-white/80 backdrop-blur-sm">
                <div className="text-sm font-semibold text-gray-800">{name}</div>
              </div>
            )}

            {/* Decorative wave */}
            <div className="flex justify-center">
              <svg width="120" height="40" viewBox="0 0 120 40" className="text-pink-300">
                <path
                  d="M10,20 Q30,5 50,20 T90,20 Q110,30 120,20"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                />
              </svg>
            </div>
          </div>

          {/* Bottom section */}
          <div className="space-y-3">
            {/* Date badge */}
            <div className="px-4 py-2 text-center bg-white border-2 border-gray-800 rounded-full">
              <div className="text-xs font-medium text-gray-600">12th April 2025</div>
            </div>

            {/* Location and sponsor info */}
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-white border-2 border-gray-800"></div>
                <div className="text-gray-700">
                  <div className="font-medium">FUTMINNA Innovation Hub,</div>
                  <div>Gidan Kwano Campus, FUTMINNA</div>
                  <div>Niger state.</div>
                </div>
              </div>
              <div className="flex space-x-1">
                <div className="w-4 h-4 rounded-sm bg-gdg-blue"></div>
                <div className="w-4 h-4 rounded-sm bg-gdg-red"></div>
                <div className="w-4 h-4 rounded-sm bg-gdg-yellow"></div>
                <div className="w-4 h-4 rounded-sm bg-gdg-green"></div>
              </div>
            </div>

            {/* GDG branding */}
            <div className="text-right">
              <div className="text-xs font-medium text-gray-700">Google</div>
              <div className="text-xs font-medium text-gray-700">Developer</div>
              <div className="text-xs font-medium text-gray-700">Groups</div>
            </div>
          </div>
        </div>

        {/* Decorative corner elements */}
        <div className="absolute top-4 right-4">
          <div className="w-8 h-8 border-2 border-gray-800 rounded-full"></div>
        </div>
        
        {/* Decorative line element */}
        <div className="absolute bottom-20 left-6">
          <svg width="60" height="20" viewBox="0 0 60 20" className="text-red-400">
            <path
              d="M5,10 Q15,5 25,10 T45,10"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default DPPreview;