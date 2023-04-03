/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors:
      {
        DiscordBlue:"#404eed",
        DiscordGray:"#f6f6f6",
        DiscordDark:"#23272a",
        DiscordHover:"hsl(235,86.1%,71.8%)",
        DiscordDarkBlue:"#5865f2",
        DiscordShadow:"rgba(0,0,0,0.5)",

      },
    },
  },
  plugins: [],
  fontFamily:{
    Whitney:["Whitney"],
    Ginto:["Ginto"],
    ggSans:["ggSans"],
  },
}
