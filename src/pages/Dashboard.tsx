import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Upload, History, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedFile) {
      console.log("File submitted:", selectedFile);
    }
  };

  return (
    <div>
      <nav className="border-b">
        <div className="flex h-16 items-center px-4 container mx-auto">
          <Link 
            to="/" 
            className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </nav>

      <div className="container mx-auto p-6">
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <History className="h-5 w-5" />
                Chat History
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">No chat history yet</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="h-5 w-5" />
                Upload File
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Input
                    type="file"
                    accept=".doc,.docx,.png,.jpg,.jpeg"
                    onChange={handleFileChange}
                  />
                  <p className="text-sm text-muted-foreground">
                    Supported formats: Word documents and images
                  </p>
                </div>
                <Button type="submit" disabled={!selectedFile}>
                  Submit
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;