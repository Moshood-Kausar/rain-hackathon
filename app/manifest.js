
export default function manifest() {
  return {
    name: 'RAIN - Hackathon 1.0',
    short_name: 'RAIN HACK',
    description: 'Join us for the RAIN Hackathon 1.0 where the brightest minds in Robotics and Artificial intelligence will converge to tackle Africa\'s most pressing challenges.',
    start_url: '/?v=1.0.0',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: './icon.png',
        sizes: '*',
        type: 'image/png',
      },
    ],
  }
}
