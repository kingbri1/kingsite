export default function About() {
  return (
    <div className="flex flex-col min-h-screen grow items-center overflow-visible">
      <h1 className="text-yellow-300 text-center text-4xl md:text-5xl lg:text-6xl lg:leading-spread font-header font-semibold tracking-wide p-3">
        Who am I?
      </h1>
      <div className="md:max-w-3xl xl:max-w-4xl rounded-xl relative bg-lightbg font-medium">
        <p className="text-whitesmoke px-6 lg:px-10 text-md lg:text-lg py-6 font-paragraph tracking-wide leading-spread">
          My name is Brian, known online as kingbri. I&apos;m a student doctor pursuing a DO degree
          with a planned specialization in immunology. Currently, I am in pursuit of my DO degree
          with a planned specialization in immunology.
          <br />
          <br />
          My primary interests have always been in medicine and learning how the human body works.
          As such, I have spent many years over studying biology, anatomy, nutrition, and other
          fields of medicine. Having faced chronic illness myself, I am dedicated to ensuring others
          can lead happy and healthy lives.
          <br />
          <br />
          However, this website focuses more on my software development expertise. I first learned
          how to program in Python at age 15 and created a small mario-kart 2d-game in
          processing.py. However, I lost interest in programming due to a lack of project ideas.
          <br />
          <br />
          Eventually, I stumbled upon the Android community and built my own custom kernel in 2018
          using C. In February of 2020, I started programming bots using the Discord, Twitch, and
          Twitter APIs. These bots are semi-popular, and I have designed them with goals of
          educating the public and making my social media life easier. The same principle applies to
          Apple applications that I created in to make various functions easier on end-user
          iDevices.
          <br />
          <br />
          Currently, I am exploring the field of AI, including subfields such as Stable Diffusion
          and the use of LLMs for creative writing. My interest and skills in software development
          complement my future medical career, as learning multiple languages and principles will
          help me succeed and potentially develop healthcare-oriented software.
          <br />
          <br />
          <span className="text-blue-400">Languages:</span>
          <br />
          <span className="text-yellow-300">Python, Swift, TS, JS, Rust, C#, HTML, CSS, C</span>
          <br />
          <br />
          <span className="text-blue-400">Frameworks:</span>
          <br />
          <span className="text-yellow-300">
            SwiftUI, PyTorch, React.js, Nextjs, Unity, Discord bot API, Twitch API, Twitter bot API,
            Tailwind CSS, Git
          </span>
        </p>
      </div>
    </div>
  );
}
