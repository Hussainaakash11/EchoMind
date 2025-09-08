import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { 
  Upload as UploadIcon, 
  File, 
  X, 
  CheckCircle, 
  AlertCircle,
  Mic,
  Clock,
  FileAudio
} from "lucide-react";

const Upload = () => {
  const [dragActive, setDragActive] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    const droppedFiles = Array.from(e.dataTransfer.files);
    const audioFiles = droppedFiles.filter(file => 
      file.type.startsWith('audio/') || file.name.endsWith('.mp3')
    );
    
    if (audioFiles.length === 0) {
      toast({
        title: "Invalid file type",
        description: "Please upload MP3 or other audio files only.",
        variant: "destructive"
      });
      return;
    }
    
    setFiles(audioFiles);
  }, [toast]);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      setFiles(selectedFiles);
    }
  };

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const simulateUpload = async () => {
    setUploading(true);
    setProgress(0);
    
    // Simulate upload progress
    for (let i = 0; i <= 100; i += 10) {
      setProgress(i);
      await new Promise(resolve => setTimeout(resolve, 200));
    }
    
    toast({
      title: "Upload successful!",
      description: "Your audio files have been processed successfully.",
    });
    
    // Redirect to results page after upload
    setTimeout(() => {
      navigate('/analysis');
    }, 1000);
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="min-h-screen bg-gradient-subtle py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="p-4 bg-gradient-hero rounded-2xl">
              <Mic className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold gradient-text mb-4">Upload Your Audio</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Upload your MP3 files and let our AI analyze conversations, extract insights, 
            and generate comprehensive reports.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Upload Area */}
          <div className="lg:col-span-2">
            <Card className="card-elevated">
              <div
                className={`upload-zone ${dragActive ? 'upload-zone-active' : ''}`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <div className="flex flex-col items-center space-y-4">
                  <div className="p-6 bg-primary/10 rounded-full">
                    <UploadIcon className="h-12 w-12 text-primary" />
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-lg font-semibold mb-2">
                      Drop your audio files here
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      or click to browse from your device
                    </p>
                    
                    <input
                      type="file"
                      multiple
                      accept="audio/*,.mp3"
                      onChange={handleFileSelect}
                      className="hidden"
                      id="file-upload"
                    />
                    <label htmlFor="file-upload">
                      <Button variant="outline" className="cursor-pointer">
                        <File className="mr-2 h-4 w-4" />
                        Browse Files
                      </Button>
                    </label>
                  </div>
                  
                  <p className="text-sm text-muted-foreground">
                    Supported formats: MP3, WAV, M4A • Max size: 100MB per file
                  </p>
                </div>
              </div>

              {/* Upload Progress */}
              {uploading && (
                <div className="mt-6 p-4 bg-secondary/50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Processing...</span>
                    <span className="text-sm text-muted-foreground">{progress}%</span>
                  </div>
                  <Progress value={progress} className="mb-2" />
                  <p className="text-xs text-muted-foreground">
                    Analyzing audio and generating insights
                  </p>
                </div>
              )}
            </Card>
          </div>

          {/* File List & Info */}
          <div className="space-y-6">
            {/* File List */}
            {files.length > 0 && (
              <Card className="card-gradient">
                <h3 className="font-semibold mb-4 flex items-center">
                  <FileAudio className="mr-2 h-4 w-4" />
                  Selected Files ({files.length})
                </h3>
                
                <div className="space-y-3 max-h-64 overflow-y-auto">
                  {files.map((file, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-background rounded-lg border border-border">
                      <div className="flex items-center space-x-3 flex-1 min-w-0">
                        <FileAudio className="h-4 w-4 text-primary flex-shrink-0" />
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-medium truncate">{file.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {formatFileSize(file.size)}
                          </p>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeFile(index)}
                        className="flex-shrink-0 h-8 w-8"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>

                <Button 
                  onClick={simulateUpload}
                  disabled={uploading}
                  className="btn-hero w-full mt-4"
                >
                  {uploading ? (
                    <>
                      <Clock className="mr-2 h-4 w-4 animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <CheckCircle className="mr-2 h-4 w-4" />
                      Analyze Audio
                    </>
                  )}
                </Button>
              </Card>
            )}

            {/* Info Card */}
            <Card className="card-gradient">
              <h3 className="font-semibold mb-4 flex items-center">
                <AlertCircle className="mr-2 h-4 w-4" />
                What happens next?
              </h3>
              
              <div className="space-y-3 text-sm">
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p>AI transcribes your audio with speaker identification</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p>Sentiment analysis reveals conversation tone and emotions</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p>Generate comprehensive insights and summary reports</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p>Download detailed analysis in PDF format</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;