import VideoSection from "../components/VideoSection";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        
        <br id="main" />
        <p>
          Hello world ! That&apos;s my portfolio ^^<br />
          I&apos;m Kaze Holloway, the greatest Gamer of all time from Congo-Brazzavile<br />
          Sure, I like video games, and a little bit of programming.
        </p>

        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        
        <br id="project" />
        <p><strong>Here are some of my projects :</strong></p>
        <ul>
          <li>   ⁜ Cars location with WinDev 25</li>
          <li>   ⁜ Graphics generator with ChartJS</li>
          <li>   ⁜ Books managment with Java</li>
          <li>   ⁜ Todo app with React JS</li>
          <li>   ⁜ Portfolio with Next JS</li>
        </ul>

        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        
        <br id="game" />
        <p><strong>Here is a little gameplay video of <em>Dragon Ball FighterZ</em> :</strong></p>
        <br />
        <VideoSection />

        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        
        <br id="contact" />
        <p><strong>Contact me :</strong></p>
        <ul>
          <li>   ⁜ Phone : +242 06 690 5598</li>
          <li>   ⁜ Email : darlychrist05@gmail.com</li>
          <li>   ⁜ GitHub : https://github.com/KazeHolloway</li>
          <li>   ⁜ PlayStation Network : DeDarnat</li>
        </ul>
      </main>
    </div>
  );
}
