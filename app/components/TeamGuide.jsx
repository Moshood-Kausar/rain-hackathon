import Image from "next/image";

export default function TeamGuide() {

  const guideline = []

  return (
    <section>
      <div>
        <h1 className="">Team guideline</h1>

        <div>
          <div className="w-5 h-5 rounded-full bg-black"></div>

          <div>
            <h2>Team Size</h2>
            <p>Maximum of 3 members per team</p>
          </div>
        </div>

        <div>
          <div className="w-5 h-5 rounded-full bg-black"></div>

          <div>
            <h2>Eligibility</h2>
            <p>Open to students, professionals and tech enthusiasts with a passion for solving real-world problem </p>
          </div>
        </div>
      </div>

      <Image />
    </section>
  )
}