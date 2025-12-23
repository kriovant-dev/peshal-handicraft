import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Upload, Send, Sparkles, CheckCircle } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

export default function CustomOrder() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    productType: '',
    colorPreference: '',
    quantity: 1,
    notes: '',
    contactMethod: 'whatsapp',
    contactInfo: '',
    referenceImage: null as File | null,
  });

  const productTypes = [
    'Crochet Bag',
    'Saree Tassels',
    'Macrame Wall Hanging',
    'Amigurumi Toy',
    'Crochet Decor',
    'Baby Items',
    'Other',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    toast({
      title: 'Request Submitted!',
      description: 'We will contact you within 24 hours to discuss your custom order.',
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({ ...formData, referenceImage: file });
    }
  };

  if (isSubmitted) {
    return (
      <Layout>
        <div className="min-h-[80vh] flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center max-w-md mx-auto px-4"
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-olive/20 flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-olive" />
            </div>
            <h1 className="font-display text-3xl font-semibold text-foreground mb-4">
              Request Submitted!
            </h1>
            <p className="text-muted-foreground mb-8">
              Thank you for your custom order request. Our team will review your requirements 
              and contact you within 24 hours to discuss the details.
            </p>
            <Button variant="hero" onClick={() => setIsSubmitted(false)}>
              Submit Another Request
            </Button>
          </motion.div>
        </div>
      </Layout>
    );
  }

  return (
    <>
      <Helmet>
        <title>Custom Order | Peshal Handicraft</title>
        <meta
          name="description"
          content="Have something special in mind? Submit your custom order request and our artisans will create a unique handmade piece just for you."
        />
      </Helmet>

      <Layout>
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-12"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-sm font-medium">Made Just For You</span>
                </div>
                <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
                  Place a Custom Order
                </h1>
                <p className="text-muted-foreground max-w-lg mx-auto">
                  Share your vision with us. We'll craft a unique, personalized piece exactly as you imagine it.
                </p>
              </motion.div>

              {/* Form */}
              <motion.form
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                onSubmit={handleSubmit}
                className="bg-card rounded-2xl border border-border p-6 md:p-8 space-y-6"
              >
                {/* Product Type */}
                <div>
                  <label className="text-sm font-medium mb-3 block">
                    What would you like us to make? *
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {productTypes.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setFormData({ ...formData, productType: type })}
                        className={`px-4 py-3 rounded-xl border text-sm transition-all ${
                          formData.productType === type
                            ? 'border-primary bg-primary/10 text-primary'
                            : 'border-border hover:border-primary/50'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Reference Image */}
                <div>
                  <label className="text-sm font-medium mb-3 block">
                    Reference Image (Optional)
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="hidden"
                      id="reference-image"
                    />
                    <label
                      htmlFor="reference-image"
                      className="flex items-center justify-center gap-3 px-6 py-8 rounded-xl border-2 border-dashed border-border hover:border-primary/50 cursor-pointer transition-colors"
                    >
                      <Upload className="w-6 h-6 text-muted-foreground" />
                      <span className="text-muted-foreground">
                        {formData.referenceImage
                          ? formData.referenceImage.name
                          : 'Click to upload a reference image'}
                      </span>
                    </label>
                  </div>
                </div>

                {/* Color Preference */}
                <div>
                  <label className="text-sm font-medium mb-3 block">
                    Color Preference *
                  </label>
                  <input
                    type="text"
                    value={formData.colorPreference}
                    onChange={(e) => setFormData({ ...formData, colorPreference: e.target.value })}
                    placeholder="e.g., Blush pink with cream accents"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                  />
                </div>

                {/* Quantity */}
                <div>
                  <label className="text-sm font-medium mb-3 block">
                    Quantity *
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: parseInt(e.target.value) || 1 })}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                  />
                </div>

                {/* Notes */}
                <div>
                  <label className="text-sm font-medium mb-3 block">
                    Additional Details
                  </label>
                  <textarea
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Tell us more about your requirements, preferred size, deadline, etc."
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none"
                  />
                </div>

                {/* Contact Method */}
                <div>
                  <label className="text-sm font-medium mb-3 block">
                    Preferred Contact Method *
                  </label>
                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, contactMethod: 'whatsapp' })}
                      className={`flex-1 px-4 py-3 rounded-xl border text-sm transition-all ${
                        formData.contactMethod === 'whatsapp'
                          ? 'border-primary bg-primary/10 text-primary'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      WhatsApp
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, contactMethod: 'email' })}
                      className={`flex-1 px-4 py-3 rounded-xl border text-sm transition-all ${
                        formData.contactMethod === 'email'
                          ? 'border-primary bg-primary/10 text-primary'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      Email
                    </button>
                  </div>
                </div>

                {/* Contact Info */}
                <div>
                  <label className="text-sm font-medium mb-3 block">
                    {formData.contactMethod === 'whatsapp' ? 'WhatsApp Number' : 'Email Address'} *
                  </label>
                  <input
                    type={formData.contactMethod === 'whatsapp' ? 'tel' : 'email'}
                    value={formData.contactInfo}
                    onChange={(e) => setFormData({ ...formData, contactInfo: e.target.value })}
                    placeholder={formData.contactMethod === 'whatsapp' ? '+91 98765 43210' : 'your@email.com'}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="hero"
                  size="xl"
                  className="w-full"
                  disabled={isSubmitting || !formData.productType || !formData.colorPreference || !formData.contactInfo}
                >
                  {isSubmitting ? (
                    'Submitting...'
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Submit Request
                    </>
                  )}
                </Button>
              </motion.form>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
