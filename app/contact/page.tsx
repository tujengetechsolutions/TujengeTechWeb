'use client'
import Navbar from "@/components/ui/Navbar";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import { FaTwitter, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa6";
import { useState, useRef } from "react";
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import Link from "next/link";
import { useForm, FieldErrors} from "react-hook-form";
import { contactSchema, contactInfer } from "@/lib/validation/Contact";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactAction } from "@/lib/actions/contactAction";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import axios from "axios";
import HCaptcha from "@hcaptcha/react-hcaptcha";


export default function ContactPage (){
    const [dialCode, setDialCode] = useState<string | undefined>('');
    const [serverError, setServerError] = useState<string>('');

      const captchaRef = useRef<HCaptcha>(null);

     const router = useRouter();

    const DEFAULT_VALUES = {
    name:    "",
    email:   "",
    phone:   "",
    company: "",
    inquiry: "",
    message: "",
    };

     const { register, handleSubmit, setValue, reset, clearErrors, formState:{errors, isSubmitting, touchedFields} }= useForm<contactInfer>({
        resolver: zodResolver(contactSchema), // pass to zod for validation
        mode: "onTouched",
        defaultValues: DEFAULT_VALUES
     })

const onSubmit = async (data: contactInfer) => {
    const captchaToken = captchaRef.current?.getResponse();
    if (!captchaToken) {
      toast.error("Please complete the captcha.");
      return;
    }
  console.log(data);

  const result= await ContactAction(data)

   const { name, email, phone, company, inquiry, message }=data

    try{
        const response = await axios.post('https://api.web3forms.com/submit', 
        {
         access_key : process.env.NEXT_PUBLIC_WEB3FORMS_API_KEY,
         subject:    `New Inquiry: ${inquiry} — ${name}`,
         from_name:  "TujengeTech Tech Solutions",
         replyto:    email,
         name,
         email,
         phone:   phone ,
         company: company ?? "—",
         inquiry,
         message,
        "h-captcha-response": captchaToken, 
        },
        {
            headers:{ "Content-Type": "application/json" }
        }
    )
    if(response.data.success){
      setValue("name", "");
        setValue("email", "");
        setValue("phone", "");
      setValue("company", "");
       setValue("inquiry", "");
      setValue("message", "");

    clearErrors();

    setDialCode('');
     captchaRef.current?.resetCaptcha(); 

  router.push("contact/success");
  }else{
    toast.error("Email delivery failed. Please try again.")
    captchaRef.current?.resetCaptcha();
  }
  }catch(err: unknown){
    if(axios.isAxiosError(err)){
        console.error("Axios error:", err.response?.data);
          toast.error("Email delivery failed. Please try again.");
    }
     toast.error("Unexpected error. Please try again.");
}
captchaRef.current?.resetCaptcha();
}

const SOCIALS = [
  { href: "#", icon: FaLinkedin,  label: "LinkedIn"  },
  { href: "#", icon: FaTwitter,   label: "Twitter"   },
  { href: "#", icon: FaInstagram, label: "Instagram" },
  { href: "#", icon: FaTiktok,    label: "TikTok"    },
];
const CONTACT_INFO = [
    {icon: Mail, label: "Email",value: "tujengetechsolutions@gmail.com" },
    {icon: Phone,label: "Phone",value: "+254 763 032 344"},
    {icon: MapPin,label: "Location", value: "Nairobi · Remote Worldwide"},
];
    return(
        <>
         <Navbar />

          <section className="relative overflow-hidden pb-16 pt-36 md:pb-24 md:pt-44">
            <div className="absolute inset-0 grid-bg opacity-50"></div>
            <div className="relative mx-auto max-w-5xl px-5 text-center md:px-8">
                <h1 className="animate-fade-in-up mt-5 text-4xl font-display font-bold tracking-tight md:text-6xl">
                    Let's build <span className="text-gradient-accent">something great</span>
                </h1>
                <p className="animate-fade-in-up mx-auto mt-5 max-w-2xl text-base text-muted-foreground md:text-lg nimation-delay:130ms">
                    Tell us about your project.We typically respond within one business day.
                </p>
            </div>
          </section>
         {/* contsct form */}
          <section className="px-5 pb-20 md:px-8 md:pb-28 bg-background">
            <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.3fr_1fr]">
               <form onSubmit={handleSubmit(onSubmit, (errors: FieldErrors<contactInfer>)=>console.log('validate', errors))} className="rounded-3xl border border-border bg-card p-7 shadow-2xl md:p-10">
                {/* Name */}
                <div className="grid gap-5 sm:grid-cols-2">
                    <div className="grid gap-2">
                    <label htmlFor="name" className="text-sm font-medium leading-none">
                        Your Name
                    </label>
                    <input
                        id="name"
                        required
                        placeholder="Your full name"
                        className="input-base"
                        autoComplete="name"
                        {...register('name')}
                    />
                    {touchedFields.name && errors.name && (
                        <p className="text-xs text-destructive">{errors.name.message}</p>
                    )}
                    </div>
                  {/* email */}
                    <div className="grid gap-2">
                    <label htmlFor="email" className="text-sm font-medium leading-none">
                        Your Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        required
                        placeholder="you@company.com"
                        className="input-base"
                        autoComplete="email"
                        {...register('email')}
                    />
                     {touchedFields.email && errors.email && (
                        <p className="text-xs text-destructive">{errors.email.message}</p>
                    )}
                    </div>
                    {/* phone number */}
                    <div className="grid gap-2">
                    <label htmlFor="phone" className="text-sm font-medium leading-non">
                        Your Phone
                    </label>
                    <PhoneInput
                        id="phone"
                        international          
                        defaultCountry="KE"    
                        countryCallingCodeEditable={false} 
                        value={dialCode}
                        autoComplete="phone"
                        onChange={(value)=>{
                            setDialCode(value)
                            setValue('phone', value ?? '', { shouldValidate: true })
                        }}
                        placeholder="Enter Phone Number"
                        required

                    />
                     {touchedFields.phone && errors.phone && (
                        <p className="text-xs text-destructive">{errors.phone.message}</p>
                    )}
                    </div>
            
                    <div className="grid gap-2">
                    <label htmlFor="company" className="text-sm font-medium leading-none">
                        Your Company
                    </label>
                    <input
                        id="company"
                        placeholder="Company name"
                        className="input-base"
                        autoComplete="company"
                         {...register("company")}
                    />
                     {touchedFields.company && errors.company && (
                        <p className="text-xs text-destructive">{errors.company.message}</p>
                    )}
                    </div>
            
                </div>
                {/* dropdown */}
                <div className="grid gap-2 mt-6">
                    <label
                        htmlFor="inquiry"
                        className="text-sm font-medium leading-none">
                        What are you inquiring about?
                    </label>
                    <select
                        id="inquiry"
                        required
                        defaultValue=''
                        className="input-base appearance-auto"
                         {...register("inquiry")}
                    >
                        <option value="" disabled>Select a service…</option>
                        <option value="mobile-app">Mobile App Development</option>
                        <option value="cloud-solutions">Cloud Solutions</option>
                        <option value="ai-ml">AI & ML</option>
                        <option value="software-development">Software Development</option>
                        <option value="digital-transformation">Digital Transformation</option>
                        <option value="other">Other</option>
                    </select>
                    {touchedFields.inquiry && errors.inquiry && (
                        <p className="text-xs text-destructive">{errors.inquiry.message}</p>
                    )}
                    </div>
            
                {/* Message */}
                <div className="mt-5 grid gap-2">
                    <label htmlFor="message" className="text-sm font-medium leading-none">
                    Your Message
                    </label>
                    <textarea
                    id="message"
                    required
                    rows={6}
                    placeholder="Tell us about your project, goals, and timeline…"
                    className="message-input"
                    autoComplete="off"
                    {...register("message")}
                    />
                     {touchedFields.message && errors.message && (
                        <p className="text-xs text-destructive">{errors.message.message}</p>
                    )}
                </div>

                 <div className="mt-5">
                <HCaptcha
                    sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"  
                    reCaptchaCompat={false}
                    ref={captchaRef}
                    onVerify={(token) => setValue("h-captcha-response", token)}
                />
                </div>
            
                {/* Submit */}
                <button type="submit" className="contact-btn" disabled={isSubmitting}>
                     {isSubmitting ? "Sending…" : "Send Inquiry"}
                    <Send className="ml-1 h-4 w-4" aria-hidden="true" />
                </button>
            
                </form>

                <aside className="space-y-4">

                {CONTACT_INFO.map(({icon: Icon, label, value}) => (
                 <div key={label} className="card-contact">
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                        {label}
                        </p>
                        <p className="truncate text-sm font-medium mt-1">
                          {value}
                        </p>
                    </div>

                    </div>
                 ))}
                     
                 <div className="rounded-2xl border border-border bg-card p-5 shadow-2xl">
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                        Follow us
                    </p>
                    <div className="mt-3 flex gap-2">
                       {SOCIALS.map(({ href, icon: Icon, label }) => (
                        <Link
                            key={label}
                            href={href}
                            aria-label={label}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-links"
                        >
                            <Icon className="h-4 w-4" aria-hidden="true" />
                        </Link>
                        ))}
                    </div>
                    </div>

                     <div className="bg-gradient-hero relative h-48 overflow-hidden rounded-2xl">
                        <div className="absolute inset-0 grid-bg opacity-30" />
                        <div className="absolute inset-0 flex items-center justify-center text-white">
                        <div className="text-center">
                            <MapPin className="mx-auto h-6 w-6 text-accent" aria-hidden="true" />
                            <p className="mt-2 font-display text-lg font-semibold">Nairobi, Kenya</p>
                            <p className="text-xs text-white/70">Serving partners worldwide</p>
                        </div>
                        </div>
                    </div>
                </aside>
            </div>
          </section>
        </>
    )
}