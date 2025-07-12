'use client'
import { useState, useRef, useEffect } from "react";
import { Upload, Edit2, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import ReactCrop, { Crop } from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import DPPreview from "./DPPreview";

const DPGenerator = () => {
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState("white");
  const [originalImage, setOriginalImage] = useState<string>("");
  const [showCropInterface, setShowCropInterface] = useState(false);
  const [cropPreview, setCropPreview] = useState<string>("");
  const [crop, setCrop] = useState<Crop>({
    unit: '%',
    width: 80,
    height: 80,
    x: 10,
    y: 10,
  });
  const imgRef = useRef<HTMLImageElement>(null);
  const previewCanvasRef = useRef<HTMLCanvasElement>(null);

  // Generate crop preview whenever crop changes
  useEffect(() => {
    if (imgRef.current && crop.width && crop.height && showCropInterface) {
      generateCropPreview();
    }
  }, [crop, showCropInterface]);

  const generateCropPreview = async () => {
    if (!imgRef.current || !crop.width || !crop.height) return;

    try {
      const croppedImageUrl = await getCroppedImg(imgRef.current, crop);
      setCropPreview(croppedImageUrl);
    } catch (error) {
      console.error('Error generating crop preview:', error);
    }
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = async (e) => {
        const imageUrl = e.target?.result as string;
        setOriginalImage(imageUrl);
        
        // Auto-crop with default settings
        const img = new Image();
        img.onload = async () => {
          try {
            const defaultCrop = {
              unit: '%' as const,
              width: 80,
              height: 80,
              x: 10,
              y: 10,
            };
            const croppedImageUrl = await getCroppedImg(img, defaultCrop);
            setPhoto(croppedImageUrl);
          } catch (error) {
            console.error('Error auto-cropping image:', error);
          }
        };
        img.src = imageUrl;
      };
      reader.readAsDataURL(file);
    }
  };

  const getCroppedImg = (image: HTMLImageElement, crop: Crop): Promise<string> => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return Promise.reject('No 2d context');

    // Convert percentage-based crop to pixel values
    const pixelCrop = {
      x: (crop.x / 100) * image.naturalWidth,
      y: (crop.y / 100) * image.naturalHeight,
      width: (crop.width / 100) * image.naturalWidth,
      height: (crop.height / 100) * image.naturalHeight,
    };

    // Set canvas size to the crop size
    canvas.width = pixelCrop.width;
    canvas.height = pixelCrop.height;

    // Set canvas drawing settings
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';

    // Draw the cropped portion of the image onto the canvas
    ctx.drawImage(
      image,
      pixelCrop.x,
      pixelCrop.y,
      pixelCrop.width,
      pixelCrop.height,
      0,
      0,
      pixelCrop.width,
      pixelCrop.height
    );

    return new Promise((resolve) => {
      canvas.toBlob((blob) => {
        if (!blob) return;
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as string);
        reader.readAsDataURL(blob);
      }, 'image/jpeg', 0.95);
    });
  };

  const handleSaveCrop = async () => {
    if (imgRef.current && crop.width && crop.height) {
      try {
        const croppedImageUrl = await getCroppedImg(imgRef.current, crop);
        setPhoto(croppedImageUrl);
        setShowCropInterface(false);
      } catch (error) {
        console.error('Error cropping image:', error);
      }
    }
  };

  const handleEditImage = () => {
    if (originalImage) {
      setShowCropInterface(true);
    }
  };

  const handleCancelCrop = () => {
    setShowCropInterface(false);
    if (!photo) {
      setOriginalImage("");
    }
  };

  const downloadDP = async () => {
    const previewElement = document.querySelector('.dp-preview') as HTMLElement;
    if (!previewElement) return;

    try {
      // Use html2canvas to capture the preview element
      const { default: html2canvas } = await import('html2canvas');
      
      // Get the actual dimensions of the preview element
      const rect = previewElement.getBoundingClientRect();
      
      const canvas = await html2canvas(previewElement, {
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff',
        scale: 2, // Higher quality
        width: rect.width,
        height: rect.height,
        scrollX: 0,
        scrollY: 0,
      });

      // Convert canvas to blob and download
      canvas.toBlob((blob) => {
        if (!blob) return;
        
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `BuildWithAI-DP-${name || 'User'}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      }, 'image/png');
    } catch (error) {
      console.error('Error downloading DP:', error);
    }
  };

  // Check if all required fields are filled
  const isReadyToDownload = name.trim() !== "" && photo !== "";

  return (
    <div className="min-h-screen bg-background">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="mb-16 space-y-4 text-center animate-fade-in">
          <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl text-foreground bg-gradient-to-r from-slate-900 via-slate-900-600 to-slate-900-800 bg-clip-text">
            Join the AI Revolution
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Create your personalized BuildWithAI FUTMINNA 2025 profile picture and show the world you're ready to shape the future with AI
          </p>
        </div>

        {/* Main Content */}
        <div className="grid items-start gap-12 lg:grid-cols-2">
          {/* Form Section */}
          <div className="space-y-8">
            {/* Name Input */}
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium text-foreground">
                Name
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter name or nickname"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full"
              />
            </div>

            {/* Photo Upload */}
            <div className="space-y-2">
              <Label className="text-sm font-medium text-foreground">Photo</Label>
              {!originalImage ? (
                <div 
                  className="p-8 transition-colors border-2 border-dashed rounded-lg cursor-pointer border-border hover:border-primary/50 hover:bg-muted/30"
                  onClick={() => document.getElementById('photo-upload')?.click()}
                  onDragOver={(e) => {
                    e.preventDefault();
                    e.currentTarget.classList.add('border-primary', 'bg-muted/50');
                  }}
                  onDragLeave={(e) => {
                    e.preventDefault();
                    e.currentTarget.classList.remove('border-primary', 'bg-muted/50');
                  }}
                  onDrop={(e) => {
                    e.preventDefault();
                    e.currentTarget.classList.remove('border-primary', 'bg-muted/50');
                    const files = e.dataTransfer.files;
                    if (files.length > 0) {
                      const file = files[0];
                      if (file.type.startsWith('image/')) {
                        // Create a file reader and process the file directly
                        const reader = new FileReader();
                        reader.onload = async (e) => {
                          const imageUrl = e.target?.result as string;
                          setOriginalImage(imageUrl);
                          
                          // Auto-crop with default settings
                          const img = new Image();
                          img.onload = async () => {
                            try {
                              const defaultCrop = {
                                unit: '%' as const,
                                width: 80,
                                height: 80,
                                x: 10,
                                y: 10,
                              };
                              const croppedImageUrl = await getCroppedImg(img, defaultCrop);
                              setPhoto(croppedImageUrl);
                            } catch (error) {
                              console.error('Error auto-cropping image:', error);
                            }
                          };
                          img.src = imageUrl;
                        };
                        reader.readAsDataURL(file);
                      }
                    }
                  }}
                >
                  <div className="space-y-4 text-center">
                    <div className="w-12 h-12 mx-auto text-muted-foreground">
                      <Upload className="w-full h-full" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Drag and drop to upload or click to browse
                      </p>
                      <input
                        id="photo-upload"
                        type="file"
                        accept="image/*"
                        onChange={handleFileUpload}
                        className="hidden"
                      />
                    </div>
                  </div>
                </div>
              ) : showCropInterface ? (
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg border-border">
                    <div className="w-full">
                      <ReactCrop
                        crop={crop}
                        onChange={(_, percentCrop) => setCrop(percentCrop)}
                        aspect={1}
                        circularCrop
                      >
                        <img
                          ref={imgRef}
                          src={originalImage}
                          alt="Crop preview"
                          className="object-contain w-full h-auto"
                        />
                      </ReactCrop>
                    </div>
                  </div>
                  
                  {/* Crop Preview */}
                  {cropPreview && (
                    <div className="space-y-2">
                      <Label className="text-sm font-medium text-foreground">Preview</Label>
                      <div className="p-4 border rounded-lg border-border bg-muted/30">
                        <div className="flex justify-center">
                          <div className="w-32 h-32 overflow-hidden border-2 rounded-full border-primary">
                            <img
                              src={cropPreview}
                              alt="Cropped preview"
                              className="object-cover w-full h-full"
                            />
                          </div>
                        </div>
                        <p className="mt-2 text-xs text-center text-muted-foreground">
                          This is how your cropped image will look
                        </p>
                      </div>
                    </div>
                  )}
                  
                  <div className="flex gap-2">
                    <Button variant="outline" onClick={handleCancelCrop} className="flex-1">
                      Cancel
                    </Button>
                    <Button onClick={handleSaveCrop} className="flex-1 bg-slate-900 hover:bg-slate-900/90">
                      Save Cropped Image
                    </Button>
                  </div>
                  <input
                    id="photo-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="relative h-48 overflow-hidden border rounded-lg border-border">
                    <img
                      src={photo}
                      alt="Uploaded"
                      className="object-contain w-full h-full"
                    />
                    <button
                      onClick={handleEditImage}
                      className="absolute p-2 text-white transition-colors rounded-full top-2 right-2 bg-black/50 hover:bg-black/70"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                  </div>
                  <Button
                    variant="outline"
                    onClick={() => document.getElementById('photo-upload')?.click()}
                    className="w-full"
                  >
                    Change Photo
                  </Button>
                  <input
                    id="photo-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </div>
              )}
            </div>

            {/* Color Selection */}
            <div className="space-y-4">
              <Label className="text-sm font-medium text-foreground">
                Select preferred color
              </Label>
              <RadioGroup value={selectedColor} onValueChange={setSelectedColor}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="white" id="white" />
                  <Label htmlFor="white" className="text-sm font-medium cursor-pointer">
                    White
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="blue" id="blue" />
                  <Label htmlFor="blue" className="text-sm font-medium cursor-pointer">
                    Blue
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="green" id="green" />
                  <Label htmlFor="green" className="text-sm font-medium cursor-pointer">
                    Green
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              {/* Download Button */}
              {isReadyToDownload && (
                <Button 
                  onClick={downloadDP}
                  variant="outline" 
                  className="flex items-center w-full gap-2 py-6 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white"
                >
                  <Download className="w-5 h-5" />
                  Download DP
                </Button>
              )}
            </div>
          </div>

          {/* Preview Section */}
          <div className="lg:sticky lg:top-8">
            <DPPreview name={name} photo={photo} color={selectedColor} />
          </div>
        </div>

      </div>
    </div>
  );
};

export default DPGenerator;