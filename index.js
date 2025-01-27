import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem } from "@/components/ui/select";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Section */}
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Internship Platform</h1>
          <nav className="flex space-x-4">
            <a href="#about" className="hover:underline">About Us</a>
            <a href="#contact" className="hover:underline">Contact Us</a>
            <Button className="bg-white text-blue-600">Sign Up / Login</Button>
          </nav>
        </div>
      </header>

      {/* Main Section */}
      <main className="flex-1 bg-gray-100 py-10">
        <div className="container mx-auto">
          {/* Filters Section */}
          <section className="mb-8 bg-white shadow p-6 rounded-2xl">
            <h2 className="text-xl font-semibold mb-4">Filters</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Input placeholder="Search by company or position" />
              <Select>
                <SelectContent>
                  <SelectItem value="location">Location</SelectItem>
                  <SelectItem value="remote">Remote</SelectItem>
                  <SelectItem value="on-site">On-Site</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectContent>
                  <SelectItem value="duration">Duration</SelectItem>
                  <SelectItem value="short">1-3 months</SelectItem>
                  <SelectItem value="long">6+ months</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectContent>
                  <SelectItem value="stipend">Stipend</SelectItem>
                  <SelectItem value="paid">Paid</SelectItem>
                  <SelectItem value="unpaid">Unpaid</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectContent>
                  <SelectItem value="domain">Domain</SelectItem>
                  <SelectItem value="tech">Tech</SelectItem>
                  <SelectItem value="marketing">Marketing</SelectItem>
                  <SelectItem value="design">Design</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </section>

          {/* Company Profiles Section */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Available Companies</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, index) => (
                <Card key={index} className="shadow-lg">
                  <CardContent>
                    <h3 className="text-lg font-bold">Company Name {index + 1}</h3>
                    <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <Button className="mt-4">View Details</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="bg-blue-600 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Internship Platform. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
