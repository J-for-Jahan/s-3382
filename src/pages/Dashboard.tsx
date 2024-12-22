import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Upload, History, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { saveAs } from 'file-saver';

// Debug log to check if env variable is loaded
console.log('API Key exists:', !!import.meta.env.VITE_GOOGLE_API_KEY);

// Initialize the API
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GOOGLE_API_KEY);

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
    brandInformation: "",
  });

  const [aiResponse, setAiResponse] = useState(""); // AI-generated response
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (!file.type.startsWith("image/")) {
        toast({
          title: "Invalid file type",
          description: "Please upload only image files",
          variant: "destructive",
        });
        e.target.value = "";
        return;
      }
      setSelectedFile(file);
    }
  };

  // ... existing code ...

const generateDescription = async (prompt: string) => {
  try {
    setLoading(true);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    
    // Convert the form data into a proper prompt
    const result = await model.generateContent(prompt);
    const generatedText = result.response.text();
    
    // Download functionality
    const formattedContent = `
Product Description
------------------
${generatedText}
    `;
    
    const blob = new Blob([formattedContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const downloadLink = document.createElement('a');
    downloadLink.href = url;
    downloadLink.download = 'product-description.txt';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    URL.revokeObjectURL(url);

    return generatedText;
  } catch (error) {
    console.error("Generation error:", error);
    throw error; // This will be caught by your error handling
  } finally {
    setLoading(false);
  }
};

// ... rest of the code

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!selectedFile) {
      toast({
        title: "Missing image",
        description: "Please upload at least one product image",
        variant: "destructive",
      });
      setLoading(false);
      return;
    }

    try {
      const prompt = `
      Create an SEO-optimized product description for eCommerce:
      - Product Name: ${formData.productName}
      - Key Features: ${formData.keyFeatures}
      - Specifications: ${formData.specifications}
      - Target Audience: ${formData.targetAudience}
      - Product Benefits: ${formData.productBenefits}
      - Use Case: ${formData.useCase}
      - Price Range: ${formData.priceRange}
      - Unique Selling Proposition: ${formData.uniqueSellingProposition}
      - Brand Information: ${formData.brandInformation}

      Include engaging content, bullet points, and SEO keywords.
      `;

      const aiResponse = await generateDescription(prompt);
      setAiResponse(aiResponse);

      toast({
        title: "Success",
        description: "Product description generated!",
      });
    } catch (error) {
      console.error("Detailed error:", error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to generate product description",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <nav className="border-b">
        <div className="flex h-16 items-center px-4 container mx-auto">
          <Link to="/" className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </nav>

      <div className="container mx-auto p-6">
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
                {Object.keys(formData).map((key) => (
                  <div key={key} className="space-y-2">
                    <Label htmlFor={key}>{key.replace(/([A-Z])/g, " $1").trim()}</Label>
                    {key === "productBenefits" || key === "useCase" || key === "keyFeatures" || key === "specifications" ? (
                      <Textarea
                        id={key}
                        name={key}
                        placeholder={`Enter ${key.replace(/([A-Z])/g, " $1").trim()}`}
                        value={formData[key as keyof typeof formData]}
                        onChange={handleInputChange}
                        required
                      />
                    ) : (
                      <Input
                        id={key}
                        name={key}
                        placeholder={`Enter ${key.replace(/([A-Z])/g, " $1").trim()}`}
                        value={formData[key as keyof typeof formData]}
                        onChange={handleInputChange}
                        required
                      />
                    )}
                  </div>
                ))}

                <div className="space-y-2">
                  <Label htmlFor="productImages">Product Images</Label>
                  <Input id="productImages" type="file" accept="image/*" onChange={handleFileChange} required />
                </div>
              </div>

              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Generating..." : "Submit Product Information"}
              </Button>
            </form>

            <div data-results-container className="mt-4">
              {aiResponse && (
                <div className="mt-6 p-4 border rounded-lg bg-gray-100">
                  <h3 className="font-bold mb-2">Generated Product Description:</h3>
                  <p>{aiResponse}</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
