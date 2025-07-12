// import buildWithAiLogo from "@/assets/build-with-ai-logo.png";

interface DPPreviewProps {
  name?: string;
  photo?: string;
  color?: string;
  photoPosition?: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
    transform?: string;
  };
  namePosition?: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
    transform?: string;
  };
}

const DPPreview = ({ 
  name = "", 
  photo, 
  photoPosition = { top: '33%', left: '73.5%', transform: 'translate(-50%, -50%)' },
  namePosition = { bottom: '40%', left: '73.7%', transform: 'translateX(-50%)' }
}: DPPreviewProps) => {
  return (
    <div className="w-full max-w-md mx-auto dp-preview">
      <div className="relative overflow-hidden aspect-square">
        {/* Template background image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src="/template.png" 
          alt="BuildWithAI Template" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Overlay content */}
        <div className="absolute inset-0">
          {/* User photo - positioned based on props */}
          <div 
            className="absolute z-10"
            style={{
              top: photoPosition.top,
              bottom: photoPosition.bottom,
              left: photoPosition.left,
              right: photoPosition.right,
              transform: photoPosition.transform
            }}
          >
            <div className="w-40 h-40 mx-auto overflow-hidden bg-gray-200 border-4 border-white rounded-full shadow-lg">
              {photo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img 
                  src={photo} 
                  alt={name} 
                  className="object-cover w-full h-full"
                  crossOrigin="anonymous"
                  onLoad={() => console.log('Image loaded successfully')}
                  onError={(e) => console.error('Image failed to load:', e)}
                />
              ) : (
                <div className="flex items-center justify-center w-full h-full bg-gray-200">
                  <span className="text-sm text-gray-400">Photo</span>
                </div>
              )}
            </div>
          </div>

          {/* User name - positioned based on props */}
          {name && (
            <div 
              className="absolute z-10"
              style={{
                top: namePosition.top,
                bottom: namePosition.bottom,
                left: namePosition.left,
                right: namePosition.right,
                transform: namePosition.transform
              }}
            >
              <div className="px-4 py-1.5 bg-white/95 backdrop-blur-sm rounded-full shadow-lg border border-gray-200">
                <div className="text-[11px] font-semibold text-gray-800 text-center whitespace-nowrap">{name}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DPPreview;