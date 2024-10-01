import "./globals.css";
import { poppins } from "./fonts";
import { NotificationProvider } from "./contexts";

export const metadata = {
  title: "RAIN Hackathon 1.0: Innovate the Future",
  description: "Join us for the RAIN Hackathon 1.0 where the brightest minds in Robotics and Artificial intelligence will converge to tackle Africa's most pressing challenges",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className}`}
      >
        <NotificationProvider>
          {children}
        </NotificationProvider>
      </body>
    </html>
  );
}
