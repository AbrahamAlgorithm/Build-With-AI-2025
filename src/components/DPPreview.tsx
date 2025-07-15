import { cn } from "@/lib/utils";

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
  color = "white",
  photoPosition = { top: '36%', left: '25.5%', transform: 'translate(-50%, -50%)' },
  namePosition = { top: '38%', left: '73.7%', transform: 'translateX(-50%)' }
}: DPPreviewProps) => {
  
  // Define border colors based on selected color
  const getBorderColor = (selectedColor: string) => {
    switch (selectedColor) {
      case 'white':
        return '#ffffff';
      case 'black':
        return '#000000';
      default:
        return '#ffffff';
    }
  };

  const borderColor = getBorderColor(color);
  return (
    <div className="w-full max-w-md mx-auto dp-preview">
      <div className="relative overflow-hidden aspect-square">
        {/* Template background image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src="/template.jpg" 
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
            <div 
              className="size-28 sm:size-40 mx-auto overflow-hidden rounded-full" 
              style={{ 
                border: `1.2px solid ${borderColor}`, 
                backgroundColor: '#e5e7eb',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
              }}
            >
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
              <div 
                className="px-4 py-1.5 rounded-4xl flex justify-center items-center h-8 sm:min-w-48" 
                style={{ 
                  backgroundColor: '#ccf6c6', 
                  border: `1.2px solid ${borderColor}`,
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
                }}
              >
                <div 
                  className={cn("sm:text-[11px] text-[10px] font-semibold text-center whitespace-nowrap", name ? "text-gray-800" : "text-gray-400")}
                >
                  {name ? name : "Name"}
                </div>
              </div>
            </div>
        
        </div>
      </div>
    </div>
  );
};

export default DPPreview;