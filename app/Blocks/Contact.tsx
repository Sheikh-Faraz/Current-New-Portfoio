// "use client";

// import Image from "next/image";

// import { motion } from "framer-motion";


// import { Card, CardContent } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Button } from "@/components/ui/button";


// // Blocks
// import { Reveal } from "@/app/Animations/Reveal";

// // Images
// import PhoneIllustrationImage from "@/public/Illustrations-Images/Contact-Phone-Img.png";


// export default function Contact() {
//   return (
//     <section className="w-full py-20 px-4 flex justify-center bg-[#FE6E26]" id="contact">
//       <Card className="w-full max-w-6xl py-10 h-fit overflow-hiddenborder-0 rounded-2xl shadow-xl bg-transparent">
//         <div className="grid md:grid-cols-2">

//           {/* LEFT IMAGE */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 0.7 }}
//             viewport={{ once: true }}
//             className="h-full relative"
//           >
//             <Image
//               src={PhoneIllustrationImage}
//               alt="Contact"
//               fill
//               className="object-cover"
//             />
//           </motion.div>

//           {/* RIGHT FORM */}
//             <CardContent className="p-8 flex flex-col justify-center min-h-full my-5">
//               <Reveal overlayDirection="left" width="100%">
//               <h2 className="text-3xl font-semibold mb-6 text-white font-caveat">
//                 GET IN TOUCH
//               </h2>
//               </Reveal>

//               <motion.div
//                 // initial={{ opacity: 0, x: 80 }}
//                 initial={{ opacity: 0 }}
//                 // whileInView={{ opacity: 1, x: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 transition={{ duration: 0.7, delay: 0.2 }}
//                 viewport={{ once: true }}
//                 className="bg-[#FE6E26] text-white"
//               >
//               <form className="space-y-4">

//                 {/* INPUTS */}
//                 <Input
//                   type="text"
//                   placeholder="Your Name"
//                   required
//                   className="bg-white/10 border-white/20 text-white placeholder:text-white/70 focus-visible:ring-white"
//                 />

//                 <Input
//                   type="email"
//                   placeholder="Your Email"
//                   required
//                   className="bg-white/10 border-white/20 text-white placeholder:text-white/70 focus-visible:ring-white"
//                 />

//                 <Textarea
//                   placeholder="Your Message"
//                   rows={5}
//                   required
//                   className="bg-white/10 border-white/20 text-white placeholder:text-white/70 focus-visible:ring-white"
//                 />

//                 {/* BUTTON */}
//                 <motion.div
//                   whileHover={{ scale: 1.03 }}
//                   whileTap={{ scale: 0.97 }}
//                 >
//                   <Button
//                     type="submit"
//                     className="w-full bg-white text-[#FE6E26] hover:bg-white/90"
//                   >
//                     Send Message
//                   </Button>
//                 </motion.div>

//               </form>
//               </motion.div>
//             </CardContent>

//         </div>
//       </Card>
//     </section>
//   );
// }





"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import toast from "react-hot-toast";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

// Blocks
import { Reveal } from "@/app/Animations/Reveal";

// Images
import PhoneIllustrationImage from "@/public/Illustrations-Images/Contact-Phone-Img.png";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const promise = fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(formData),
    });

    toast.promise(promise, {
      loading: "Sending message...",
      success: "Message successfully 🚀",
      error: "Something went wrong ❌",
    });

    try {
      const res = await promise;

      if (!res.ok) throw new Error("Failed");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="w-full py-20 px-4 flex justify-center bg-[#FE6E26]"
      id="contact"
    >
      <Card className="w-full max-w-6xl py-10 h-fit overflow-hidden border-0 rounded-2xl shadow-xl bg-transparent">
        <div className="grid md:grid-cols-2">
          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="h-full relative"
          >
            <Image
              src={PhoneIllustrationImage}
              alt="Contact"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* RIGHT FORM */}
          <CardContent className="p-8 flex flex-col justify-center min-h-full my-5">
            <Reveal overlayDirection="left" width="100%">
              <h2 className="text-3xl font-semibold mb-6 text-white font-caveat">
                GET IN TOUCH
              </h2>
            </Reveal>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-[#FE6E26] text-white"
            >
              <form className="space-y-4" onSubmit={handleSubmit}>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/70 focus-visible:ring-white"
                />

                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/70 focus-visible:ring-white"
                />

                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows={5}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/70 focus-visible:ring-white"
                />

                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-white text-[#FE6E26] hover:bg-white/90"
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          </CardContent>
        </div>
      </Card>
    </section>
  );
}
