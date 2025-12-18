import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-6 lg:px-12 bg-card/50">
      <h2 className="text-3xl font-bold text-foreground mb-4 text-center">
        تواصل معي
      </h2>
      <p className="text-center text-muted-foreground mb-12">
        لا تحب النماذج؟ أرسل لي{" "}
        <a href="mailto:name@example.com" className="text-primary hover:underline">
          بريداً إلكترونياً
        </a>
        . 👋
      </p>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-card rounded-2xl p-8">
          <h3 className="text-xl font-semibold text-foreground mb-6">
            دعنا نتحدث عن كل شيء!
          </h3>
          <form className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <Input
                placeholder="اسمك"
                className="bg-secondary border-0 h-12"
              />
              <Input
                type="email"
                placeholder="البريد الإلكتروني"
                className="bg-secondary border-0 h-12"
              />
            </div>
            <Input
              placeholder="الموضوع"
              className="bg-secondary border-0 h-12"
            />
            <Textarea
              placeholder="الرسالة"
              className="bg-secondary border-0 min-h-[150px] resize-none"
            />
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 rounded-full">
              إرسال الرسالة
            </Button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <div className="bg-card rounded-2xl p-6 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Phone className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-1">الهاتف</h4>
              <p className="text-muted-foreground">+966 123 456 789</p>
            </div>
          </div>

          <div className="bg-card rounded-2xl p-6 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-1">البريد الإلكتروني</h4>
              <p className="text-muted-foreground">hello@example.com</p>
            </div>
          </div>

          <div className="bg-card rounded-2xl p-6 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-1">العنوان</h4>
              <p className="text-muted-foreground">الرياض، المملكة العربية السعودية</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};