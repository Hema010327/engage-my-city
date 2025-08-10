import { MapPin, Mail, Phone, Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-subtle border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-hero rounded-lg shadow-civic">
                <MapPin className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Talk to City</h3>
                <p className="text-xs text-muted-foreground">CMC Engagement</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Connecting citizens with their City Municipal Corporation for better civic engagement and transparent governance.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Report Issue</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Track Complaints</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Emergency Services</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">City Services</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>contact@talktocity.gov</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+91 1800-CMC-HELP</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>CMC Building, City Center</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Follow Us</h4>
            <div className="flex space-x-3">
              <a href="#" className="p-2 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors">
                <Facebook className="h-4 w-4 text-primary" />
              </a>
              <a href="#" className="p-2 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors">
                <Twitter className="h-4 w-4 text-primary" />
              </a>
              <a href="#" className="p-2 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors">
                <Instagram className="h-4 w-4 text-primary" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Talk to City - City Municipal Corporation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;