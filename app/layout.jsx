import "./globals.css";
import { poppins } from "./fonts";

export const metadata = {
  title: "RAIN Hackathon 2024: Innovate the Future",
  description: "Join us for the RAIN Hackathon 2024 where the brightest minds in Robotics and Artificial intelligence will converge to tackle Africa's most pressing challenges",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className}`}
      >
        {children}
      </body>
    </html>
  );
}
