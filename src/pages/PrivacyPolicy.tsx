import { Link } from "react-router-dom";
import { Shield, Lock, Eye, FileText, Mail } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="w-16 h-16 mx-auto mb-6 text-primary animate-fade-in" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Privacy <span className="text-primary">Policy</span>
            </h1>
            <p className="text-lg text-muted-foreground animate-fade-in" style={{ animationDelay: "200ms" }}>
              Last updated: November 28, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              {/* Introduction */}
              <div className="mb-12 p-6 bg-card rounded-lg shadow-card">
                <div className="flex items-start space-x-4">
                  <Eye className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-card-foreground">Introduction</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      At AgniStack, we are committed to protecting your privacy and ensuring the security of your personal information. 
                      This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our 
                      website or use our services.
                    </p>
                  </div>
                </div>
              </div>

              {/* Information We Collect */}
              <div className="mb-12 p-6 bg-card rounded-lg shadow-card">
                <div className="flex items-start space-x-4">
                  <FileText className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-card-foreground">Information We Collect</h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-foreground">Personal Information</h3>
                        <p className="text-muted-foreground leading-relaxed mb-2">
                          We may collect personal information that you voluntarily provide to us when you:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                          <li>Fill out contact forms on our website</li>
                          <li>Request a quote or consultation</li>
                          <li>Subscribe to our newsletter</li>
                          <li>Engage with our services</li>
                        </ul>
                        <p className="text-muted-foreground leading-relaxed mt-2">
                          This information may include: name, email address, phone number, company name, project details, and any other 
                          information you choose to provide.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-foreground">Automatic Information</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          When you visit our website, we may automatically collect certain information about your device, including 
                          information about your web browser, IP address, time zone, and some of the cookies installed on your device. 
                          We may also collect information about your browsing behavior and interactions with our website.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* How We Use Your Information */}
              <div className="mb-12 p-6 bg-card rounded-lg shadow-card">
                <div className="flex items-start space-x-4">
                  <Lock className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-card-foreground">How We Use Your Information</h2>
                    <p className="text-muted-foreground leading-relaxed mb-2">
                      We use the information we collect to:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                      <li>Respond to your inquiries and provide customer support</li>
                      <li>Send you information about our services and updates</li>
                      <li>Improve our website and services</li>
                      <li>Analyze website usage and trends</li>
                      <li>Prevent fraud and enhance security</li>
                      <li>Comply with legal obligations</li>
                      <li>Send marketing communications (with your consent)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Information Sharing */}
              <div className="mb-12 p-6 bg-card rounded-lg shadow-card">
                <h2 className="text-2xl font-bold mb-4 text-card-foreground">Information Sharing and Disclosure</h2>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information only in the 
                  following circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li><strong>Service Providers:</strong> We may share information with third-party service providers who perform 
                  services on our behalf, such as email delivery, hosting services, and analytics.</li>
                  <li><strong>Legal Requirements:</strong> We may disclose your information if required by law or in response to valid 
                  legal requests.</li>
                  <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information 
                  may be transferred as part of that transaction.</li>
                  <li><strong>With Your Consent:</strong> We may share your information with your explicit consent for specific purposes.</li>
                </ul>
              </div>

              {/* Data Security */}
              <div className="mb-12 p-6 bg-card rounded-lg shadow-card">
                <h2 className="text-2xl font-bold mb-4 text-card-foreground">Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your personal information against 
                  unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or 
                  electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>

              {/* Your Rights */}
              <div className="mb-12 p-6 bg-card rounded-lg shadow-card">
                <h2 className="text-2xl font-bold mb-4 text-card-foreground">Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  Depending on your location, you may have certain rights regarding your personal information, including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>The right to access your personal information</li>
                  <li>The right to correct inaccurate information</li>
                  <li>The right to delete your personal information</li>
                  <li>The right to restrict processing of your information</li>
                  <li>The right to data portability</li>
                  <li>The right to opt-out of marketing communications</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-2">
                  To exercise any of these rights, please contact us using the information provided below.
                </p>
              </div>

              {/* Cookies */}
              <div className="mb-12 p-6 bg-card rounded-lg shadow-card">
                <h2 className="text-2xl font-bold mb-4 text-card-foreground">Cookies and Tracking Technologies</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We use cookies and similar tracking technologies to track activity on our website and store certain information. 
                  You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do 
                  not accept cookies, you may not be able to use some portions of our website.
                </p>
              </div>

              {/* Third-Party Links */}
              <div className="mb-12 p-6 bg-card rounded-lg shadow-card">
                <h2 className="text-2xl font-bold mb-4 text-card-foreground">Third-Party Links</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our website may contain links to third-party websites that are not operated by us. We are not responsible for the 
                  privacy practices of these third-party sites. We encourage you to review the privacy policy of every site you visit.
                </p>
              </div>

              {/* Children's Privacy */}
              <div className="mb-12 p-6 bg-card rounded-lg shadow-card">
                <h2 className="text-2xl font-bold mb-4 text-card-foreground">Children's Privacy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information 
                  from children. If you become aware that a child has provided us with personal information, please contact us, and 
                  we will take steps to delete such information.
                </p>
              </div>

              {/* Changes to Privacy Policy */}
              <div className="mb-12 p-6 bg-card rounded-lg shadow-card">
                <h2 className="text-2xl font-bold mb-4 text-card-foreground">Changes to This Privacy Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy 
                  Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically 
                  for any changes.
                </p>
              </div>

              {/* Contact Us */}
              <div className="p-6 bg-gradient-primary text-primary-foreground rounded-lg">
                <div className="flex items-start space-x-4">
                  <Mail className="w-8 h-8 flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                    <p className="mb-4 leading-relaxed">
                      If you have any questions about this Privacy Policy or our privacy practices, please contact us:
                    </p>
                    <div className="space-y-2">
                      <p><strong>Email:</strong> agnistack28@gmail.com</p>
                      <p><strong>Phone:</strong> 7024292825</p>
                      <p className="mt-4">
                        <Link to="/contact" className="underline hover:text-secondary transition-colors">
                          Visit our Contact Page
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
