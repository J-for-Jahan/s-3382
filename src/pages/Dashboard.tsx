import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Upload, History, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Dashboard = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    productName: "",
    keyFeatures: "",
    specifications: "",
    targetAudience: "",
    productBenefits: "",
    useCase: "",
    priceRange: "",
    uniqueSellingProposition: "",
    brandInformation: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (!file.type.startsWith('image/')) {
        toast({
          title: "Invalid file type",
          description: "Please upload only image files",
          variant: "destructive"
        });
        e.target.value = '';
        return;
      }
      setSelectedFile(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedFile) {
      toast({
        title: "Missing image",
        description: "Please upload at least one product image",
        variant: "destructive"
      });
      return;
    }
    console.log("Form submitted:", { formData, selectedFile });
    // Here you would typically send the data to your backend
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
                Product Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="productName">Product Name</Label>
                    <Input
                      id="productName"
                      name="productName"
                      placeholder="e.g., Wireless Noise-Canceling Headphones"
                      value={formData.productName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="keyFeatures">Key Features</Label>
                    <Textarea
                      id="keyFeatures"
                      name="keyFeatures"
                      placeholder="List the main features (e.g., Bluetooth 5.0, Active Noise Cancellation)"
                      value={formData.keyFeatures}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="specifications">Specifications</Label>
                    <Textarea
                      id="specifications"
                      name="specifications"
                      placeholder="Technical details (e.g., Weight, Dimensions, Materials)"
                      value={formData.specifications}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="targetAudience">Target Audience</Label>
                    <Input
                      id="targetAudience"
                      name="targetAudience"
                      placeholder="Who is this product for?"
                      value={formData.targetAudience}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="productBenefits">Product Benefits</Label>
                    <Textarea
                      id="productBenefits"
                      name="productBenefits"
                      placeholder="How does it solve problems or meet needs?"
                      value={formData.productBenefits}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="useCase">Use Case</Label>
                    <Textarea
                      id="useCase"
                      name="useCase"
                      placeholder="Where and how can the product be used?"
                      value={formData.useCase}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="priceRange">Price Range</Label>
                    <Input
                      id="priceRange"
                      name="priceRange"
                      placeholder="e.g., $299-$399"
                      value={formData.priceRange}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="uniqueSellingProposition">Unique Selling Proposition</Label>
                    <Input
                      id="uniqueSellingProposition"
                      name="uniqueSellingProposition"
                      placeholder="What makes this product stand out?"
                      value={formData.uniqueSellingProposition}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="brandInformation">Brand Information (Optional)</Label>
                    <Input
                      id="brandInformation"
                      name="brandInformation"
                      placeholder="Information about the brand"
                      value={formData.brandInformation}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="productImages">Product Images</Label>
                    <Input
                      id="productImages"
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      required
                    />
                    <p className="text-sm text-muted-foreground">
                      Upload clear images showing different angles of the product
                    </p>
                  </div>
                </div>

                <Button type="submit" className="w-full">
                  Submit Product Information
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