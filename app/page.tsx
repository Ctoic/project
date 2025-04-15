"use client";

import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image"; // Import Next.js image component
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.main
      className="min-h-screen bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left Column - Text Content */}
          <motion.div
            className="w-full md:w-1/2"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-4xl font-bold mb-4">Hi, I'm Asim Ali Abbas</h1>
            <p className="text-xl text-muted-foreground mb-6">
              A passionate Class 12 student with aspirations in Computer Science
            </p>
            <p className="mb-6">
              I'm dedicated to academic excellence and personal growth, with a keen interest in Computer Science. Through my journey, I've developed strong leadership skills and a drive for innovation.
            </p>
            <div className="flex gap-4">
              <Button asChild>
                <Link href="/contact" className="flex items-center">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Me
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="https://github.com" className="flex items-center">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="https://linkedin.com" className="flex items-center">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div
            className="w-full md:w-1/2"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src="/images/profile.png" // Ensure the image is in the public/images folder
                alt="Profile"
                width={400} // Adjust width accordingly
                height={400} // Adjust height accordingly
                className="rounded-lg shadow-lg w-full"
                priority // Optimized loading
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Animated Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-2">Academic Excellence</h3>
              <p className="text-muted-foreground">
                Consistently maintaining top grades with a focus on Programming and Mathematics with keeping myself updated with latest News in Field of Artificial Inteligence. 
              </p>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-2">Leadership</h3>
              <p className="text-muted-foreground">
                Active participation in student council and organizing school events
              </p>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-2">Extracurricular</h3>
              <p className="text-muted-foreground">
                Balancing academics with sports and cultural activities
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.main>
  );
}
